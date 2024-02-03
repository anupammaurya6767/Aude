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
                <p>As a burgeoning startup in IT services and consulting, we bring a wealth of expertise, fortified by almost two decades of experience as a VAS major. Our innovative product line is crafted to cater to the diverse needs of consumers, ensuring meaningful and engaging content.</p>
                <p> Remaining on the cutting edge of technology trends and fostering constant innovation, we pride ourselves on enhancing the business impact for our clients. Witness the joy on your team's faces as we drive upward revenue trends.</p>
                <p> At our core, we are dedicated to uncovering fresh revenue streams for our partners through our bespoke IT services and consulting solutions, tailored to meet each client's unique requirements. Join us on the journey to optimize your business and drive success with our forward-thinking approach.</p>
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