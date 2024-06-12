import { Col } from "react-bootstrap"

export const ProjectCard =({title, description, imgUrl}) => {
    return(
        <Col sm={5} md={3}>
            <div className="proj-imgbx">
                <img src={ imgUrl} alt=" project image" />
            <div  className=" proj-txtx">
                <h3> {title}</h3>
                <span> {description}</span>

            </div>
            </div>
        </Col>
    )
}