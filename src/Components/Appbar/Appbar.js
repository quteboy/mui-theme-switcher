import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Select, MenuItem } from "@mui/material";
const Appbar = ({ handleChange, selectedThemeName, themeArray }) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Box
              sx={{
                width: "200px",
              }}
            >
              <Select
                sx={{
                  backgroundColor: "primary.main",
                  color: "common.white",
                  maxWidth: "100%",
                }}
                autoWidth
                value={selectedThemeName}
                onChange={handleChange}
              >
                {themeArray.map((theme) => (
                  <MenuItem key={theme.name} value={theme.name}>
                    {theme.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Appbar;
