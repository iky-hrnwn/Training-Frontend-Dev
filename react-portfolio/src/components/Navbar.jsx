// Navbar.jsx
import NavLinks from "./NavLinks"
import Arrow from "./Arrow";

export default function Navbar() {
  return (
      <nav className="text-[#262622]">
        <div className="container mx-auto px-3 py-2 ">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="font-bold leading-5">
              <h2 className="nav-item text-xl font-bold">DICKI <br />HERNAWAN</h2>
            </div>

            {/* Navbar Links */}
            <div className="hidden sm:flex">
              <NavLinks />
            </div>
            
            {/* Button */}
            <div className="flex gap-2 items-center">
              <a className="hover:underline" href="#contact">HIRE ME</a>
              <Arrow />
            </div>
          </div>
        </div>
      </nav>      
  );
}
