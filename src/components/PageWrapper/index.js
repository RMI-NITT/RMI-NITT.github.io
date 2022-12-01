import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { styled } from "@mui/material/styles";

const StaticBackground = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: -1,
  opacity: "0.11",
  background:
    "radial-gradient(ellipse at bottom, #1693FF 0%, #464646 60%, #000000 100%)",
});

const PageContent = styled("div")({
  width: "100vw",
  zIndex: 1,
});

const index = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "100px" }}></div>
      <PageContent>{props.children}</PageContent>
      <StaticBackground />
      <Footer />
    </div>
  );
};

export default index;
