import ProjectCard from "./ProjectCard";

export default function Project() {
  const data = [
    {
      projImage: "./assets/ui.examp.png",
      title: "WEBSITE COMPANY PROFILE",
      role: "FRONTEND DEVELOPER",
      tools: "HTML, CSS, JS, tailwindcss, Reactjs",
      desc: "completed create ui and implemented to website with reactjs AND TAILWINDCSS.",
    },
  ];
  return (
    <section className="h-screen bg-[#262622] text-[#F2F2EB] uppercase">
      <div className="container mx-auto px-3 py-2 pt-20">
      <div className="font-bold text-8xl py-25 text-center">WORK</div>
      <p className="font-bold text-2xl uppercase">
        Selected works that merge clean UI with<br />robust frontend architecture.
      </p>
      <ProjectCard />
      </div>
    </section>
  );
}
