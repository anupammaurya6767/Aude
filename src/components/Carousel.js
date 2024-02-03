import React, { useState } from "react";
import shapeImg from "../img/img-wave2.png";
import heroImg1 from "../img/header/ph4.jpeg";
import heroImg2 from "../img/header/ph2.jpeg";
import heroImg3 from "../img/header/ph3.jpeg";
import heroImg4 from "../img/header/ph6.jpeg";

import { Link } from "react-router-dom";
import '../../node_modules/react-modal-video/css/modal-video.css'
import ModalVideo from 'react-modal-video'

const Carousel = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <section id="hero" className="hero d-flex">
        <img className="shape" src={shapeImg} alt="#" />
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-7 col-md-12 col-12">
              <h2 data-aos="fade-up">
              Welcome to Aude: Your Comprehensive IT Services Provider
              </h2>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                Explore the forefront of technology with Aude IT Solutions, where innovation knows no bounds.
                </p>
              </blockquote>
              <div className="d-flex align-items-center">
                <Link to="/about" className="btn-get-started">
                  Read More
                </Link>
                <ModalVideo channel='youtube' autoplay='true' isOpen={isOpen} videoId="" onClose={() => setOpen(false)} />
              <span className="btn-watch-video d-flex align-items-center pointer" onClick={()=> setOpen(false)}> <i className="bi bi-play-circle-fill"></i>
                <span>Watch Intro</span>
              </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="header-image ">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="0"
                      className="active bg-white"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="1"
                      className="bg-white"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="2"
                      className="bg-white"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide-to="3"
                      className="bg-white"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                     
                    >
                      <img src={heroImg1} style = {{width: '100px', height: '319px'}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg2} style = {{width: '100px', height: '319px'}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg3} style = {{width: '100px', height: '319px'}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={heroImg4} style = {{width: '100px', height: '319px'}} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
