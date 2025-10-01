export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-5">
        {/* Logo */}
        <div className="font-bold leading-7">
          <h1 className="text-[20px]">Dicki Hernawan</h1>
          <h2 className="text-[16px] text-[#474444]">Frontend Dev</h2>
        </div>
  
        {/* Menu */}
        <ul className="flex gap-7 text-[14px] font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
  
        {/* Button */}
        <div className="flex gap-2 items-center px-5 py-2 bg-white rounded-4xl">
            <div className="w-2 h-2 rounded-full bg-[#2DA667] z-10"></div>
            <span className="absolute w-3 h-3 rounded-full bg-[#2DA667] opacity-75 animate-ping"></span>
            <h1 className="text-[14px] font-bold">Available for work</h1>
        </div>
      </nav>
    );
  }