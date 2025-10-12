// Hero.jsx

export default function Hero() {
  return (
  <section className="h-screen w-auto">
    <div className="container mx-auto px-3 flex flex-col text-[#262622] pb-8">
      {/* Heading */}
      <div className="pt-24 text-center">
        <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-16 md:leading-20 lg:leading-28">FRONTEND<br />DEVELOPER</h1>
        <p className="text-[10px] md:text-[15px] lg:text-xl tracking-wide pt-2">CREATING AN INTUITIVE & BUSINESS-ORIENTED USER INTERFACE</p>
      </div>

      {/* Information of User */}
      <div className="grid grid-flow-col gap-4 pt-4 justify-i">
        <div className="font-semibold justify-self-start self-end text-xs md:text-[14px] lg:text-[16px]">BASED IN INDONESIA</div>

        <div className="justify-self-end">
          <div className="text-xl md:text-2xl lg:text-4xl leading-tight">1+</div>
          <p className="tracking-tight mb-2 text-xs md:text-[14px] lg:text-[16px]">YEARS OF<br />EXPERIENCE</p>
          <div className="text-xl md:text-2xl lg:text-4xl leading-tight">2+</div>
          <p className="tracking-tight text-xs md:text-[14px] lg:text-[16px]">COMPLETED<br />PROJECT</p>
        </div>
      </div>
    </div>
  </section>
  );
}
