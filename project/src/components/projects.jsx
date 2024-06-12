import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/lilbot image.png";
import projImg2 from "../assets/images/teamwork.png";
import projImg3 from "../assets/images/smile-bot image.png";


export const Projects =() => {
    const projects =[
        {
            title: "Logistics mobile application",
            description: " This is a mobile application that users can use to track their shipments from anywhere in the world",
            imgUrl: projImg1,
          },
          {
            title: "Graphics designing",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Pointify app",
            description: "POS app",
            imgUrl: projImg3,
          },
          {
            title: "Portfolio",
            description: "You are using it right now",
            imgUrl: projImg1,
          },
          {
            title: "Tic Tac Toe",
            description: "have some fun",
            imgUrl: projImg2,
          },
          {
            title: "Calculator",
            description: "Don't do math with your head use this instead",
            imgUrl: projImg3,
          },
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                <Col size={20}>
                <TrackVisibility>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>  
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Velit aperiam delectus pariatur sequi voluptatibus quia culpa consectetur sed, tenetur, hic perspiciatis mollitia, maxime aliquid odio commodi ex? <br/>Cumque, eligendi itaque?</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                   projects.map((project, index) => {
                                    return(
                                        <projectCard key={index}
                                        {...project}
                                        />
                                    )
                                   } )
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolorum facere nemo quia beatae aliquid, dolore saepe pariatur explicabo quaerat! Deleniti repellendus aut molestiae eos? Tempora doloremque perspiciatis impedit repudiandae.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis dolorum facere nemo quia beatae aliquid, dolore saepe pariatur explicabo quaerat! Deleniti repellendus aut molestiae eos? Tempora doloremque perspiciatis impedit repudiandae.</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container> //our customized tab
                </div>
                </TrackVisibility>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}