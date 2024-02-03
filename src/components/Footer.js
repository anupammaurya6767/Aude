import React from "react";
import footerLogo from '../img/sym-logo.svg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <h3>Aude</h3>
                </Link>
                <p>
                We are committed to redefining possibilities in the digital landscape. Explore the forefront of technology with Aude IT Solutions, where innovation knows no bounds.
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="https://twitter.com/aude_itsol" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="https://www.instagram.com/audeitsolutions/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  
                  <Link to ="https://www.linkedin.com/in/aude-it-solutions-a65b182b2/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Web-Development">
                      Web Development
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#App-Development">
                      App Development
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#AR-VR-Services">AR/VR Services</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Photography-Services">Photography Services</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Bot-Services">Bot Services</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#AI-ML-Services">AI & ML Services</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#UI-UX-Services">UI/UX Services</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Blockchain-Services">Blockchain Services</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                 
                  {/* #1,Sundaram Illam, <br /> Chellamal Street, <br /> Shenoy
                  Nagar, Chennai - 600 030. <br />
                  <br /> */}
                  <strong>Phone:</strong> +91 70425 25269 <br />
                  <strong>Email: </strong>
                  <a href="mailto:audeitsolutions@gmail.com">                  
                     audeitsolutions@gmail.com
                  </a> 
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy;  Copyright
              <span> Aude </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;
