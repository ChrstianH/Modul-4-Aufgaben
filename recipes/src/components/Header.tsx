import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-top"></div>
      <div className="navbar">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Rezepte</NavLink>
          <NavLink to="/add-recipes">Rezept anlegen</NavLink>
          <NavLink to="/about_us">Über uns</NavLink>
        </nav>
      </div>
    </header>
  );
}
