import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-top"></div>
      <div className="navbar">
        <div className="header-left">
          <img src="../src/assets/img/logo.svg" alt="Die Rezeptwelt Logo" />
          <h2>Die Rezeptwelt</h2>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Rezepte</NavLink>
          <NavLink to="/add-recipes">Rezept anlegen</NavLink>
          <NavLink to="/about_us">Über uns</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
