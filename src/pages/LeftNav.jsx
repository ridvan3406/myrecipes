import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { SearchButton } from "../components/Search";
import Converter from "./Converter";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SearchButton onClick={toggleDrawer(anchor, true)}>
            Converter
          </SearchButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                width: 310,
              }}
              role="presentation"
              onClick={toggleDrawer(anchor, true)}
              onKeyDown={toggleDrawer(anchor, true)}
            >
              <Converter />
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
