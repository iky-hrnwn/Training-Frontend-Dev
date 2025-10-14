// ExperienceCard.jsx
export default function ExperienceCard({ title, date, role, desc }) {
  return (
    <div className="flex items-center"> 
      <p className="basis-30 font-bold opacity-90">{date}</p>
      <div className="basis-2xl">
        <div className="font-bold text-2xl pb-2">{title}</div>
        <p className="font-light pb-2">{role}</p>
        <p className="font-light pb-4">{desc}</p>
      </div>
    </div>
  );
}
