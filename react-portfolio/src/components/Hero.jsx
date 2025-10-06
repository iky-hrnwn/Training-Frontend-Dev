// Hero.jsx
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  return (
    <section className="bg-[#F2F2EB] pb-7">
      <div className="px-[53px]">
        {/* Hero */}
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="flex flex-col leading-26 text-center items-center">
              <h1 className="text-[#262622] font-bold text-[190px] mt-16 -tracking-[19px]">
                PROGRAMMER
              </h1>
              <h2 className="text-[#262622] font-normal text-[22px]">
                BUILDING DIGITAL EXPERIENCES
              </h2>
              <img
                className="absolute w-80 h-auto -bottom-5"
                src="/assets/hero-image.png"
                alt="photo-profile"
              />
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-row-reverse gap-2 justify-between basis-75 items-end">
            <div className="flex items-end order-2 grow justify-end">
              <h3 className="text-6xl">2+</h3>
              <h3 className="text-[14px] basis-20 font-medium">YEARS OF EXPERIENCE</h3>
            </div>
            <div className="flex items-end order-1">
              <h3 className="text-6xl">6+</h3>
              <h3 className="text-[14px] basis-20 font-medium">COMPLETED PROJECTS</h3>
            </div>
            <h3 className="order-3 font-medium">BASED IN INDONESIA</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
