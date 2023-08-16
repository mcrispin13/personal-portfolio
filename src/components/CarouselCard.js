import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselCard = ({projects}) => {
     return (
        <Carousel interval={null} indicators={false} className="carousel-custom">
            {projects.map((project,projectIndex) => (
                <Carousel.Item key={projectIndex}>
                    <div className="carousel-imgbx">
                        <img 
                            className="carousel-img" 
                            src={project.imgUrl}
                            alt={project.title}
                        />
                        <div className="carousel-txtx">
                            <h4>{project.title}</h4>
                            <h3>{project.subtitle}</h3>
                            <p>{project.description}</p>
                            <span>{project.technologies}</span>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
     );
};