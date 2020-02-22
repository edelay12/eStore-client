import React, { Component } from 'react';
import Slider from "react-slick";
import image1 from './coffee.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      autoPlaySpeed : 3000,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        },
      ]
    };
    return (
    <div className='container'>
      <Slider {...settings}>
      <div id='slideContainer'>
           <div id='Background'>
           </div>
          </div>
          <div id='slideContainer'>
            <img  id='slidePictureMain' src={image1} />
          </div>
      <div id='slideContainer'>
            <img id='slidePicture' src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1662&q=80" />
            <h1 id='slideBanner'>Super Spring Sale!</h1>
          </div>
          <div id='slideContainer'>
            <img  id='slidePicture' src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
            <h1 id='slideBanner'>Share the love of coffee</h1>
          </div>
      </Slider>
    </div>
    );
  }
}