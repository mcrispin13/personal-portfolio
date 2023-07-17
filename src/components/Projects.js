import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg0 from "../assets/img/tsocial.png";
import projImg1 from "../assets/img/digital-asset.png";
import projImg2 from "../assets/img/vr-crane.png";
import projImg3 from "../assets/img/tsocial-web.png";
import projImg4 from "../assets/img/blind-assist.png";
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
export const Projects = () => {
  const projects = [
    {
      title: "Startup Story Telling App",
      description: "Developed onboarding features for a mobile app that enables users to create and share their life’s journey.",
      imgUrl: projImg0,
      technologies: "Technologies Used: Salesforce, HTML,CSS, React Native",
    },
    {
      title: "Augmented Reality Digital Asset Binding App",
      description: "Created a mobile app for frontline workers in collaboration with industry partner PTC, enabling users to attach digital assets like notes, videos, and voice recordings to a spatial anchor (Azure), providing convenient access to relevant information with contextual relevance.",
      imgUrl: projImg1,
      technologies: "Technologies Used: C#, Unity, Azure Cloud, JSON, iOS",

    },
    {
      title: "Virtual Reality Crane Training Simulation",
      description: "Partnered with Packet39 to design an immersive VR crane tutorial, faithfully replicating real crane controls and behavior, ensuring a comprehensive training experience with complete six degrees of freedom.",
      imgUrl: projImg2,
      technologies: "Technologies Used:Technologies Used: Unity, C#, Unity, Xcode, iOS, Trello",
    },
    {
      title: "Startup Story Telling Web App",
      description: "Implemented onboarding features for a web application, empowering users to create and share their life's journey.",
      imgUrl: projImg3,
      technologies: "Technologies Used: Salesforce, HTML,CSS, React.Js",
    },
    {
      title: "Wearable Prototype for Enhanced Mobility and Awareness",
      description: "Designed and implemented a wearable Raspberry Pi prototype to enhance mobility and awareness for visually challenged individuals, integrating facial recognition, voice, and haptic feedback",
      imgUrl: projImg4,
      technologies: "Technologies Used:Python, OpenCV, Git, Raspberry Pi",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg5,
    // },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible}) => 
              <div className={isVisible ? "animated__animated animate__bounce" : ""}>
            <h2>Projects</h2>
            <p>
            Explore the diverse range of software projects I've developed, showcasing my skills and creativity.
            </p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justiy-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third"> Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return(
                                  <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Coming Soon</Tab.Pane>
                <Tab.Pane eventKey="third">Coming Soon</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='imageRight'></img>
    </section>
  );
};
