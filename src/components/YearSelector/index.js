import { styled } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { colors, fontStyles } from "../../constants";

const YearSelector = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: `2px solid ${colors.primary}`,
  margin: "2rem auto",
  width: "fit-content",
  padding: "0.4rem 20px",
  borderRadius: "0.8rem",
  gap: "2rem",
  position: "relative",
});

const Option = styled("div")({
  ...fontStyles.content,
  zIndex: 1,
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
});

const Highlighter = styled("div")({
  backgroundColor: colors.primary,
  position: "absolute",
  height: "90%",
  borderRadius: "0.8rem",
  transition: "all 0.2s ease-in-out",
  zIndex: -1,
});

const Index = ({ options, year, setYear }) => {
  const optionRef = useRef([]);
  const highlighterRef = useRef(null);
  const selectorRef = useRef(null);
  useEffect(() => {
    const coords = optionRef.current[year].getBoundingClientRect();
    highlighterRef.current.style.width = `${coords.width + 30}px`;
    highlighterRef.current.style.left = `${
      coords.left - selectorRef.current.getBoundingClientRect().left - 15
    }px`;
  }, [optionRef, highlighterRef, year, selectorRef]);
  return (
    <YearSelector ref={selectorRef}>
      <Highlighter ref={highlighterRef} />
      {options.map((option, index) => (
        <Option
          key={index}
          onClick={() => {
            setYear(index);
          }}
          ref={(el) => optionRef.current.push(el)}
          sx={{
            color: year === index ? colors.dark : colors.light,
          }}
        >
          {option}
        </Option>
      ))}
    </YearSelector>
  );
};

export default Index;
