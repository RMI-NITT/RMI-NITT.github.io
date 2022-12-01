import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero, HeroSection } from "../../components/Hero";
import logo from "../../assets/logoFull.png";
import { styled, Box } from "@mui/material";
import Section from "../../components/Section";
import DoubleSection from "../../components/DoubleSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { colors, fontStyles } from "../../constants";
import Reachus from "./Reachus";
import ImageFader from "../../components/ImageFader";
import { AppContext } from "../../store/context";
import { Link } from "react-router-dom";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HeroText = styled("div")({
  fontFamily: "Raleway",
  fontSize: "2.8rem",
  fontWeight: "700",
  justifyContent: "flex-end",
  lineHeight: "2.5rem",
});

const HeroTag = styled("div")({
  fontFamily: "Poppins",
  fontSize: "1.6rem",
  fontWeight: "400",
  marginTop: "1rem",
  alignContent: "flex-end",
});

const HeroAnd = styled("span")({
  fontFamily: "Raleway",
  fontSize: "2rem",
  fontWeight: "700",
  marginLeft: "0.5rem",
  alignContent: "flex-end",
});

const HeroLineContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
});

const ImgHolder = styled("div")({
  height: "90%",
  width: "90%",
  margin: "1rem auto",
  display: "flex",
  backgroundColor: colors.dark,
  boxShadow: `0 0 16px ${colors.primary}BB`,
  borderRadius: "0.6rem",
  alignContent: "center",
  flexDirection: "column",
  overflow: "hidden",
});
const Img = styled("img")({
  objectFit: "cover",
});
const ProjectTitle = styled("div")({
  textAlign: "center",
  color: colors.light,
  marginBlock: "0.2rem",
  fontSize: "1.2rem",
  fontWeight: "600",
});

const InterTitle = styled("div")({
  ...fontStyles.heading,
  width: "100%",
  textAlign: "center",
  marginBlock: "4rem",
  "@media (max-width: 767px)": {
    fontSize: "1.6rem",
  },
});

const CarouselWrapper = styled("div")({
  width: "95%",
  marginInline: "auto",
});

const LeftArrowContainer = styled("div")({
  position: "absolute",
  left: "0",
  height: "100%",
  width: "2.4rem",
  backgroundColor: `${colors.dark}`,
  transition: "all 0.2s ease-in-out",
  opacity: 0.4,
  "&:hover": {
    opacity: 0.8,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const LeftArrow = styled("div")({
  backgroundColor: colors.light,
  width: "1rem",
  height: "1rem",
  clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
});
const RightArrowContainer = styled("div")({
  position: "absolute",
  right: "0",
  height: "100%",
  width: "2.4rem",
  backgroundColor: `${colors.dark}`,
  transition: "all 0.2s ease-in-out",
  opacity: 0.4,
  "&:hover": {
    opacity: 0.8,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RightArrow = styled("div")({
  backgroundColor: colors.light,
  width: "1rem",
  height: "1rem",
  clipPath: "polygon(0 0, 100% 50%, 0 100%)",
});

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const { projects } = React.useContext(AppContext).projects;
  const { landingPageImages, youtubeVideo } =
    React.useContext(AppContext).miscellaneous;
  return (
    <PageWrapper>
      <ScopedCssBaseline sx={{ background: "transparent" }}>
        <Hero>
          <ImageFader images={landingPageImages} />
          <HeroSection sx={{ zIndex: 100 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo big"
              sx={{
                width: "auto",
                height: { xs: "18rem", md: "24rem" },
                margin: "auto",
              }}
            />
          </HeroSection>
          <Box
            sx={{
              flexDirection: "column",
              flex: "1",
              alignItems: "flex-start",
              justifyContent: "center",
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            <HeroSection
              sx={{
                flexDirection: "column",
              }}
            >
              <HeroLineContainer>
                <HeroText>ROBOTICS</HeroText>
                <HeroAnd>AND</HeroAnd>
              </HeroLineContainer>
              <HeroLineContainer>
                <HeroText>MACHINE INTELLIGENCE</HeroText>
              </HeroLineContainer>
              <HeroLineContainer>
                <HeroTag>The Official Robotics Club of NIT Trichy</HeroTag>
              </HeroLineContainer>
            </HeroSection>
          </Box>
        </Hero>
      </ScopedCssBaseline>
      <Section title={"About"} id="about">
        Robotics and Machine Intelligence (RMI) is the official robotics and
        technical research club of NIT Trichy. We are a close-knit community of
        technology enthusiasts from diverse backgrounds who take an interest in
        building things for the greater good of those around us and bringing
        innovation into our everyday lives.
        <br />
        <br />
        Being one of the oldest technical clubs of the institute, established in
        2005, the melange of projects and domains that we, as RMI, delve into
        has always been ever-expanding. With the vision to develop solutions
        that can be implemented in real-time, we, as a team, work with domains
        encompassing designing and solid modelling, electronics and embedded
        systems, control systems, computer vision and artificial intelligence,
        and machine learning.
        <br />
        <br />
        We also partake in competitions, exhibitions and symposiums in addition
        to conducting workshops and events to further the spirit of learning and
        growth among all.
      </Section>
      <DoubleSection
        sx={{
          justifyContent: "center",
          marginBottom: "16rem",
        }}
        title={"Events and Workshops"}
      />
      <InterTitle>Our Projects</InterTitle>
      <CarouselWrapper>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition="all 0.5s"
          transitionDuration={500}
          customLeftArrow={
            <LeftArrowContainer
              sx={{
                cursor: "pointer",
              }}
            >
              <LeftArrow />
            </LeftArrowContainer>
          }
          customRightArrow={
            <RightArrowContainer
              sx={{
                cursor: "pointer",
              }}
            >
              <RightArrow />
            </RightArrowContainer>
          }
        >
          {projects.map((project) => (
            <Link
              key={project.pid}
              to={`/project/${project.pid}`}
              style={{
                textDecoration: "none",
              }}
            >
              <ImgHolder>
                <Img src={project.cardCoverImage} loading="lazy" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <ProjectTitle>{project.shortName}</ProjectTitle>
                </div>
              </ImgHolder>
            </Link>
          ))}
        </Carousel>
      </CarouselWrapper>
      <Reachus ytLink={youtubeVideo} />
    </PageWrapper>
  );
};

export default index;
