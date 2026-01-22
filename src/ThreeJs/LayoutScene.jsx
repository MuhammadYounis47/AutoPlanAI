import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, Text } from "@react-three/drei";
import * as THREE from "three";

const LayoutScene = ({ rooms }) => {
  // Safe rooms array
  const safeRooms = Array.isArray(rooms) ? rooms : [];

  // Calculate bounding box
  const bounds = useMemo(() => {
    if (safeRooms.length === 0) return { minX: 0, maxX: 0, minZ: 0, maxZ: 0 };

    let minX = Infinity,
      maxX = -Infinity,
      minZ = Infinity,
      maxZ = -Infinity;

    safeRooms.forEach((r) => {
      const rx1 = r.x;
      const rx2 = r.x + (r.width || 0);
      const rz1 = r.z;
      const rz2 = r.z + (r.height || 0);
      if (rx1 < minX) minX = rx1;
      if (rx2 > maxX) maxX = rx2;
      if (rz1 < minZ) minZ = rz1;
      if (rz2 > maxZ) maxZ = rz2;
    });

    return { minX, maxX, minZ, maxZ };
  }, [safeRooms]);

  // Check if wall is external
  const isExternalWall = (x1, z1, x2, z2) => {
    const eps = 1e-6;
    const onMinX = Math.abs(x1 - bounds.minX) < eps && Math.abs(x2 - bounds.minX) < eps;
    const onMaxX = Math.abs(x1 - bounds.maxX) < eps && Math.abs(x2 - bounds.maxX) < eps;
    const onMinZ = Math.abs(z1 - bounds.minZ) < eps && Math.abs(z2 - bounds.minZ) < eps;
    const onMaxZ = Math.abs(z1 - bounds.maxZ) < eps && Math.abs(z2 - bounds.maxZ) < eps;
    return onMinX || onMaxX || onMinZ || onMaxZ;
  };

  // Constants
  const wallHeight = 3;
  const wallThickness = 0.25;

  // Room Mesh component
  const RoomMesh = ({ room }) => {
    const w = Math.max(0.1, room.width || 1);
    const d = Math.max(0.1, room.height || 1);
    const baseX = room.x || 0;
    const baseZ = room.z || 0;

    const centerX = baseX + w / 2;
    const centerZ = baseZ + d / 2;

    const points = [
      { x: baseX, z: baseZ }, // A
      { x: baseX + w, z: baseZ }, // B
      { x: baseX + w, z: baseZ + d }, // C
      { x: baseX, z: baseZ + d }, // D
    ];

    const doorW = Math.min(1.0, w * 0.6);
    const doorH = 2.1;
    const windowW = Math.min(2.0, w * 0.4);
    const windowH = 1.2;

    const isGarage = (room.name || "").toLowerCase().includes("garage");

    let doorWallIndex = -1;
    for (let i = 0; i < 4; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % 4];
      if (!isExternalWall(p1.x, p1.z, p2.x, p2.z)) {
        doorWallIndex = i;
        break;
      }
    }
    if (doorWallIndex === -1) doorWallIndex = 0;
    if (isGarage) doorWallIndex = -1;

    const getWallParams = (i) => {
      const p1 = points[i];
      const p2 = points[(i + 1) % 4];
      const dx = p2.x - p1.x;
      const dz = p2.z - p1.z;
      const length = Math.sqrt(dx * dx + dz * dz);
      const angle = Math.atan2(dz, dx);
      const cx = (p1.x + p2.x) / 2;
      const cz = (p1.z + p2.z) / 2;
      return { length, angle, cx, cz, p1, p2 };
    };

    const floorColor = (() => {
      const n = (room.name || "").toLowerCase();
      if (n.includes("bed")) return "#cfd8dc";
      if (n.includes("kitchen")) return "#efe6d6";
      if (n.includes("bath")) return "#e8eef6";
      if (n.includes("garage")) return "#bbbbbb";
      return "#f5efe0";
    })();

    const furniture = (() => {
      const n = (room.name || "").toLowerCase();
      if (n.includes("living")) {
        return [
          { w: w * 0.5, h: 0.6, d: d * 0.25, x: centerX - w * 0.15, z: centerZ - d * 0.15, color: "#8B4513" },
          { w: w * 0.3, h: 0.4, d: d * 0.2, x: centerX + w * 0.25, z: centerZ + d * 0.1, color: "#654321" },
        ];
      }
      if (n.includes("bed")) {
        return [
          { w: Math.min(2.0, w * 0.6), h: 0.6, d: Math.min(2.2, d * 0.6), x: centerX, z: centerZ - d * 0.15, color: "#4a6fa5" },
        ];
      }
      if (n.includes("kitchen")) {
        return [
          { w: w * 0.9, h: 0.9, d: 0.4, x: centerX, z: centerZ + d * 0.25, color: "#f0f0f0" },
        ];
      }
      if (n.includes("garage")) {
        return [
          { w: w * 0.8, h: 0.6, d: d * 0.5, x: centerX, z: centerZ, color: "#606060" },
        ];
      }
      return [{ w: w * 0.3, h: 0.5, d: d * 0.3, x: centerX, z: centerZ, color: "#6b4f3b" }];
    })();

    return (
      <group key={`${room.name}-${room.x}-${room.z}`}>
        {/* Floor */}
        <mesh position={[centerX, 0, centerZ]} receiveShadow>
          <boxGeometry args={[w, 0.05, d]} />
          <meshStandardMaterial color={floorColor} roughness={0.8} />
        </mesh>

        {/* Walls */}
        {Array.from({ length: 4 }).map((_, i) => {
          const { length, angle, cx, cz, p1, p2 } = getWallParams(i);
          const external = isExternalWall(p1.x, p1.z, p2.x, p2.z);
          const wallY = wallHeight / 2;
          const wallMatColor = external ? "#e8e6e1" : "#d4c9b8";
          const placeDoor = doorWallIndex === i;
          const depthOffset = 0.02;

          return (
            <group key={`wall-${i}`} position={[cx, wallY, cz]} rotation={[0, -angle, 0]}>
              {/* Wall body */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[length, wallHeight, wallThickness]} />
                <meshStandardMaterial color={wallMatColor} roughness={0.9} />
              </mesh>

              {/* Window on external walls */}
              {external && length > 2.0 && (
                <group position={[0, wallHeight * 0.55, (wallThickness / 2) + depthOffset]}>
                  <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[Math.min(windowW, length * 0.7), windowH + 0.15, 0.06]} />
                    <meshStandardMaterial color={"#654321"} />
                  </mesh>
                  <mesh position={[0, 0, 0.04]}>
                    <planeGeometry args={[Math.min(windowW, length * 0.7) - 0.06, windowH]} />
                    <meshStandardMaterial color={"#87CEEB"} transparent opacity={0.5} side={THREE.DoubleSide} />
                  </mesh>
                </group>
              )}

              {/* Door */}
              {placeDoor && !isGarage && length > doorW + 0.2 && (
                <group position={[0, doorH / 2, (wallThickness / 2) + depthOffset]}>
                  <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[doorW + 0.12, doorH + 0.12, 0.06]} />
                    <meshStandardMaterial color={"#4b2e2e"} />
                  </mesh>
                  <mesh position={[0, 0, 0.04]}>
                    <boxGeometry args={[doorW, doorH, 0.03]} />
                    <meshStandardMaterial color={"#8B4513"} />
                  </mesh>
                </group>
              )}

              {/* Garage big opening */}
              {isGarage && external && (
                <group position={[0, wallHeight * 0.6, (wallThickness / 2) + depthOffset]}>
                  <mesh>
                    <boxGeometry args={[Math.min(length, 4.5), 2.2, 0.06]} />
                    <meshStandardMaterial color={"#333"} />
                  </mesh>
                </group>
              )}
            </group>
          );
        })}

        {/* Furniture */}
        {furniture.map((f, idx) => (
          <mesh key={`f-${idx}`} position={[f.x, f.h / 2 + 0.05, f.z]} castShadow receiveShadow>
            <boxGeometry args={[f.w, f.h, f.d]} />
            <meshStandardMaterial color={f.color} />
          </mesh>
        ))}

        {/* Label */}
        <Text
          position={[centerX, wallHeight + 0.35, centerZ]}
          fontSize={0.4}
          color="#2c3e50"
          anchorX="center"
          anchorY="middle"
        >
          {room.name}
        </Text>
      </group>
    );
  };

  // Ground plane size
  const groundWidth = Math.max(10, Math.abs(bounds.maxX - bounds.minX) + 20);
  const groundDepth = Math.max(10, Math.abs(bounds.maxZ - bounds.minZ) + 20);
  const groundCenterX = (bounds.minX + bounds.maxX) / 2;
  const groundCenterZ = (bounds.minZ + bounds.maxZ) / 2;

  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{
          position: [
            groundCenterX,
            Math.max(20, Math.max(bounds.maxX - bounds.minX, bounds.maxZ - bounds.minZ) * 1.0),
            groundCenterZ + Math.max(20, 30),
          ],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          intensity={1.2}
          position={[10, 30, 20]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={100}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />

        <Environment preset="sunset" />

        {/* Ground */}
        <mesh position={[groundCenterX, -0.01, groundCenterZ]} receiveShadow>
          <boxGeometry args={[groundWidth, 0.02, groundDepth]} />
          <meshStandardMaterial color="#90EE90" roughness={0.9} />
        </mesh>

        {/* Grid helper */}
        <gridHelper
          args={[Math.max(groundWidth, groundDepth), Math.ceil(Math.max(groundWidth, groundDepth) / 1)]}
          position={[groundCenterX, 0, groundCenterZ]}
        />

        {/* Rooms */}
        {safeRooms.map((r, idx) => (
          <RoomMesh key={idx} room={r} />
        ))}

        <ContactShadows position={[groundCenterX, -0.02, groundCenterZ]} opacity={0.35} scale={Math.max(groundWidth, groundDepth)} blur={1} />

        <OrbitControls makeDefault enablePan enableZoom enableRotate minDistance={5} maxDistance={300} />
      </Canvas>
    </div>
  );
};

export default LayoutScene;
