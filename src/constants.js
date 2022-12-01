export const colors = {
  dark: "#001011",
  primary: "#57E2E5",
  light: "#FFFCF9",
  grey: "#C5C5C5",
  primaryDark: "#006992",
  purple: "#182026",
};

export const fontStyles = {
  title: {
    fontFamily: "Poppins, Poppins",
    fontWeight: "bold",
    fontSize: "2rem",
    color: colors.light,
    "@media (max-width: 767px)": {
      fontSize: "1.5rem",
    },
  },
  heading: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 800,
    fontSize: "2.4rem",
    color: colors.primary,
    "@media (max-width: 767px)": {
      fontSize: "1.6rem",
    },
  },
  content: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "1.3rem",
    color: colors.light,
    "@media (max-width: 767px)": {
      fontSize: "0.9rem",
    },
  },
  navlinks: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "0.9rem",
    color: colors.light,
  },
};

export const defaultStyles = {
  color: colors.dark,
  ...fontStyles.content,
};
