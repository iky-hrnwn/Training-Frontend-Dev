export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-5">
        {/* Logo */}
        <div className="font-bold leading-6">
          <h2 className="text-[20px] font-bold">DICKI HERNAWAN</h2>
          <h2 className="text-[16px] text-[#8C8C88] font-bold">FRONTEND DEV</h2>
        </div>
  
        {/* Menu */}
        <ul className="flex gap-7 text-[14px] font-medium text-[#3F403B]">
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
  
        {/* Button */}
        <h1 className="text-[14px] font-bold">AVAILABLE FOR WORK</h1>
      </nav>
    );
  }