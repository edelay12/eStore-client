import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <FontAwesomeIcon className="logoIcon" icon={faMugHot} />
        <h3 id="logoFooterH3"> Java Coffee</h3>
      </div>
      <h3>&#169; Evan Miller 2020</h3>
      <h3>
        <a id="portfolioLink" href="http://www.evanmiller.co" target="_blank">
          evanmiller.co
        </a>
      </h3>
    </div>
  );
}
