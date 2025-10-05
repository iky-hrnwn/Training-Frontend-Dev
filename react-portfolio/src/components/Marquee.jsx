export default function Marquee() {
    const logos = [
        "/assets/icons/logo1.svg",
        "/assets/icons/logo2.svg",
        "/assets/icons/logo3.svg",
        "/assets/icons/logo4.svg",
        "/assets/icons/logo5.svg",
        "/assets/icons/logo6.svg",
        "/assets/icons/logo7.svg",
        "/assets/icons/logo8.svg",
        "/assets/icons/logo9.svg",
        "/assets/icons/logo10.svg",
        "/assets/icons/logo11.svg",
        "/assets/icons/logo12.svg",
        "/assets/icons/logo13.svg",
        "/assets/icons/logo14.svg",
      ];
    
    return (
        <div className="overflow-hidden">
            <div className="flex w-max gap-28">
                {/* track pertama */}
                <div className="flex gap-28">
                    {logos.map((logo, i) => (
                    <img key={i} src={logo} alt={`logo-${i}`} className="h-12 w-auto" />
                    ))}
                </div>
                {/* track kedua → duplikat penuh */}
                <div className="flex gap-28">
                    {logos.map((logo, i) => (
                    <img key={`dup-${i}`} src={logo} alt={`logo-dup-${i}`} className="h-12 w-auto" />
                    ))}
                </div>
            </div>
        </div>
    );
}