import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import Service1 from "../../images/services/Compliance Companion Icons-01.svg"

const Services = () => {
  return (
    <>
      <div className="services-area section">
        <Container>
          <div className="services-content">
            <h2 className="services-title">
              Your Ultimate Compliance Companion
            </h2>
            <p className="services-description">
              We've crafted a dashboard where every regulation, no matter how
              intricate, is distilled, analysed, and laid out for you.
            </p>
          </div>
          <div>
            <Row className="services-container">
              <Col className="services-card" md={4} lg={3}>
                <img className = "service-item_icon" src = {Service1}></img>
                <h4 className="service-item_title">Scans</h4>
                <p className="service-item_description">
                  We continuously monitor the regulatory horizon, including
                  standards set by bodies like APRA.
                </p>
              </Col>
              <Col className="services-card" md={4} lg={3}>
                <h4 className="service-item_title">Organises</h4>
                <p className="service-item_description">
                  We categorise obligations thematically, eliminating repetitive
                  information and clutter.
                </p>
              </Col>
              <Col className="services-card" md={4} lg={3}>
                <h4 className="service-item_title">Action Plans</h4>
                <p className="service-item_description">
                  We continuously monitor the regulatory horizon, including
                  standards set by bodies like APRA.
                </p>
              </Col>
              <Col className="services-card" md={4} lg={3}>
                <h4 className="service-item_title">Always Updated</h4>
                <p className="service-item_description">
                  Regulations change. When they do, we update your obligation
                  register in real-time.
                </p>
              </Col>
              <Col className="services-card" md={4} lg={3}>
                <h4 className="service-item_title">Reports</h4>
                <p className="service-item_description">
                  Stay informed about your compliance status with clear and
                  concise Reglas reporting.
                </p>
              </Col>
              <Col className="services-card" md={4} lg={3}>
                <h4 className="service-item_title">Integration</h4>
                <p className="service-item_description">
                  Seamlessly connect Reglas to your enterprise risk management
                  system (ERM).
                </p>
              </Col>
              <Col className="services-card" md={4} lg={3}>
                <h4 className="service-item_title">Ready Submissions</h4>
                <p className="service-item_description">
                  With Reglas, be ever-ready with regulatory certifications fit
                  for immediate submission to governing bodies.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default Services
