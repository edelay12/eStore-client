import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Utils/Utils";
import Slider from "react-slick";
import image1 from "./coffee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoPlaySpeed: 3000,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            vertical: true,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div id="slideContainer">
            <div id="Background">
              <div id="mainSlideContainer">
                <span id="heroBanner">We sell the worlds greatest coffee</span>
                <span id="heroSubBanner">
                  Be sure to visit the admin page to edit the products
                </span>
                <Link to={"/shop/collections"}>
                  <Button id="mainShopButton" type="button">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div id="slideContainer">
            <img id="slidePictureMain" src={image1} />
          </div>
          <div id="slideContainerSub" className="circleContainer">
            <img
              id="slidePictureSub"
              src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            />
            <h4 id="shareLink">
              <a
                id="shareLink"
                href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://estore-app.emiller12.now.sh"
                target="_blank"
              >
                Share Java Coffee
              </a>
            </h4>
          </div>
          <div id="slideContainer">
            <div id="Background">
              <div id="mainSlideContainer">
                <span id="heroBanner">Shop our super spring sale</span>
                <span id="heroSubBanner">
                  Be sure to visit the admin page to edit the products
                </span>
                <Link to={"/shop/collections/sale"}>
                  <Button id="mainShopButton" type="button">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
