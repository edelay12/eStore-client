import React from "react";
import Footer from "../../components/Footer/Footer";
import "./about.css";

export default function About() {
  return (
    <React.Fragment>
      <section className="About">
        <section className="aboutDetails">
          <h1>Hi, welcome to Java Coffee Shop.</h1>
          <h4>This project was created by Evan Miller</h4>

          <div className="detailsRow">
            <div className="detailsLeft">
              <h3 id="center">
                <u>About this project</u>
              </h3>
              <p>
                - This project is a full e-commerce coffee shop (minus payment
                for demo purpose) created using <b>React </b>, <b>CSS</b>,{" "}
                <b>Node</b>, <b>Express</b>, and <b>PostgreSQL</b>. Be sure to
                use the <b>Admin page</b> to demo the CRUD operations of the
                site.
                <h4 id="center">Server</h4>- The site delivers full user
                functionality, with, <b>JWT Tokens</b>, and{" "}
                <b>JWT Token refresh</b>, registration, secure login, and
                shopping cart save.
                <br />
                All user functions encrypted with proper security measures in
                mind. These measures include:
                <ul>
                  <li>
                    JWT Tokens and Refresh are issued securly, while expiring
                    along with the session if the user goes idle for more then 5
                    minutes
                  </li>
                  <li>
                    Password incryption using the NPM library BCrypt, with
                    secure hashing and salting rounds
                  </li>
                  <li>
                    Cross Site Scripting (XSS) prevention on product adds and
                    user registration
                  </li>
                  <li>KnexJS provides built in SQL injection provention</li>
                </ul>
                - Protected endpoints are authenticated through a JWT service
                middleware that checks for the API token in the header provided
                through the client.
                <br />
                - All of the client side enviornmental variables are securly
                hidden in proper .env files.
                <br />- Best RESTful practices were used when building the
                server.
                <h4 id="center">Client</h4>
                - The client side uses React Router, with public and private
                routes.
                <br />
                - Context API provides State management.
                <br />- All testing is done with Jest.
              </p>
            </div>
            <div className="detailsRight">
              <h3 id="center">
                <u>To get started</u>
              </h3>
              <br />
              - To use the shop, use the demo login below or feel free to
              register and make a new account:
              <br />
              <b>Username: </b>guest
              <br />
              <b>Password (case sensitive): </b>Guest2020!<b></b>
              <br />
              <br />
              - Explore the: shop page, the landing page, product collentions
              page, the individual product page, and the shopping cart.
              <br />
              <br />- Use the Admin page to make changes to the store products
              and see CRUD functions.
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
