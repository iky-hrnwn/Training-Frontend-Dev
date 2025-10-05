export default function ExperienceCard({ title, date, role, desc }) {
    return (
      <div className="flex">
        {/* Description */}
        <div className="flex flex-col basis-125">
          <h3 className="font-bold text-[40px]">{title}</h3>
          <p className="font-light text-[20px] mb-3">{date}</p>
          <p className="font-light text-[20px]">{role}</p>
          <p className="font-light text-[20px]">{desc}</p>
        </div>
      </div>
    );
  }
  