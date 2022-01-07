import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav id="menu"> 
      <Link to="/">Użytkownicy</Link>
      <Link to="/zadania">Zadania</Link>
    </nav>
  );
};

export default Menu;
