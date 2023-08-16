import { Container, Col, Row, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CarouselCard } from "./CarouselCard";
import projImg0 from "../assets/img/tsocial.png";
import projImg1 from "../assets/img/digital-asset.png";
import projImg2 from "../assets/img/vr-crane.png";
import projImg3 from "../assets/img/tsocial-web.png";
import projImg4 from "../assets/img/blind-assist.png";
import carouselImg1 from "../assets/img/datamodel.png";
import carouselImg2 from "../assets/img/ui.png";
import carouselImg3 from "../assets/img/dataquality.png";
import carouselImg4 from "../assets/img/datasecurity.png";
import carouselImg5 from "../assets/img/automation.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {
  const projects = [
    /* Salesforce Projects*/
    {
      title: "Enhanced UI Efficiency for HR Recruiting App",
      description:
        "As part of the project, I honed the data model of the Recruiting app to refine the candidate placement process. By meticulously analyzing object relationships, dependencies, and data entry points, I ensured seamless data flow across candidates, positions, and interviewers.",
      subtitle:"Data Model Implementation:",
      imgUrl: carouselImg1,
      technologies: "Technologies Used: Salesforce",
    },
    {
      title: "Enhanced UI Efficiency for HR Recruiting App",
      description:
        "For the Recruiting app's interface, I prioritized user-friendliness and data security. The redesign encompassed intuitive navigation, role-based access controls, and secure data management. A dedicated review tab and visual components amplified data visibility, enriching user experience while upholding information security.",
      subtitle:"Custom User Interface Enhancement:",
      imgUrl: carouselImg2,
      technologies: "Technologies Used: Salesforce",
    },
    {
      title: "Enhanced UI Efficiency for HR Recruiting App",
      description:
        "A thorough data model analysis guided my approach to ensure data quality. I introduced validation rules and data integrity checks, ensuring consistent and precise data entry. This proactive strategy elevated candidate records' accuracy and minimized errors, cultivating reliable data throughout the application.",
      subtitle:"Enhanced Data Quality:",
      imgUrl: carouselImg3,
      technologies: "Technologies Used: Salesforce",
    },
    {
      title: "Enhanced UI Efficiency for HR Recruiting App",
      description:
        "My focus on data security materialized through robust authentication mechanisms and role-based access controls. By implementing field-level security, I enabled authorized access to sensitive data. This approach fortified data confidentiality and integrity, ensuring compliance and safeguarding candidate information.",
      subtitle:"Secure Data Access:",
      imgUrl: carouselImg4,
      technologies: "Technologies Used: Salesforce",
    },
    {
      title: "Enhanced UI Efficiency for HR Recruiting App",
      description:
        "Leveraging Salesforce's Flow Builder, I streamlined essential business processes. Automation encompassed interviewer record creation, multistep approval workflows for positions, and candidate rating flows. These automated processes not only expedited operations but also upheld security protocols, ensuring efficient processes while maintaining data integrity and security.",
      subtitle:"Automated Process Enhancement:",
      imgUrl: carouselImg5,
      technologies: "Technologies Used: Salesforce",
    },
    /* Other Projects*/
    {
      title: "Startup Story Telling App",
      description:
        "Developed onboarding features for a mobile app that enables users to create and share their life’s journey.",
      imgUrl: projImg0,
      technologies: "Technologies Used: Salesforce, HTML,CSS, React Native",
    },
    {
      title: "Augmented Reality Digital Asset Binding App",
      description:
        "Created a mobile app for frontline workers in collaboration with industry partner PTC, enabling users to attach digital assets like notes, videos, and voice recordings to a spatial anchor (Azure), providing convenient access to relevant information with contextual relevance.",
      imgUrl: projImg1,
      technologies: "Technologies Used: C#, Unity, Azure Cloud, JSON, iOS",
    },
    {
      title: "Virtual Reality Crane Training Simulation",
      description:
        "Partnered with Packet39 to design an immersive VR crane tutorial, faithfully replicating real crane controls and behavior, ensuring a comprehensive training experience with complete six degrees of freedom.",
      imgUrl: projImg2,
      technologies:
        "Technologies Used:Technologies Used: Unity, C#, Unity, Xcode, iOS, Trello",
    },
    {
      title: "Startup Story Telling Web App",
      description:
        "Implemented onboarding features for a web application, empowering users to create and share their life's journey.",
      imgUrl: projImg3,
      technologies: "Technologies Used: Salesforce, HTML,CSS, React.Js",
    },
    {
      title: "Wearable Prototype for Enhanced Mobility and Awareness",
      description:
        "Designed and implemented a wearable Raspberry Pi prototype to enhance mobility and awareness for visually challenged individuals, integrating facial recognition, voice, and haptic feedback",
      imgUrl: projImg4,
      technologies: "Technologies Used:Python, OpenCV, Git, Raspberry Pi",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg5,
    // },
  ];

  /* Carousel */
  const carousels = [
    [projects[0], projects[1], projects[2], projects[3], projects[4]], // First carousel projects
    // [projects[2], projects[3]], // Second carousel projects
    // [projects[4]], // Third carousel projects
  ];
  /* Carousel */

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore the diverse range of software projects I've
                    developed, showcasing my skills and creativity.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justiy-content-center align-items-center"
                id="pills-tab"
              >
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
                    {projects.slice(5).map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {carousels.map((carouselProjects, carouselIndex) => (
                    <Row key={carouselIndex}>
                      <Col>
                        <CarouselCard projects={carouselProjects} />
                      </Col>
                    </Row>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="third">Coming Soon</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="imageRight"
      ></img>
    </section>
  );
};
