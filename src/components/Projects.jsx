import React from "react";
import styled from "styled-components";

const Section = styled.div`

  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white; /* Text color */
 

    
 
`;
const Container = styled.div`
     max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content vertically */
  padding: 20px;
  text-align: center;
  scroll-snap-align: center;

`;
const ProjectsSection = styled.div`
  flex: 1;
`;

const ProjectsContainer = styled.div`
  padding: 40px 0; /* Increase top and bottom padding for better spacing */
`;

const ProjectsTitle = styled.h2`
color: rgb(73, 197, 219);
  font-size: 68px;
  margin-bottom: 20px;
`;

const ProjectsGrid = styled.div`
  margin-top: 80px;
    display: flex;
    flex-direction: row;
  gap: 20px;
  width: 1440px;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    flex-direction: column;
    width: 400px;
    grid-template-columns: 1fr; /* Change to a single column on smaller screens */
  }
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-top: 10px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #777;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 18px;
  text-decoration: none;
  color: #007bff;
  transition: color 0.2s ease;
  &:hover {
    color: #0056b3;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Summarizer",
      description:
        "A web application designed to simplify the process of extracting and summarizing content from articles or web pages. This project leverages several technologies, including Vite, React, Tailwind CSS, and the Rapid API platform, to provide users with a user-friendly and efficient tool.",
      imageUrl: "./img/project1.png",
      projectLink: "https://melodic-pudding-4a7ef4.netlify.app/",
    },
    {
      title: "Quizz App",
      description:
        "Quizz app made with Vite, Next.js and Tailwind CSS. I learned how to work with Next.js and also used Firebase to provide login and registration for my quiz.",
      imageUrl: "./img/project2.png",
      projectLink: "https://project1.com",
    },
    {
      title: "Modovo Shop",
      description:
        "I created a frontend project in React with the help of Tailwind CSS for my customer, who wanted to see some designs for his online clothing store. I designed the main page and a working frontend section.",
      imageUrl: "./img/project3.png",
      projectLink: "https://modovo.netlify.app/",
    },
  ];

  return (
    <Section>
      <Container>
        <ProjectsSection>
          <ProjectsContainer>
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <ProjectImage src={project.imageUrl} alt={project.title} />
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLink
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </ProjectLink>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsContainer>
        </ProjectsSection>
      </Container>
    </Section>
  );
};

export default Projects;
