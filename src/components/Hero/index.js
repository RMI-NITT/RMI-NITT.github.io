import { styled } from "@mui/material";
import React from "react";

const HeroLayout = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  paddingInline: "10vw",
  height: "80vh",
  marginInline: "auto",
  alignItems: "space-evenly",
  justifyContent: "center",
  flexDirection: "row",
  ["@media (max-width:780px)"]: {
    flexDirection: "column",
    width: "100%",
    paddingInline: "0",
    justifyContent: "space-evenly",
  },
});

const HeroSectionLayout = styled("div")({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ["@media (max-width:780px)"]: {
    marginTop: "1rem",
    padding: "1.5rem",
  },
});

const Hero = (props) => {
  return <HeroLayout>{props.children}</HeroLayout>;
};

const HeroSection = (props) => {
  return (
    <HeroSectionLayout sx={{ zIndex: 99 }}>{props.children}</HeroSectionLayout>
  );
};

export { Hero, HeroSection };
export default Hero;
