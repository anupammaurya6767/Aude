import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import manag_photo1 from '../img/team/Padmakumar.png';
import manag_photo2 from '../img/team/Sundaramoorthy.png';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Empowering Visions, Enriching Communities</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p> Aude is a trailblazing IT services company dedicated to bringing our clients' visions to fruition. From our inception, our mission has been clear — to collaborate closely with our clients in the IT sector, driving growth in their top-line revenue.</p>
                  <p> The name "Aude" reflects our commitment to audacious goals and innovative solutions. We exist to elevate the success of our clients, providing tailored IT services that significantly impact their revenue streams.</p>
                  <p> Since our establishment, Aude has experienced remarkable growth, swiftly becoming a prominent player in the IT services landscape. We've generated substantial revenues for our clients, currently catering to a growing base of satisfied customers.</p>
                  <p> Beyond our commitment to client success, Aude is deeply rooted in corporate responsibility. Our vision encompasses financial success, employee well-being, and community support. As part of our commitment, Aude allocates a portion of our earnings to make a positive impact on the world. Join us on a transformative journey where success harmonizes with social responsibility.</p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>At Aude, our vision is to emerge as the global leader in IT services , setting the standard for excellence in value-added solutions. We aim to create unparalleled value for our customers and stakeholders, establishing a lasting impact on the industries we serve.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>Our mission at Aude is to anticipate and meet the evolving needs of our clients in the IT sector. We are dedicated to delivering outstanding and cost-effective products, ensuring that our solutions not only meet but exceed the expectations of our valued clients.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p> Consumer focus, creativity, resourcefulness, and an entrepreneurial spirit drive our business at Aude. We are a team inspired by diversity, respecting and valuing each contribution. Our commitment lies in fostering a culture that encourages innovation, collaboration, and a relentless pursuit of excellence.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Team</h2>
               <p>Harnessing profound experience within the IT services landscape, Aude's leadership team is devoted to surpassing customer expectations. Through innovative and cost-effective solutions, industry insights, and unmatched services, we are dedicated to delivering excellence and shaping a transformative future for our clients.</p>
            </div>
            {/* <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Anupam Maurya</h4>
                     <span>Co-Founder & Director</span>
                     <p>Padma is a visionary Technocrat with 16 Years of experience and has worked with consulting majors & service industries in the field of IT technologies. His specialization includes Networking, Securities, System Architecture, Data base and Enterprise solutions .</p>
                     <div className="social">
                     <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                     <Link to ="/"> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo2} className="img-fluid" alt="" /></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>V.Sundaramoorthy </h4>
                     <span>Co-Founder & Director</span>
                     <p>Sundar is a visionary and entrepreneur in his own right. He has worked with IT and Engineering majors before entering the telecom business. He has over 14 years of management experience with IT & Engineering majors and has significant global experience and also an expert in corporate alliance. </p>
                     <p> Sundar has extensive multi-functional management experience in marketing, sales, business and corporate development and holds a Bachelors degree in  Electrical & Electronic Engineering.</p>
                     <div className="social">
                        <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                        <Link to ="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/"> <i className="bi bi-linkedin" target="_blank"></i> </Link>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About