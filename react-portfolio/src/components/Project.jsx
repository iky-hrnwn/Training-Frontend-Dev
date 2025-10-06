// Project.jsx
import Marquee from "./Marquee";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section className="px-[53px] h-screen py-20 bg-[#F2F2EB]">
      <h3 className="text-[#8F8686] text-2xl mb-3">//featured-projects</h3>
      <h2 className="font-bold text-4xl">A selection of works I’ve built and explored.</h2>

      <ProjectCard />
    </section>
  );
}
