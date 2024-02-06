import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <p>
            At Aude, we deliver a comprehensive spectrum of IT solutions tailored to meet all your needs.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-browser-chrome" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Web Services{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Aude IT Solutions provides a dynamic range of web services to enhance your online presence. From innovative website design and development to secure hosting solutions...
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-google-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      App Services
                    </Link>
                  </h4>
                  <p className="description">
                  Aude IT Solutions crafts engaging and functional mobile applications, ensuring seamless user experiences and innovative design to elevate your brand in the app landscape....
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-headset-vr"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      AR/VR Services{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Explore new dimensions with Aude's cutting-edge AR and VR design services. Our immersive solutions redefine interaction, providing engaging and memorable experiences for your audience...
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-camera"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Photography Services{" "}
                    </Link>
                  </h4>
                  <p className="description">
                  Capture the essence of your brand with Aude's professional photography services. From product shots to corporate events, our skilled photographers create visually compelling imagery tailored to your needs....{" "}
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-robot"
                    style={{ color: "#FF8080" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Bot Services
                    </Link>
                  </h4>
                  <p className="description">
                  Aude IT Solutions specializes in creating intelligent and responsive bots. Enhance customer interactions and streamline processes with our custom bot development services, optimizing efficiency for your business....
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-train-lightrail-front"
                    style={{ color: "#FFA447" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                    AI & ML Solutions
                    </Link>
                  </h4>
                  <p className="description">
                  Unlock the power of data with Aude's AI and ML services. From predictive analytics to machine learning algorithms, we empower your business with intelligent solutions for informed decision-making....
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-menu-up"
                    style={{ color: "#99BC85" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                    UI-UX Services
                    </Link>
                  </h4>
                  <p className="description">
                  Aude specializes in creating intuitive and user-centric interfaces. Our UX/UI design services prioritize seamless navigation and engaging visuals, enhancing the overall user experience across digital platforms....
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-hexagon"
                    style={{ color: "#910A67" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Blockchain Services
                    </Link>
                  </h4>
                  <p className="description">
                  Venture into the Future of Decentralization with Aude's Blockchain Solutions. Our proficient team pioneers blockchain design and prototyping services, translating concepts into operational prototypes. Embrace innovation and explore the limitless potential of blockchain technology as we push boundaries to redefine the landscape of decentralized solutions....
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-currency-exchange"
                    style={{ color: "#D4AF37" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                    Business Services
                    </Link>
                  </h4>
                  <p className="description">
                  Aude specializes in delivering tailored business services aimed at empowering organizations to thrive in today's competitive landscape. Our comprehensive suite of solutions includes strategic consulting, business process optimization, project management, and IT infrastructure management. With a deep understanding of industry trends and client needs, we work closely with businesses to develop customized strategies and solutions that drive growth, efficiency, and innovation. From streamlining operations to maximizing ROI, Aude is dedicated to helping businesses achieve their objectives and stay ahead of the curve in an ever-evolving market.
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
