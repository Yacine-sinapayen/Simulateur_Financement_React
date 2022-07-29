import React from "react";
import useDimension from "../hook/useDimension";
import Logo2 from "../assets/Logo2.svg";

export default function LeftPart() {

  const browserWidth = useDimension();

  return (
    <div className={
    browserWidth < 821 ? "w100p surfacePro7-achat heade-responsive flex column dark-bg" : "w700 surfacePro7-achat heade-responsive  flex column dark-bg"
    }>
      <a
        className="surfacePro7-img flex1 center-content"
        href="https://www.learnylib.com/formations/dentaire/obligation-financement/"
      >
        <img className="img-logo-responsive w75p" src={Logo2} alt="" />
      </a>
    </div>
  );
}
