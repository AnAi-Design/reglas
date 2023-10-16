import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import StartUpJourneyImage from "../../images/journey.svg"

const OurProduct = () => {
  return (
    <>
      <div className="our-ptoduct-area section">
        <Container>
          <div class="our-product-content">
            <h2 className="our-product-title">
              Simplifying Compliance for Modern <br></br>Financial Organizations
            </h2>
            <p className="our-product-description">
              Provide fast and automated regulatory insights that fit the unique
              needs of every organisation and are adaptable as they grow.
            </p>
          </div>
          <div>
            <Row className="our-product-points">
              <Col className="our-product-item" md={4}>
                <h4>Adaptable</h4>
                <p>
                  {" "}
                  With Reglas, be ever-ready with regulatory certifications fit
                  for immediate submission to governing bodies.
                </p>
              </Col>
              <Col className="our-product-item" md={4}>
                <h4>Automated</h4>
                <p>
                  With AI-driven insights, we stay ahead of the curve, ensuring
                  you're always informed and prepared.
                </p>
              </Col>
              <Col className="our-product-item" md={4}>
                <h4>Fast</h4>
                <p>
                  Forget tedious checks and endless gap analysis. We delivers
                  robust, reliable compliance insights quickly.{" "}
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

export default OurProduct
