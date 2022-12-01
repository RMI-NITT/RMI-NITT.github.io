import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { colors } from "../../constants";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const footerData = [
  {
    columnTitle: "Home",
    columnLink: "/#",
    columnItems: [
      { itemName: "About", itemLink: "/#about" },
      { itemName: "Projects", itemLink: "/projects" },
      { itemName: "Accolades", itemLink: "/accolades" },
    ],
  },
  {
    columnTitle: "Events",
    columnLink: "/events",
    columnItems: [
      { itemName: "Genesis", itemLink: "/events#Genesis" },
      { itemName: "Following", itemLink: "/events#Following" },
      { itemName: "Hackathon", itemLink: "/events#RMI Hackathon" },
    ],
  },
  {
    columnTitle: "",
    columnItems: [
      { itemName: "InHoTTs", itemLink: "/events#InHoTTs" },
      { itemName: "RoboVigyan", itemLink: "/events#RoboVigyan" },
      { itemName: "Exhibition", itemLink: "/events#Pragyan Exhibition" },
    ],
  },
];

const FooterRight = styled("div")({
  display: "flex",
  marginTop: "1rem",
  "@media (max-width: 767px)": {
    marginTop: "2rem",
  },
});

const FooterColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.6rem",
  marginTop: "0.6rem",
});

const FooterColumnTitle = styled("div")({
  color: colors.primary,
  fontSize: "1rem",
  fontFamily: "Poppins",
  fontWeight: "light",
  "@media (max-width: 767px)": {
    fontSize: "1rem",
  },
});

const FooterColumnItem = styled("div")({
  color: "#fff",
  fontSize: "1rem",
  fontFamily: "Poppins",
  "@media (max-width: 767px)": {
    fontSize: "0.9rem",
  },
});

const FooterColumnHolder = ({ columnTitle, columnItems, columnLink }) => (
  <FooterColumn>
    <Link to={columnLink} style={{ textDecoration: "none", height: "20px" }}>
      <FooterColumnTitle>{columnTitle}</FooterColumnTitle>
    </Link>
    {columnItems.map((item) => (
      <HashLink
        to={item.itemLink}
        key={item.itemName}
        style={{
          textDecoration: "none",
        }}
      >
        <FooterColumnItem key={item.itemName}>{item.itemName}</FooterColumnItem>
      </HashLink>
    ))}
  </FooterColumn>
);

FooterColumnHolder.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  columnItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      itemLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const FooterRightHolder = () => (
  <FooterRight
    sx={{
      gap: {
        xs: "2.5rem",
        sm: "2.5rem",
        md: "3rem",
        lg: "3rem",
      },
    }}
  >
    {footerData.map((column) => (
      <FooterColumnHolder
        key={column.columnTitle}
        columnTitle={column.columnTitle}
        columnItems={column.columnItems}
        columnLink={column.columnLink}
      />
    ))}
  </FooterRight>
);

export default FooterRightHolder;
