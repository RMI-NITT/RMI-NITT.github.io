import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { styled, Zoom } from "@mui/material";
import { colors, fontStyles } from "../../constants";
import logo from "../../assets/logoCompressed.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as YoutubeSvg } from "../../assets/youtubeHeader.svg";
import { ReactComponent as GithubSvg } from "../../assets/githubHeader.svg";
import TemporaryDrawer from "./drawer";
import HomeIcon from "@mui/icons-material/Home";
import Groups2Icon from "@mui/icons-material/Groups2";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EventIcon from "@mui/icons-material/Event";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const pages = [
  {
    text: "Home",
    route: "",
    icon: <HomeIcon />,
  },
  {
    text: "Our Team",
    route: "team",
    icon: <Groups2Icon />,
  },
  {
    text: "Projects",
    route: "projects",
    icon: <PrecisionManufacturingIcon />,
  },
  {
    text: "Events",
    route: "events",
    icon: <EventIcon />,
  },
  {
    text: "Accolades",
    route: "accolades",
    icon: <EmojiEventsIcon />,
  },
];

const NavItem = styled("div")({
  margin: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Indicator = ({ active }) => {
  return (
    <Zoom in={active}>
      <div
        style={{
          width: "20px",
          height: "2px",
          backgroundColor: colors.primary,
        }}
      />
    </Zoom>
  );
};
const StyledBurger = styled("button")((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "1.8rem",
  height: "1.8rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0",
  zIndex: "10",

  ["&:focus"]: {
    outline: "none",
  },

  ["div"]: {
    width: "1.9rem",
    height: "0.16rem",
    background: "#EFFFFA",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "1px",

    [":first-of-type"]: {
      transform: props.open ? "rotate(45deg)" : "rotate(0)",
    },

    [":nth-of-type(2)"]: {
      opacity: props.open ? "0" : "1",
      transform: props.open ? "translateX(20px)" : "translateX(0)",
    },

    [":nth-of-type(3)"]: {
      transform: props.open ? "rotate(-45deg)" : "rotate(0)",
    },
  },
}));

function ResponsiveAppBar() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  const location = useLocation();
  let logoAnim;
  if (
    location.state === null ||
    (location.state.prevPath !== "/" && location.pathname !== "/")
  ) {
    logoAnim = "none";
  } else if (location.state.prevPath === "/" && location.pathname !== "/") {
    logoAnim = "zoomIn 0.4s forwards";
  } else if (location.state.prevPath !== "/" && location.pathname === "/") {
    logoAnim = "zoomIn 0.4s reverse";
  }
  // (location.state?.prevPath === '/' && location.pathname !== '/') ? 'zoomIn 0.4s forwards' : 'none';

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: `linear-gradient(0deg, ${colors.dark}00 0%, ${colors.dark}FF 30%)`,
          height: "6rem",
          zIndex: 20001,
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar
            sx={{
              height: "fit-content",
              width: { xs: "100%", md: "auto" },
              justifyContent: { xs: "space-between", md: "normal" },
            }}
          >
            <Link to={`/`} state={{ prevPath: location.pathname }}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                style={{
                  display: "block",
                  padding: 0,
                  width: location.pathname === "/" ? "0" : "56px",
                  height: location.pathname === "/" ? "0" : "56px",
                }}
                sx={{
                  margin:
                    location.pathname === "/" ? "0" : { xs: 0, md: "3rem" },
                  animation: { xs: null, md: logoAnim },
                }}
              />
            </Link>
            <Box
              sx={{
                flexGrow: { xs: 0, md: 1 },
                display: { xs: "flex", md: "none" },
              }}
            >
              <StyledBurger open={state} onClick={toggleDrawer}>
                <div />
                <div />
                <div />
              </StyledBurger>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                open={false}
              >
                {pages.map((page) => (
                  <MenuItem key={page.text}>
                    <Typography
                      textAlign="center"
                      sx={{
                        ...fontStyles.navlinks,
                      }}
                    >
                      {page.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: { xs: 0, md: 1 },
                display: { xs: "none", md: "flex" },
                position: "relative",
                gap: "1rem",
              }}
            >
              {/* <NavItem
              key={'Home'}
              style={{
                ...fontStyles.navlinks,
                color: location.pathname === '/' ? colors.primary : colors.light,
              }}   
            >
              <Link to={`/`} state={{prevPath: location.pathname}} style={{
                color: 'inherit',
                textDecoration: 'none'
              }}>Home</Link>
              {location.pathname === '/' && <Indicator active={location.pathname === '/'}/>}
            </NavItem>          */}

              {pages.map((page) => (
                <NavItem
                  key={page.text}
                  style={{
                    ...fontStyles.navlinks,
                    color:
                      location.pathname === `/${page.route}`
                        ? colors.primary
                        : colors.light,
                  }}
                >
                  <Link
                    to={`/${page.route}`}
                    state={{ prevPath: location.pathname }}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                    }}
                  >
                    {page.text}
                  </Link>
                  {location.pathname === `/${page.route}` && (
                    <Indicator
                      active={location.pathname === `/${page.route}`}
                    />
                  )}
                </NavItem>
              ))}

              <a
                href="https://www.youtube.com/c/RMIRoboticsandMachineIntelligenceNITT"
                style={{
                  height: "36px",
                  marginBlock: "auto",
                  cursor: "pointer",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeSvg
                  style={{
                    height: "34px",
                  }}
                />
              </a>
              <a
                href="https://github.com/RMI-NITT"
                style={{
                  height: "36px",
                  marginBlock: "auto",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <GithubSvg
                  style={{
                    height: "28px",
                    width: "36px",
                  }}
                />
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <TemporaryDrawer
        state={state}
        toggleDrawer={toggleDrawer}
        location={location}
      />
    </>
  );
}
export default ResponsiveAppBar;
