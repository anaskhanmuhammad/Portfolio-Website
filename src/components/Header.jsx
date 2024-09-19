import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="name">
          <span className="big-letter">A</span>
          <span className="small-letter">NAS</span>
          <span className="big-letter">K</span>
          <span className="small-letter">HAN</span>
        </div>


        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>


        <nav>
          <ul className={menuOpen ? "show" : ""}>
            <a href="">
              <li>Home</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
