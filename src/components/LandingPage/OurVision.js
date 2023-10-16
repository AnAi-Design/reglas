import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HowItWorksImage from "../../images/reglas-hero.svg"

const OurVision = () => {
  return (
    <>
      <div className="our-vision-area section">
        <Container>
          <div>
            <Row>
              <Col md = {6}>
                <div className="our-vision_img-area">
                  <img
                    className="our-vision-img"
                    src={HowItWorksImage}
                    alt="Hero Image"
                  />
                </div>
              </Col>
              <Col className="our-vision-content" md = {6}>
                <h1 className="our-vision-title">
                  We look to a future where streamlined compliance is the norm
                  for financial institutions
                </h1>
                <p className="our-vision-description">
                  Our approach is clear-cut: provide fast and automated
                  regulatory insights that fit the unique needs of every
                  organisation and are adaptable as they grow. We believe in
                  giving you the tools to manage compliance at your own pace and
                  on your terms.
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

export default OurVision
