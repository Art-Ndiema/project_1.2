import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorsharp from "../assets/images/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                lots and lots of Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. <br /> Nostrum ut nobis illum, veritatis ullam
                perferendis iusto aliquam sint enim sit! Facilis velit maiores
                inventore quisquam laudantium magnam voluptas necessitatibus
                impedit?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="meter image 1" />
                  <h4>Mobile applications</h4>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter image 2" />
                  <h4>UI/UX</h4>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter image 3" />
                  <h4>Web Apps</h4>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorsharp}
        alt="background"
      />
    </section>
  );
};
