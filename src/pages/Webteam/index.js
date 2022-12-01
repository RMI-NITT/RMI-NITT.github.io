import { Container, Grid, styled } from "@mui/material";
import React, { useState, useRef, useEffect, useContext } from "react";
import PageWrapper from "../../components/PageWrapper";
import { colors, fontStyles } from "../../constants";
import Divider from "../../components/Divider";
import Card from "./Card";
import { AppContext } from "../../store/context";

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  margin: "1rem",
});
const SectionSubtitle = styled("div")({
  ...fontStyles.content,
  textAlign: "center",
  fontSize: "1.6rem",
  color: colors.primary,
  margin: "0",
});

const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  height: "fit-content",
  marginBlock: "4rem",
  gap: "2rem",
});

const Tabs = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "8rem",
  width: "fit-content",
  margin: "auto",
  position: "relative",
  cursor: "pointer",
});

const Tab = styled("div")({
  fontFamily: "Poppins",
  fontSize: "1.4rem",
  color: colors.light,
});

const Indicator = styled("div")({
  backgroundColor: colors.light,
  height: "0.2rem",
  position: "absolute",
  transition: "all 0.2s ease-in-out",
});

const Development = styled("div")({
  width: "100%",
});
const Webops = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Selector = () => {
  const { mainArchitects, addnArchitects, webops } =
    useContext(AppContext).webTeam;
  const [tab, setTab] = useState(0);
  const developmentRef = useRef(null);
  const webopsRef = useRef(null);
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const tabsCoords = tabsRef.current.getBoundingClientRect();
    let coords;
    if (tab === 0) {
      coords = developmentRef.current.getBoundingClientRect();
    } else if (tab === 1) {
      coords = webopsRef.current.getBoundingClientRect();
    }
    indicatorRef.current.style.width = `${coords.width * 0.7}px`;
    indicatorRef.current.style.left = `${
      coords.left - tabsCoords.left + coords.width * 0.15
    }px`;
    indicatorRef.current.style.top = `${
      coords.top - tabsCoords.top + coords.height
    }px`;
  }, [tab, indicatorRef, tabsRef, developmentRef, webopsRef]);

  return (
    <>
      <Tabs ref={tabsRef}>
        <Tab
          onClick={() => setTab(0)}
          ref={developmentRef}
          sx={{
            color: tab === 0 ? colors.light : colors.grey,
            opacity: tab === 0 ? 1 : 0.6,
          }}
        >
          Architects
        </Tab>
        <Tab
          onClick={() => setTab(1)}
          ref={webopsRef}
          sx={{
            color: tab === 0 ? colors.grey : colors.light,
            opacity: tab === 1 ? 1 : 0.6,
          }}
        >
          Web-ops
        </Tab>
        <Indicator ref={indicatorRef} />
      </Tabs>
      {tab === 0 && (
        <Development>
          <SectionSubtitle>Foundational design and development</SectionSubtitle>
          <Container maxWidth="sm" sx={{ marginTop: "3rem" }}>
            <Grid align="center" container spacing={5}>
              {mainArchitects.map((architect) => (
                <Grid
                  item
                  key={architect.name}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  align="center"
                >
                  <Card member={architect} />
                </Grid>
              ))}
            </Grid>
          </Container>
          <Divider
            sx={{
              width: "150%",
              margin: "20rem",
              paddingTop: "20rem",
              paddingBottom: "10rem",
            }}
          />
          <SectionSubtitle sx={{ marginTop: "2rem" }}>
            Data acquisition and coordination
          </SectionSubtitle>
          <Container maxWidth="sm" sx={{ marginTop: "3rem" }}>
            <Grid
              justifyContent="center"
              container
              width="fit-content"
              spacing={5}
            >
              {addnArchitects.map((architect) => (
                <>
                  <Grid
                    item
                    key={architect.name}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    align="center"
                  >
                    <Card member={architect} />
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </Development>
      )}
      {tab === 1 && (
        <Webops>
          <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
            <Grid container width="fit-content" spacing={10}>
              {webops.map((architect) => (
                <Grid
                  item
                  key={architect.name}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  align="center"
                >
                  <Card member={architect} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Webops>
      )}
    </>
  );
};

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <PageWrapper>
      <Section>
        <SectionTitle>RMI Web Team</SectionTitle>
        <Selector />
      </Section>
    </PageWrapper>
  );
};

export default index;
