import { styled } from "@mui/material";
import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/SectionFade";
import { colors, fontStyles } from "../../constants";
import Divider from "../../components/Divider";
import TimelineSection from "./TimelineSection";
import ImageFader from "../../components/ImageFader";
import { ReactComponent as FirstSvg } from "../../assets/honors/first.svg";
import { ReactComponent as SecondSvg } from "../../assets/honors/second.svg";
import { ReactComponent as ThirdSvg } from "../../assets/honors/third.svg";
import { ReactComponent as HonorSvg } from "../../assets/honors/honor.svg";
import { AppContext } from "../../store/context";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

const TopHonors = styled("div")({
  height: "fit-content",
  marginTop: "4rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TopTitle = styled("div")({
  ...fontStyles.heading,
});

const GridOfFame = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "2rem",
  margin: "3rem",
  ["@media (max-width:780px)"]: {
    gridTemplateColumns: "auto",
  },
});

const Prize = ({ n }) => {
  switch (n) {
    case 0:
      return (
        <HonorSvg
          style={{
            maxWidth: "3rem",
          }}
        />
      );
    case 1:
      return (
        <FirstSvg
          style={{
            maxWidth: "3rem",
          }}
        />
      );
    case 2:
      return (
        <SecondSvg
          style={{
            maxWidth: "3rem",
          }}
        />
      );
    case 3:
      return (
        <ThirdSvg
          style={{
            maxWidth: "3rem",
          }}
        />
      );
  }
};

const FameItem = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1rem",
  fontSize: "1.5rem",
  lineHeight: "120%",
  ["@media (max-width:780px)"]: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

const FameIcon = styled("div")({
  height: "3.5rem",
  width: "3.5rem",
  display: "flex",
  justifyContent: "center",
});

const FameText = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingBlock: "1rem",
  flex: 1,
  ["@media (max-width:780px)"]: {
    paddingBlock: "0.2rem",
  },
});
const FameTitle = styled("div")({
  fontSize: "1.4rem",
  ["@media (max-width:780px)"]: {
    fontSize: "1.2rem",
  },
});
const FameDesc = styled("div")({
  fontSize: "1rem",
  lineHeight: "135%",
  color: colors.grey,
  ["@media (max-width:780px)"]: {
    fontSize: "0.9rem",
  },
});

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const { topHonours } = React.useContext(AppContext).accolades;
  const { accoladesImages } = React.useContext(AppContext).miscellaneous;
  return (
    <PageWrapper>
      <Section
        title="Achievements and Accolades"
        Fader={() => <ImageFader images={accoladesImages} />}
      >
        We believe our drive and passion for what we do has helped us earn
        several accolades over the years. In each event we participate in, we
        try to give our best and bring laurels to our small community. However,
        we also believe that winning is not what our work is all about, and the
        experience and learning are our biggest takeaway in all that we pursue.
      </Section>
      <TopHonors>
        <TopTitle
          sx={{
            fontSize: "2.2rem",
          }}
        >
          Top Honours
        </TopTitle>
        <Container maxWidth="lg">
          <GridOfFame>
            {topHonours.map((award, index) => (
              <FameItem key={index}>
                <FameIcon>
                  <Prize n={parseInt(award.prizeIndex)} />
                </FameIcon>
                <FameText>
                  <FameTitle>{award.title}</FameTitle>
                  <FameDesc>{award.organisers}</FameDesc>
                </FameText>
              </FameItem>
            ))}
          </GridOfFame>
        </Container>
      </TopHonors>
      <Divider />
      <TimelineSection />
    </PageWrapper>
  );
};

export default index;
