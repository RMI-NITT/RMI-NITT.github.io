import { styled } from "@mui/material";
import React from "react";
import { fontStyles } from "../../constants";

const Section = styled("div")({
  width: "100vw",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingBlock: "4rem",
  position: "relative",
  marginBottom: "2rem",
  gap: "2.6rem",
});

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  zIndex: 100,
});

const SectionContent = styled("div")({
  ...fontStyles.content,
  textAlign: "center",
  zIndex: 100,
});

const index = (props) => {
  return (
    <Section id={props.id}>
      <props.Fader />
      <SectionTitle>{props.title}</SectionTitle>
      <SectionContent
        sx={{
          width: {
            xl: "42%",
            lg: "50%",
            md: "60%",
            sm: "80%",
            xs: "90%",
          },
          textAlign: "justify",
        }}
      >
        {props.children}
      </SectionContent>
    </Section>
  );
};

export default index;
