import React from "react";
import {useEffect} from "react";
import aiml from "../img/gifs/gifs/ai.gif";
import app from "../img/gifs/gifs/app.gif";
import ar from "../img/gifs/gifs/ar.gif";
import bot from "../img/gifs/gifs/bot.gif";
import photo from "../img/gifs/gifs/photo.gif";
import block from "../img/gifs/gifs/block.gif";
import ui from "../img/gifs/gifs/ui.gif";
import web from "../img/gifs/gifs/web.gif";
import busy from "../img/gifs/gifs/migration.gif"

import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css'
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  
    useEffect(() => {
       AOS.init();
       AOS.refresh();
     }, []);
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
              With a proven record of success, we're here to elevate your projects to the next level
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Web-Development"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={web}
                  className="img-fluid"
                  alt=""
                  title="Web Development"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                <i className="bi bi-browser-chrome" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Web Development </h4>
                  <p className="description">
                    
                    Aude IT Solutions provides a dynamic range of web services to enhance your online presence. From innovative website design and development to secure hosting solutions...
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="App-Development">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-google-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> App Development </h4>
                  <p className="description">
                  Aude IT Solutions crafts engaging and functional mobile applications, ensuring seamless user experiences and innovative design to elevate your brand in the app landscape....
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={app} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="AR-VR-Services">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img src={ar} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-headset-vr"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">AR-VR Services </h4>
                  <p className="description">
                  Explore new dimensions with Aude's cutting-edge AR and VR design services. Our immersive solutions redefine interaction, providing engaging and memorable experiences for your audience...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Photography-Services">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-camera"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Photography Services </h4>
                  <p className="description">
                  Capture the essence of your brand with Aude's professional photography services. From product shots to corporate events, our skilled photographers create visually compelling imagery tailored to your needs....
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img src={photo} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Bot-Services">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img src={bot} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-robot"
                    style={{ color: "#FF8080" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Bot Services </h4>
                  <p className="description">
                  Aude IT Solutions specializes in creating intelligent and responsive bots. Enhance customer interactions and streamline processes with our custom bot development services, optimizing efficiency for your business....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="AI-ML-Services">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-train-lightrail-front"
                    style={{ color: "#FFA447" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> AI & ML Solutions </h4>
                  <p className="description">
                  Unlock the power of data with Aude's AI and ML services. From predictive analytics to machine learning algorithms, we empower your business with intelligent solutions for informed decision-making....
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img src={aiml} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="UI-UX-Services">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img src={ui} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-menu-up"
                    style={{ color: "#99BC85" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">UI-UX Services </h4>
                  <p className="description">
                  Aude specializes in creating intuitive and user-centric interfaces. Our UX/UI design services prioritize seamless navigation and engaging visuals, enhancing the overall user experience across digital platforms....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Blockchain-Services">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-hexagon"
                    style={{ color: "#910A67" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Blockchain Services </h4>
                  <p className="description">
                  Venture into the Future of Decentralization with Aude's Blockchain Solutions. Our proficient team pioneers blockchain design and prototyping services, translating concepts into operational prototypes. Embrace innovation and explore the limitless potential of blockchain technology as we push boundaries to redefine the landscape of decentralized solutions....
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <img src={block} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Business-Services">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img src={busy} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="icon flex-shrink-0">
                <i
                    className="bi bi-currency-exchange"
                    style={{ color: "#D4AF37" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">Business Services </h4>
                  <p className="description">
                  Aude specializes in delivering tailored business services aimed at empowering organizations to thrive in today's competitive landscape. Our comprehensive suite of solutions includes strategic consulting, business process optimization, project management, and IT infrastructure management. With a deep understanding of industry trends and client needs, we work closely with businesses to develop customized strategies and solutions that drive growth, efficiency, and innovation. From streamlining operations to maximizing ROI, Aude is dedicated to helping businesses achieve their objectives and stay ahead of the curve in an ever-evolving market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
