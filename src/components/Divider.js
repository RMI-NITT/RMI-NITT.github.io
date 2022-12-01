import { styled } from "@mui/material";
import React from "react";

const DividerStyles = styled("div")({
  width: "80%",
  height: "4px",
  margin: "4rem auto",
  background:
    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
});

const Divider = () => {
  return <DividerStyles />;
};

export default Divider;
