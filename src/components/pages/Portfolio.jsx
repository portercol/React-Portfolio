// import React, Project & Button component and project data
import React from "react";
import Project from "../Project";
import projectData from "../projectData.json";
import Button from "../Button";

// create Portfolio functional component
function Portfolio() {
    
    // return data to page using project data that will be displayed in a card from Project component
    // using properties from projectData to display projects
    // use .map to map over the properties to find the property needed for each section of the card
    return (
        <div className="container">
            <div className="row justify-content-around">

                {projectData.map(project => {
                    return (
                        <Project
                            key={project.id}
                            description={project.description} 
                            id={project.id}
                            img={project.img} 
                            link={project.link} 
                            name={project.name} 
                            repo={project.repo} 
                            tech={project.tech}
                            >
                        </Project>
                    );
                })}
            </div>
            <Button btnText="contact" link={"/contact"}/>
        </div>
    )
}

// export Portfolio component
export default Portfolio;