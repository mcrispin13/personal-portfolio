import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { CaretUp } from "react-bootstrap-icons";
import sales from "../assets/img/salesforce1.svg";
import htmlIcon from "../assets/img/html-icon.svg";
import reactIcon from "../assets/img/icon-react.svg"
import cssIcon from "../assets/img/css-icon.svg";
import jsicon from "../assets/img/icon-javascript.svg";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                I possess a dynamic skillset, encompassing adept Salesforce
                administration and development, proficient front-end web development, and a
                passion for crafting innovative apps to deliver exceptional user
                experiences.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                   <img src={sales} alt="Image"/>  
                  <h2>Salesforce Administration</h2>
                </div>
                <div className="item">
                  <img src={sales} alt="Image"/>
                  <h2>Salesforce Development</h2>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt="Image"/>
                  <h2>HTML</h2>
                </div>
                <div className="item">
                  <img src={cssIcon} alt="Image"/>
                  <h2>CSS</h2>
                </div>
                <div className="item">
                   <img src={jsicon} alt="Image"/>
                  <h2>JavaScript</h2>
                </div>
                <div className="item">
                  <img src={reactIcon} alt="Image"/>
                  <h2>React</h2>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
