import { styled } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { defaultStyles } from "./constants";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Accolades from "./pages/Accolades";
import Events from "./pages/Events";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import ErrorFetching from "./pages/ErrorFetching";
import React, { useEffect, useState } from "react";
import { AppContext } from "./store/context";
import Webteam from "./pages/Webteam";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const AppLayout = styled("div")({
  ...defaultStyles,
  width: "100vw",
  height: "fit-content",
  minHeight: "100vh",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home title="RMI | NIT Trichy" />,
  },
  {
    path: "/team",
    element: <Team title="RMI | Our Team" />,
  },
  {
    path: "/projects",
    element: <Projects title="RMI | Projects" />,
  },
  {
    path: "/events",
    element: <Events title="RMI | Events" />,
  },
  {
    path: "/accolades",
    element: <Accolades title="RMI | Accolades" />,
  },
  {
    path: "/project/:projectid",
    element: <Project title="RMI | Projects" />,
  },
  {
    path: "/webteam",
    element: <Webteam title="RMI | Webteam" />,
  },
  {
    path: "/*",
    element: <NotFound title="Page not found" />,
  },
]);

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch("https://rmi-webteam.github.io/test-json-data/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        setData("error");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const flyers = document.getElementsByClassName("flyer");
    Array.prototype.forEach.call(flyers, (element) => {
      element.style.animationDuration = "1s";
    });
    const loadingElement = document.getElementById("loading");
    loadingElement.style.animation = "fade 2s forwards";
    loadingElement.style.animationDelay = "2s";
    setTimeout(() => {
      const loader = document.getElementById("loading");
      if (loader) {
        loader.remove();
      }
    }, 4000);
  }, [data !== null]);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      {data !== null && (
        <AppContext.Provider value={data}>
          <AppLayout>
            {data === "error" ? (
              <ErrorFetching title="Error" />
            ) : (
              <RouterProvider router={router} />
            )}
          </AppLayout>
        </AppContext.Provider>
      )}
    </ThemeProvider>
  );
}

export default App;
