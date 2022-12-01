import { styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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
});

const Index = () => {
  return (
    <FullPage>
      <Title>404!</Title>
      <SubTitle>Something went wrong :(</SubTitle>
      <GoHome>
        <Link to="/" style={{ textDecoration: "inherit", color: "inherit" }}>
          Back to <span style={{ color: colors.primary }}>home</span>
        </Link>
      </GoHome>
    </FullPage>
  );
};

export default Index;
