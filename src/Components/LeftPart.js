import React from "react";

import Logo2 from "../assets/Logo2.svg";

export default function LeftPart() {
  return (
    <div className="surfacePro7-achat header w700 flex column dark-bg">
      <a
        className="surfacePro7-img flex1 center-content"
        href="https://www.learnylib.com/formations/dentaire/obligation-financement/"
      >
        <img className="img-logo-r" src={Logo2} alt="" />
      </a>
    </div>
  );
}
