import React from "react";
import { AppBar, Button, Toolbar, Box } from "@mui/material";
function Header() {
  return (
    <>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Box style={{ flexGrow: 1 }} />
          <Button variant="outlined">Image-1</Button>
          <Box style={{ flexGrow: 0.01 }} />
          <Button variant="outlined">Image-2</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
