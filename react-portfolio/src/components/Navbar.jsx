// Navbar.jsx
export default function Navbar() {
  return (
    <nav className="px-[53px] flex justify-between items-center py-5 top-0 sticky z-[999]">
      {/* Logo */}
      <div className="font-bold leading-6">
        <h2 className="nav-item text-[20px] font-bold">DICKI HERNAWAN</h2>
        <h2 className="nav-item text-[16px] text-[#8C8C88] font-bold">FRONTEND DEV</h2>
      </div>

      {/* Menu */}
      <ul className="flex gap-7 text-[14px] font-medium text-[#3F403B]">
        <li><a className="nav-item" href="#home">HOME</a></li>
        <li><a className="nav-item" href="#about">ABOUT</a></li>
        <li><a className="nav-item" href="#experience">EXPERIENCE</a></li>
        <li><a className="nav-item" href="#projects">PROJECTS</a></li>
        <li><a className="nav-item" href="#contact">CONTACT</a></li>
      </ul>

      {/* Button */}
      <h1 className="text-[14px] font-bold">AVAILABLE FOR WORK</h1>
    </nav>
  );
}
