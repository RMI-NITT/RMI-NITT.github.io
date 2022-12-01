import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@mui/material";
import { colors } from "../../constants";

const SelectorContainer = styled("div")({
  width: "fit-content",
  margin: "2rem auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.6rem",
  border: `2px solid ${colors.primary}`,
  borderRadius: "0.4rem",
  padding: "0.4rem 1rem",
});

const Selector = styled("div")({
  width: "5rem",
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.2rem",
  borderBottom: `2px solid ${colors.primary}`,
  color: colors.grey,
  paddingLeft: "0.4rem",
  cursor: "pointer",
  position: "relative",
  zIndex: 199,
});
const Options = styled("div")({
  width: "100%",
  position: "absolute",
  top: "calc(100% + 4px)",
  left: 0,
  backgroundColor: colors.primary,
  zIndex: 900,
  boxShadow: `${colors.light}44 0px 5px 15px`,
});

const OptionHolder = styled("div")((props) => ({
  width: "100%",
  backgroundColor: props.selected ? `${colors.dark}DD` : colors.dark,
  padding: "0 0.4rem",
  "&:hover": {
    backgroundColor: `${colors.dark}CC`,
  },
}));

const Option = (props) => {
  return (
    <OptionHolder
      onClick={() => {
        props.setVal(props.value);
      }}
      selected={props.val == props.value}
    >
      {props.value}
    </OptionHolder>
  );
};

export default function BasicSelect(props) {
  const [val, setVal] = useState(props.val);
  useEffect(() => {
    props.setVal(val);
  }, [val]);
  const [open, setOpen] = useState(false);
  const openToggler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <SelectorContainer>
      {props.title}
      <Selector onClick={openToggler}>
        {val}
        <ExpandMoreIcon />
        {open && (
          <ClickAwayListener onClickAway={openToggler}>
            <Options>
              {props.options.map((option) => (
                <Option value={option} val={val} setVal={setVal} key={option} />
              ))}
            </Options>
          </ClickAwayListener>
        )}
      </Selector>
    </SelectorContainer>
  );
}
