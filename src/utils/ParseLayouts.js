export const parseLayoutText = (data) => {
  try {
    if (Array.isArray(data)) return data;

    if (typeof data === "string") {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
    }

    return [];
  } catch (error) {
    console.error("❌ Layout parse error:", error.message);
    return [];
  }
};
