import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Elevate Your Business, Boosting Revenue and Efficiency</h4>
                <p>As a dynamic startup in IT Services, we bring forth a wealth of expertise honed over years in the industry. Our innovative product line is meticulously crafted to address the diverse needs of both businesses and individuals, ensuring the delivery of meaningful and engaging content.</p>
                <p> Remaining at the forefront of technology trends and fostering a culture of constant innovation, we take pride in amplifying impact for our clients, leading to upward trends in both business growth and personal development.</p>
                <p> At our core, we are dedicated to discovering fresh solutions for our partners through bespoke IT services, tailored to each client's unique requirements. Join us on the journey to optimize your business and personal endeavors with our forward-thinking approach.</p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue