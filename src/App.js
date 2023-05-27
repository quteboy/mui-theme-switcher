import Appbar from "./Components/Appbar/Appbar";
import React, { useState } from "react";
import brownTheme from "./Themes/BrownTheme";
import darkBlue from "./Themes/darkBlue";
import darkgreen from "./Themes/darkgreen";
import someBlue from "./Themes/SomethingBlue";
import theme from "./Themes/theme";
import Cookies from "js-cookie";
import { ThemeProvider } from "@mui/material";
import DummyContent from "./Components/DummyContent/dummyContent";
const themeArray = [
  {
    name: "Default",
    themeName: theme,
  },

  {
    name: "Dark Blue",
    themeName: darkBlue,
  },
  {
    name: "Brown Theme",
    themeName: brownTheme,
  },
  {
    name: "Green Theme",
    themeName: darkgreen,
  },

  {
    name: "Some Blue",
    themeName: someBlue,
  },
];
function App() {
  const [selectedThemeName, setSelectedThemeName] = useState(
    Cookies.get("selectedThemeName") || "Default"
  );
  const [selectedTheme, setSelectedTheme] = useState(
    themeArray.find((theme) => theme.name === selectedThemeName).themeName
  );
  const handleChange = (event) => {
    const newThemeName = event.target.value;
    setSelectedThemeName(newThemeName);
    setSelectedTheme(
      themeArray.find((theme) => theme.name === newThemeName).themeName
    );
    Cookies.set("selectedThemeName", newThemeName, {
      expires: 365,
      sameSite: "None",
      secure: true,
    });
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={selectedTheme}>
        <Appbar
          setSelectedTheme={setSelectedTheme}
          handleChange={handleChange}
          selectedTheme={selectedTheme}
          selectedThemeName={selectedThemeName}
          themeArray={themeArray}
        />
        <DummyContent />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
