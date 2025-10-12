// Experience.jsx
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const data = [
    {
      title: "Frontend Dev",
      date: "May 2024 - Present",
      role: "Fresh Graduate",
      desc: "Graduate at Telkom University, trying to become a developer starting as a frontend.",
    },
    {
      title: "IT Support",
      date: "Sept 2024 - Apr 2025",
      role: "Work at Arenda Nuansa Berlian",
      desc: "Contracted at Arenda Nuansa Berlian as IT Support, helping repair computers and build websites.",
    },
    {
      title: "Game Programmer",
      date: "Sept 2023 - Mar 2024",
      role: "Internship at Educa Studio",
      desc: "Worked as a Game Programmer using JavaScript and PhaserJS framework.",
    },
  ];

  return (
    <section className="h-screen bg-[#262622] text-[#F2F2EB] uppercase">
      <div className="container mx-auto px-3 py-2">
        <div className="flex flex-col">
          <div className="font-bold text-8xl py-25 text-center">EXPERIENCE</div>
          <p className="font-bold text-2xl uppercase">
            From learning to<br />building, here’s my path.
          </p>
          <div className="flex justify-end">
            {/* Line */}
            <div className="w-px mx-8 bg-[#F6F6ED] border-0 "></div>
            {/* Cards */}
            <div className="">
              {data.map((item, index) => (
                <ExperienceCard
                  key={index}
                  title={item.title}
                  date={item.date}
                  role={item.role}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
