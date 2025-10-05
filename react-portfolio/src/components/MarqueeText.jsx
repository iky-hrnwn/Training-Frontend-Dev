export default function Marquee() {
    return (
      <section className="text-white py-20 overflow-hidden">
        {/* Baris 1 */}
        <div className="whitespace-nowrap flex animate-marquee text-[6rem] font-extrabold uppercase">
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
        </div>
  
        {/* Baris 2 */}
        <div className="whitespace-nowrap flex animate-marquee-reverse text-[6rem] font-extrabold uppercase">
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
        </div>
  
        {/* Baris 3 */}
        <div className="whitespace-nowrap flex animate-marquee text-[6rem] font-extrabold uppercase">
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
        </div>

        {/* Baris 4 */}
        <div className="whitespace-nowrap flex animate-marquee-reverse text-[6rem] font-extrabold uppercase">
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
          <span className="mx-8">WORK WORK WORK WORK WORK</span>
        </div>
      </section>
    );
  }