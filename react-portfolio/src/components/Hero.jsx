import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="bg-[#E9F0F2] w-screen h-screen">
      <div className="px-[53px]">
        <Navbar/>
        {/* Hero */}
        <div className="flex">
          {/* Title */}
          <div className="leading-32">
            <h1 className="text-[#0540F2] font-black text-[126px]">Dicki Hernawan</h1>
            <h2 className="text-[#0540F2] font-extrabold text-[38px] italic">Building Digital Experiences</h2>
          </div>
          <div className="w-[400px] h-[400px] mb-28"></div>
        </div>
        {/* Information */}
        <div className="flex flex-row-reverse gap-2 ">
          <div className="flex items-center order-2">
            <h3 className="text-6xl">2+</h3>
            <h3 className="text-[14px] basis-20">Years of Experience</h3>
          </div>
          <div className="flex items-center order-1">
            <h3 className="text-6xl">6+</h3>
            <h3 className="text-[14px] basis-20">Completed Projects</h3>  
          </div>   
        </div> 
      </div>
    </section>
  );
}
