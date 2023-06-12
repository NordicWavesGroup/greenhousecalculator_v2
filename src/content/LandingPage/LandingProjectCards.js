import React from "react";
import "./_landing-project-cards.scss";
import { Button, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "carbon-components-react";
import forestImage from "../trees-gbd5cedd06_1280.jpg";
import renewableEnergyImage from '../solar-power-gc1c1fcc82_1280.jpg'
import childrenImage from '../children-g430a7114d_1280.jpg'
import smallCabinImage from '../small-wooden-house-surrounded-by-tall-trees-forest.jpg'
import happyWomenImage from '../happy-woman-rural-wooden-house.jpg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


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

const headerData = [
  {
    key: "description",
    header: "Description"
  },
  {
    key: "location",
    header: "Location"
  },
  {
    key: "status",
    header: "Status"
  }
];

const LandingProjectCards = () => {
  return (<>

 
    
    <div className="projects-container">
      <h2>Our Partners</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        emulateTouch={true}
        swipeable={true}
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <DataTable rows={[project]} headers={headerData}>
                {({ rows, headers, getHeaderProps, getTableProps }) => (
                  <TableContainer title="Project">
                    <Table {...getTableProps()} style={{ width: "100%" }}>
                      <TableHead>
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeader {...getHeaderProps({ header })}>
                              {header.header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            {row.cells.map((cell) => (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>
              <Button  className="project-button">
                View Project
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
      
    </div>
    </>
  );
};

export default LandingProjectCards;
