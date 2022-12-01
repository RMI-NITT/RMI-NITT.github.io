import { Box, styled } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../../constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section = styled("div")({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  backgroundColor: `${colors.dark}55`,
  backgroundBlendMode: "darken",
  overflow: "hidden",
  position: "relative",
  paddingInline: "10%",
  ["@media (max-width:990px)"]: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingInline: "2%",
  },
});

const Segment = styled("div")((props) => ({
  display: "flex",
  flexDirection: props.ind % 2 != 0 ? "row" : "row-reverse",
  alignItems: "center",
  height: "100%",
  ["@media (max-width:990px)"]: {
    flexDirection: "column",
  },
}));

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.8rem",
  zIndex: 11,
  textAlign: "center",
  ["@media (max-width:990px)"]: {
    textAlign: "start",
  },
});

const SectionSubtitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.2rem",
  marginBottom: "1rem",
  zIndex: 11,
  textAlign: "center",
  color: colors.grey,
  ["@media (max-width:990px)"]: {
    fontSize: "1.16rem",
    marginTop: "0.5rem",
    textAlign: "start",
  },
});

const SectionContent = styled("div")({
  ...fontStyles.content,
  zIndex: 11,
  textAlign: "justify",
  ["@media (max-width:990px)"]: {
    fontSize: "0.9rem",
    marginBottom: "2rem",
  },
});

const Subsection = styled("div")({
  width: "100%",
  height: "fit-content",
  flex: 1,
  padding: "2rem",
  zIndex: 11,
});
const SubCarouselSection = styled("div")({
  width: "100%",
  height: "100%",
  flex: 1,
  zIndex: 11,
});

const Column = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const CarouselHolder = styled("div")({
  width: "32rem",
  height: "18rem",
  position: "relative",
  overflow: "hidden",
  ["@media (max-width:990px)"]: {
    width: "100%",
    height: "100%",
  },
  ["@media (max-width:787px)"]: {
    width: "100%",
    height: "15rem",
  },
});

const LeftArrowContainer = styled("div")({
  position: "absolute",
  left: "0",
  top: 0,
  height: "18rem",
  ["@media (max-width:990px)"]: {
    width: "1.6rem",
    height: "100%",
  },
  width: "2rem",
  backgroundColor: `${colors.dark}`,
  transition: "all 0.2s ease-in-out",
  opacity: 0.4,
  "&:hover": {
    opacity: 0.8,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 201,
});

const LeftArrow = styled("div")({
  backgroundColor: colors.light,
  width: "0.8rem",
  height: "0.8rem",
  clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
});

const RightArrowContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: 0,
  height: "18rem",
  ["@media (max-width:990px)"]: {
    width: "1.6rem",
    height: "100%",
  },
  width: "2rem",
  backgroundColor: `${colors.dark}`,
  transition: "all 0.2s ease-in-out",
  opacity: 0.4,
  "&:hover": {
    opacity: 0.8,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 201,
});

const RightArrow = styled("div")({
  backgroundColor: colors.light,
  width: "0.8rem",
  height: "0.8rem",
  clipPath: "polygon(0 0, 100% 50%, 0 100%)",
});

const Index = (props) => {
  return (
    <Section
      id={props.id}
      sx={{
        clipPath: {
          xs: "null",
          md: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)",
        },
      }}
    >
      {props.bg !== "" && (
        <Box
          component="img"
          src={props.bg}
          alt="event"
          sx={{
            position: "absolute",
            zIndex: 10,
            width: "100%",
            height: { xs: "80vh", md: "100%" },
            objectFit: "cover",
            aspectRatio: "auto",
            opacity: "0.1",
          }}
        />
      )}
      <Segment ind={props.i}>
        <SubCarouselSection>
          <Column>
            <CarouselHolder>
              <Carousel
                autoPlay={false}
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                renderArrowPrev={(clickHandler) => {
                  return (
                    <LeftArrowContainer
                      onClick={() => {
                        clickHandler();
                      }}
                    >
                      <LeftArrow />
                    </LeftArrowContainer>
                  );
                }}
                renderArrowNext={(clickHandler) => {
                  return (
                    <RightArrowContainer
                      onClick={() => {
                        clickHandler();
                      }}
                    >
                      <RightArrow />
                    </RightArrowContainer>
                  );
                }}
              >
                {props.images.map((image) => (
                  <Box
                    component="div"
                    key={image}
                    sx={{
                      width: "100%",
                      height: "fit-content",
                      aspectRatio: 16 / 9,
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt="event"
                      sx={{
                        objectFit: "cover",
                        aspectRatio: 16 / 9,
                      }}
                    />
                  </Box>
                ))}
              </Carousel>
            </CarouselHolder>
          </Column>
        </SubCarouselSection>
        <Subsection>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionSubtitle>{props.subtitle}</SectionSubtitle>
          <SectionContent>{props.children}</SectionContent>
        </Subsection>
      </Segment>
    </Section>
  );
};

export default Index;
