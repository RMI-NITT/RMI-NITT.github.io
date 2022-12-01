import { styled } from "@mui/material";
import React, { useState } from "react";
import { colors, fontStyles } from "../../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AppContext } from "../../store/context";
import { HashLink as Link } from "react-router-hash-link";

const Section = styled("div")({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  overflow: "hidden",
  position: "relative",
  paddingInline: "10%",
  ["@media (max-width:900px)"]: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    paddingInline: "2rem",
  },
});

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  marginBottom: "1rem",
  textAlign: "center",
});

const SectionContent = styled("div")({
  ...fontStyles.content,
  textAlign: "justify",
  marginTop: "2rem",
});

const Subsection = styled("div")({
  width: "100%",
  flex: "1",
  padding: "2rem",
  ["@media (max-width:780px)"]: {
    padding: "1.2rem",
  },
});

const ImgGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "0.8rem",
});

const ImgCardHolder = styled("div")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: colors.primary,
  position: "relative",
  transition: "all 0.2s ease-out",
  cursor: "pointer",
});

const Img = styled("img")({
  width: "100%",
  height: "100%",
});

const ImgDesc = styled("div")({
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: `${colors.dark}CC`,
  textAlign: "center",
  padding: "auto",
  top: "0",
  color: colors.light,
  border: `2px solid ${colors.primary}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.2rem",
  fontWeight: 500,
});

const ImageBg = styled("div")({
  width: "100%",
  position: "absolute",
  top: 0,
  border: `2px solid ${colors.primary}`,
  height: "100%",
});

const ImgCard = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ImgCardHolder
      sx={{
        transform: hovered ? "scale(1.1)" : "scale(1)",
        zIndex: hovered ? 100 : "inherit",
        overflow: hovered ? "visible" : "hidden",
        // aspectRatio: "1000/562",
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Img src={props.image} />
      {hovered && <ImgDesc>{props.title}</ImgDesc>}
      {hovered && <ImageBg />}
    </ImgCardHolder>
  );
};

const Index = (props) => {
  const { events } = React.useContext(AppContext).events;
  return (
    <Section>
      {/* <Subsection>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>{props.children}</SectionContent>
      </Subsection>
      <Subsection>
        <Carousel />
      </Subsection> */}
      <Subsection>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>
          RMI firmly believes that besides all the work we do as a team to
          innovate and create the up and coming tech, it is highly necessary to
          give back to the community.
          <br />
          <br />
          We organise several workshops and events every year with the vision to
          make newcomers feel welcome and not alien to the field of Robotics.
          Some of our most important workshops and events include: Genesis,
          InHoTTs, Following, RMI Hackathon, Robovigyan, Pragyan Exhibition
        </SectionContent>
      </Subsection>
      <Subsection>
        <ImgGrid>
          {events.map((event) => (
            <Link key={event.id} to={`/events#${event.title}`}>
              <ImgCard image={event.images[0]} title={event.title}></ImgCard>
            </Link>
          ))}
        </ImgGrid>
      </Subsection>
    </Section>
  );
};

export default Index;
