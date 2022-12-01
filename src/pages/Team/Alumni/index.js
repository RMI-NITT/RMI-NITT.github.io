import React, { useContext } from "react";
import Selector from "../../../components/Selector";
import Card from "./Card";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { AppContext } from "../../../store/context";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardMobile from "./Card/mobile";

const CardGrid = styled("div")({
  width: "fit-content",
  marginInline: "auto",
  display: "grid",
  gridGap: "2.8rem",
  marginTop: "3.2rem",
});

const Index = () => {
  const alumniMembers = useContext(AppContext).ourTeam.alumni;
  const recentYear = [
    ...new Set(alumniMembers.map((member) => member.batchTag)),
  ][0];
  const options = [
    "All",
    ...new Set(alumniMembers.map((member) => member.batchTag)),
  ];
  const [year, setYear] = React.useState(recentYear);
  const matches = useMediaQuery("(max-width:600px)");
  const filteredMembers = (i) => {
    let toBeReturned;
    if (i === "All") {
      toBeReturned = alumniMembers;
    } else {
      toBeReturned = alumniMembers.filter((member) => {
        return member.batchTag === i;
      });
    }
    return toBeReturned;
  };
  return (
    <>
      <Selector
        title={"Batch of"}
        options={options}
        val={year}
        setVal={setYear}
      />
      <Container sx={{ marginTop: "3rem", maxWidth: { sm: "sm", md: "md" } }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={10}
          width="fit-content"
        >
          {filteredMembers(year).map((member, index) => (
            <Grid
              item
              key={member.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              align="center"
              width="fit-content"
              padding={0}
            >
              <Card member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Index;
