import React from "react";
import "./_landing-project-cards.scss";
import { Button } from "carbon-components-react";
import forestImage from "../trees-gbd5cedd06_1280.jpg";
import renewableEnergyImage from '../solar-power-gc1c1fcc82_1280.jpg';
import childrenImage from '../children-g430a7114d_1280.jpg';
import happyWomenImage from '../happy-woman-rural-wooden-house.jpg';

const projects = [
  {
    title: "Afforestation Initiative",
    description: "Planting trees in deforested areas to promote biodiversity and enhance CO2 absorption.",
    location: "Rainforest Region",
    status: "In Progress",
    image: forestImage
  },
  {
    title: "Renewable Energy Installation",
    description: "Installing solar panels and wind turbines to generate clean energy and reduce CO2 emissions.",
    location: "Green Valley",
    status: "Completed",
    image: renewableEnergyImage
  },
  {
    title: "CO2 Offset Program",
    description: "Implementing a program to offset carbon emissions through sustainable projects and practices.",
    location: "Global",
    status: "Ongoing",
    image: childrenImage
  },
  {
    title: "Green Building Construction",
    description: "Constructing eco-friendly buildings with energy-efficient designs and materials.",
    location: "Cityscape",
    status: "Upcoming",
    image: happyWomenImage
  }
];

const LandingProjectCards = () => {
  return (<>
  
  
      <h2>Our Partners</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <img src={project.image} alt={project.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <Button className="card-button">Buy Now</Button>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default LandingProjectCards;
