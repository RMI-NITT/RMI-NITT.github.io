import React, { useEffect } from "react";
import Selector from "../../components/Selector";
import { styled } from "@mui/system";
import ProjectCard from "./ProjectCard";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/SectionFade";
import { AppContext } from "../../store/context";
import ImageFader from "../../components/ImageFader";

const ProjectCards = styled("div")({
  width: "fit-content",
  display: "grid",
  gridGap: "3rem",
  margin: "3rem auto",
});

const ProjectsPageHolder = ({ title }) => {
  const { projects } = React.useContext(AppContext).projects;
  const { projectsPageImages } = React.useContext(AppContext).miscellaneous;
  useEffect(() => {
    document.title = title;
  }, [title]);
  const [val, setVal] = React.useState("All");
  const options = [
    "All",
    ...new Set(projects.map((project) => project.seededIn)),
  ];
  const filteredProjects = (i) => {
    let toBeReturned;
    if (i === "All") {
      toBeReturned = projects;
    } else {
      toBeReturned = projects.filter((project) => {
        return project.seededIn === i;
      });
    }
    return toBeReturned;
  };
  return (
    <PageWrapper>
      <Section
        title="Our Projects"
        Fader={() => <ImageFader images={projectsPageImages} />}
      >
        Our team comprises a diverse pool of members, which facilitates us to
        work on projects across various domains. We have set foot into multiple
        facets of robotics over the years, including mobile robotics, humanoid
        robotics, swarm robotics, and human-robot interaction, among others, in
        fields such as healthcare, industry, assistive tech, and agriculture, to
        name a few.
      </Section>
      <Selector
        title={"Seeded in"}
        options={options}
        val={val}
        setVal={setVal}
      />
      <ProjectCards
        sx={{
          width: {
            xs: "96%",
            md: "fit-content",
          },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          },
        }}
      >
        {filteredProjects(val).map((project) => (
          <ProjectCard key={project.pid} project={project} />
        ))}
      </ProjectCards>
    </PageWrapper>
  );
};

export default ProjectsPageHolder;
