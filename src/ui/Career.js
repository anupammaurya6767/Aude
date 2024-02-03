import React from "react";
import career from "../img/careers-img.jpg";
import careerHeader from "../img/blog-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Careers"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
              Join Our Team of Innovators
              </h2>
            </div>

            <div className="row gy-4 blog-details">
              <div className="col-lg-6">
                <img
                  src={career}
                  className="img-fluid"
                  style={{ width: '400px', height: '400px' }}
                  alt="Do what you LOVE!, Inviting you to build a great future with us"
                  title="Do what you LOVE!, Inviting you to build a great future with us"
                />
              </div>
              <div className="col-lg-6">
                <p>
                Are you passionate about pushing the boundaries of technology and driving innovation? At Aude, we're building a team of exceptional individuals who excel in web and app development, AI, AR/VR, photography, bot development, UI/UX design, and blockchain solutions.
                </p>
                <p>
                At Aude, we believe in fostering creativity and providing our team with the resources and support they need to thrive. Whether you're a seasoned developer, a visionary designer, or a tech enthusiast eager to explore new frontiers, we invite you to join us in shaping the future of digital solutions.
                </p>
                <p>
                Join Aude to collaborate with a dynamic team in a supportive environment, where your ideas shape the future of technology. From crafting cutting-edge applications to revolutionizing user experiences, your contributions will empower businesses and individuals alike. With ongoing learning opportunities and a supportive culture, we're committed to helping you unlock your full potential and take your career to new heights.
                </p>
                <div className="content">
                  <blockquote>
                    <p>
                      Please send your resumes to &nbsp;
                      <a href="mailto:audeitsolutions@gmail.com">
                        audeitsolutions@gmail.com
                      </a>
                    </p>
                  </blockquote>
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

export default Career;
