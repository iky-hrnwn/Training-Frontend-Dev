import ExperienceCard from "./ExperienceCard";

export default function Experience() {
    const data = [
        { title: "Frontend Dev", date: "Mey 2024 - Present", role: "Fresh Graduate", desc: "Graduate at Telkom University i try to become developer and first i try become frontend."},
        { title: "IT Support", date: "Sept 2024 - Apr 2025", role: "Work at Arenda Nuansa Berlian", desc: "Contracted Arenda Nuansa Berlian become IT Support, at company i help repair computer, and create website."},
        { title: "Game Programmer", date: "Sept 2023 - Mar 2024", role: "Internship at Educa Studio", desc: "at Educa stuio i become Game Programmer with javascript, also use PhaserJS for framework."}
      ];
    
    return (
        <section className="px-[53px] h-auto text-[#F2F2EB]">
            <h3 className="text-2xl mb-3">//my-experience</h3>
            <div className="flex justify-between">
                <div className="flex">
                    <h2 className="font-bold text-4xl basis-120">From learning to building, here’s my path.</h2>
                </div>
                {/* Card */}
                <div className="basis-170 py-20">
                    {data.map((item, index) => (
                    <ExperienceCard key={index} title={item.title} date={item.date} role={item.role} desc={item.desc}/>
                    ))}
                </div>
            </div>
        </section>
    );
}