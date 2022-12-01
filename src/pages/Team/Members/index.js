import React, { useContext } from "react";
import YearSelector from "../YearSelector";
import Card from "./Card";
import { AppContext } from "../../../store/context";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

const Index = () => {
  const currentMembers = useContext(AppContext).ourTeam.currentMembers;
  const uniqueYears = [
    ...new Set(currentMembers.map((member) => member.batchTag)),
  ];
  const uniqueYearStrings = uniqueYears.map(
    (uniqueYear) => `Batch of ${uniqueYear}`
  );
  const [year, setYear] = React.useState(0);
  const options = ["All", ...uniqueYearStrings];
  const filteredMembers = (i) => {
    let toBeReturned = [];
    if (i === 0) {
      toBeReturned = currentMembers;
    } else {
      toBeReturned = currentMembers.filter((member) => {
        return member.batchTag === uniqueYears[i - 1];
      });
    }
    return toBeReturned;
  };
  return (
    <>
      <YearSelector options={options} year={year} setYear={setYear} />
      <Container sx={{ marginTop: "3rem", maxWidth: { sm: "sm", md: "md" } }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 8.5, md: 10 }}
        >
          {filteredMembers(year).map((member) => (
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
