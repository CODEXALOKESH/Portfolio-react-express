import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import axios from 'axios';
import './Projects.css';
import { host } from '../../constants.js';

const Projects = () => {
  const [dataset, setDataset] = useState([]); // Use state for dataset

  const fetchData = async () => {
    try {
      const response = await axios.post(`${host}/api/v1/project-fetch`, {
        passw: "alokeshPortfolio",
      });
      setDataset(response.data.projects); // Assuming 'projects' is an array in the response
      console.log(response.data.projects);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    
      <div className="project-base">
        {dataset.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            git={project.git}
            live={project.live}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
