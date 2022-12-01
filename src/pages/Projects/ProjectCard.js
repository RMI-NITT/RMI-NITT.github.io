import React from "react";
import { styled } from "@mui/material";
import { colors } from "../../constants";
import { Link } from "react-router-dom";

const ProjectCard = styled("div")({
  width: "35vw",
  height: "18rem",
  boxShadow: `0px 0px 10px ${colors.primary}`,
  position: "relative",
  overflow: "hidden",
  borderRadius: "0.4rem",
  cursor: "pointer",
  "@media (max-width: 767px)": {
    height: "15rem",
  },
});

const Cover = styled("div")({
  width: "65%",
  height: "100%",
  position: "absolute",
  marginRight: "1rem",
  right: "0",
  top: "0",
});

const CoverSheet = styled("div")(({ opened }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  top: "0",
  left: "0",
  clipPath: opened
    ? "polygon(0 0, 20% 0, 30% 50%, 20% 100%, 0 100%)"
    : "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)",
  transition: "all 0.5s ease-in-out",
  zIndex: "10",
}));

const CoverTitle = styled("div")({
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: colors.primary,
  marginBlockStart: "1rem",
  "@media (max-width: 767px)": {
    fontSize: "1rem",
  },
});

const CoverExpansion = styled("div")({
  fontSize: "1rem",
  fontWeight: "bold",
  color: colors.grey,
  lineHeight: "1.5em",
  height: "3em",
  textOverflow: "ellipsis",
  overflow: "hidden",
  "@media (max-width: 767px)": {
    fontSize: "0.8rem",
  },
});

const CoverDesc = styled("div")({
  fontSize: "1rem",
  height: "65%",
  color: colors.light,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@media (max-width: 767px)": {
    fontSize: "0.8rem",
  },
});

const CoverHeader = styled("div")({
  height: "35%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const ProjectCardHolder = (props) => {
  const [opened, setOpened] = React.useState(true);
  const toggleOpened = () => {
    setOpened((prevOpened) => !prevOpened);
  };
  return (
    <Link to={"/project/" + props.project.pid}>
      <ProjectCard
        onMouseEnter={toggleOpened}
        onMouseLeave={toggleOpened}
        sx={{
          margin: "auto",
          width: {
            xs: "90vw",
            sm: "90vw",
            md: "35vw",
            lg: "30vw",
          },
        }}
      >
        <CoverSheet
          sx={{
            background: `url(${props.project.cardCoverImage}) no-repeat center center`,
            backgroundSize: "cover",
          }}
          opened={opened}
        />
        <Cover opened={opened}>
          {props.project.shortName && (
            <CoverTitle>{props.project.shortName}</CoverTitle>
          )}
          <CoverExpansion>{props.project.longName}</CoverExpansion>

          {props.project.shortDesc && (
            <CoverDesc>
              <div style={{ height: "9rem", overflow: "hidden" }}>
                <p>{props.project.shortDesc}</p>
              </div>
            </CoverDesc>
          )}
        </Cover>
      </ProjectCard>
    </Link>
  );
};

export default ProjectCardHolder;
