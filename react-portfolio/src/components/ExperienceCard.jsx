// ExperienceCard.jsx
export default function ExperienceCard({ title, date, role, desc }) {
  return (
    <div className="flex items-center"> 
      <p className="basis-30 font-bold opacity-90">{date}</p>
      <div className="basis-2xl">
        <div className="basis-52 font-bold">{title}</div>
        <p className="font-light">{role}</p>
        <p className="font-light">{desc}</p>
      </div>
    </div>
  );
}
