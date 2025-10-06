// ProjectCard.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ProjectCard() {
  const projects = [
    { title: "Canon 77D Landing Page", image: "/assets/img1.jpg" },
    { title: "LinkedIn Fundraising Tool", image: "/assets/img2.jpg" },
    { title: "Portfolio Website", image: "/assets/img3.jpg" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-md overflow-hidden hover:shadow-xl transition">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
