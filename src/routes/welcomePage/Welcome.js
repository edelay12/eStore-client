import React from "react";
import Footer from "../../components/Footer/Footer";

export default function Welcome() {
  return (
    <React.Fragment>
      <section className="About">
        <section className="aboutDetails">
          <h1>Hi, welcome to Java Coffee Shop.</h1>
          <h4 className="subBanner">This project was created by Evan Miller</h4>

          <div className="detailsRow">
            <div className="detailsLeft">
              <h3 id="center">
                <u>To get started</u>
              </h3>
              <br />
              - To use the shop, click the login button above and use the demo
              login below or feel free to register and make a new account:
              <br />
              <b id="paddingLeft">Username: </b>guest
              <br />
              <b id="paddingLeft">Password (case sensitive): </b>Guest2020!
              <b></b>
              <p>
                - This project is a full e-commerce coffee shop (minus payment
                for demo purpose) created using <b>React </b>, <b>CSS</b>,{" "}
                <b>Node</b>, <b>Express</b>, and <b>PostgreSQL</b>. Be sure to
                use the <b>Admin page</b> to demo the CRUD operations of the
                site.{" "}
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </React.Fragment>
  );
}
