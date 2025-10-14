import Arrow from "./Arrow";

export default function ProjectCard({projImage, title, role, tools, desc}) {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="flex">
        {/* Images */}
        <img src={projImage} alt={title} />

        {/* Information */}
        <div>
          <div>{title}</div>
          <p>PERAN:{role}</p>
          <p>TOOLS:{tools}</p>
          <p>{desc}</p>
          <div className="flex gap-2 items-center">
            <a className="hover:underline" href="#contact">VIEW CASE STUDY</a>
            <Arrow />
          </div>
        </div>
      </div>
    </section>
  );
}
