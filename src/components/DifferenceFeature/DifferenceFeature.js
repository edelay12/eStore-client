import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./Difference.css";

export default function DifferenceFeature() {
  return (
    <section className="differenceSection">
      <div className="differenceBannerContainer">
        <h2 className="differenceBanner">What makes us different?</h2>
        <span className="differenceSub">
          Here at Java coffee, we specialize in bringing the most delicious
          coffee right to you, from all over the planet. We add a secret
          ingredient to every batch to ensure our premium source coffee stays
          fresh all the way from leaving our shop to being consumed.
        </span>
      </div>
      <div className="differenceImageContainer">
        <img
          className="differenceImage"
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="java coffee shop demo picture"
        />
      </div>
    </section>
  );
}
