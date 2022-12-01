import * as React from "react";
import Box from "@mui/material/Box";
import { Indicator, pages } from ".";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Grow } from "@mui/material";
import { ReactComponent as YoutubeSvg } from "../../assets/youtubeHeader.svg";
import { ReactComponent as GithubSvg } from "../../assets/githubHeader.svg";
import { colors, fontStyles } from "../../constants";
import { Link } from "react-router-dom";

export default function TemporaryDrawer({ state, toggleDrawer, location }) {
  const list = () => (
    <Box
      sx={{
        height: "100%",
        background: "transparent",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List
        sx={{
          paddingTop: "1.2rem",
          background: `linear-gradient(0deg, ${colors.dark}00 0%, ${colors.dark}FF 0%)`,
        }}
      >
        <Divider />
        {pages.map((page, index) => (
          <ListItem key={page.text}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
            >
              <ListItemText
                sx={{
                  ...fontStyles.content,
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
                    fontSize: "1.1rem",
                    textDecoration: "none",
                  }}
                >
                  {page.text}
                </Link>
              </ListItemText>
              <Indicator active={location.pathname === `/${page.route}`} />
            </Box>
          </ListItem>
        ))}
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            paddingBlock: "0.4rem",
            gap: "1rem",
          }}
        >
          <a
            href="https://www.youtube.com/c/RMIRoboticsandMachineIntelligenceNITT"
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
            <YoutubeSvg
              style={{
                height: "34px",
                width: "36px",
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
      </List>
    </Box>
  );

  return (
    <Box
      component="div"
      sx={{
        display: { xs: state ? "inline" : "none", md: "none" },
        zIndex: 20000,
        height: "100%",
        width: "100%",
        position: "fixed",
        top: "4rem",
        background: "transparent",
      }}
    >
      <Grow
        in={state}
        style={{ transformOrigin: "top" }}
        {...(state ? { timeout: 1000 } : {})}
      >
        {list()}
      </Grow>
    </Box>
  );
}
