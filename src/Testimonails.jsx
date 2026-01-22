import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Ali Raza",
    role: "Home Owner",
    feedback:
      "I designed my 3 Marla home in just 2 minutes with AutoPlan.AI. It saved me both time and money!",
    image: "/bilal.jpg",
  },
  {
    name: "Sara Khan",
    role: "Architecture Student",
    feedback:
      "This tool helped me understand how floor planning works. I can now visualize my projects in 3D easily.",
    image: "/sara.jpg",
  },
  {
    name: "Bilal Ahmed",
    role: "Contractor",
    feedback:
      "Showing quick 3D layouts to my clients impressed them a lot. AutoPlan.AI makes my work faster and smarter.",
    image: "/ali.jpg",
  },
  {
    name: "Fatima Sheikh",
    role: "Interior Designer",
    feedback:
      "I use AutoPlan.AI to create instant house layouts and then customize interiors. It's a game changer!",
    image: "/fatima.jpg",
  },
];

const Testimonails = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="mt-10 flex flex-col items-center justify-center space-y-0 mb-8">
        <p
          style={{ color: "rgba(255, 255, 255, 0.08)" }}
          className="text-3xl lg:text-5xl font-bold relatvie"
        >
          Testimonails
        </p>
        <h2 className="text-amber-400 font-semibold text-2xl lg:text-4xl absolute mt-8">
          Testimonails
        </h2>
      </div>

      {/* Slider Section */}
      <div className="relative w-full max-w-6xl mx-auto p-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Large screens
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-between items-center text-center p-6 bg-emerald-950 rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-full mb-3"
                />
                <h2 className="text-white font-semibold text-lg">{item.name}</h2>
                <span className="text-amber-400 text-sm font-light">
                  {item.role}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed mt-3">
                  {item.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonails;
