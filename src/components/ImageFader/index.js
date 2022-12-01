import { styled } from "@mui/material";
import React from "react";
import { colors } from "../../constants";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageFaderLayout = styled("div")({
  position: "absolute",
  width: "100%",
  height: "80vh",
  backgroundColor: `${colors.dark}33`,
  overflow: "hidden",
});

const ImageContainer = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
});

const Img = styled("img")({
  width: "100%",
  height: "80vh",
  objectFit: "cover",
  opacity: 0.15,
});

const index = ({ images }) => {
  return (
    <ImageFaderLayout sx={{ zIndex: 99 }}>
      <Fade
        arrows={false}
        autoplay={true}
        infinite={true}
        duration={2000}
        pauseOnHover={false}
      >
        {images.map((image) => {
          return (
            <ImageContainer key={image} className="each-fade">
              <Img src={image} />
            </ImageContainer>
          );
        })}
      </Fade>
    </ImageFaderLayout>
  );
};

export default index;
