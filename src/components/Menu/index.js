import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Alderam Stream Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        {" "}
      </Button>
    </nav>
  );
}

export default Menu;