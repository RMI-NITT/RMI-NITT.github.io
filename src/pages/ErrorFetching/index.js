import { styled } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../../constants";

const FullPage = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});
const Title = styled("div")({
  ...fontStyles.title,
  color: colors.primary,
  fontSize: "10rem",
});
const SubTitle = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
  fontSize: "1.6rem",
});
const GoHome = styled("div")({
  ...fontStyles.content,
  fontSize: "1.6rem",
  cursor: "pointer",
});

const Index = () => {
  return (
    <FullPage>
      <Title>500!</Title>
      <SubTitle>Error Fetching :(</SubTitle>
      <GoHome onClick={() => location.reload()}>
        Try <span style={{ color: colors.primary }}>reloading</span>
      </GoHome>
    </FullPage>
  );
};

export default Index;
