import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/awards">Awards</NavLink>
    </nav>
  );
}
