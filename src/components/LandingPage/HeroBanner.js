import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HeroImage from "../../images/reglas-hero.svg"

const HeroBanner = () => {
  return (
    <>
      <div className="hero-area section">
        <Container>
          <Row>
            <Col className="hero-content" md={6}>
              <h1 className="hero-title">
                Simplifying Compliance, <br></br>
                One Rule at a Time.
              </h1>
              <p className="hero-description">
                Navigate the world of compliance with clarity and confidenceout
                shares.
              </p>
            </Col>
            <Col className="hero-image-wrapper" md = {6}>
              <img className="hero-image" src={HeroImage} alt="Hero Image" />
            </Col>
          </Row>
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

export default HeroBanner
