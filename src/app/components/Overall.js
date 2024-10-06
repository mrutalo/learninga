import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Controls from "./Controls";
import ChatWindow from "./ChatWindow";

function Overall() {
  return (
    <Container maxWidth="sm" style={{ padding: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            Hello Again Worlds
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        mt={2}
        mb={2}
        p={2}
        style={{ backgroundColor: "#f5f5f5", borderRadius: 4 }}
      >
        <ChatWindow />
      </Box>

      <Box p={2} style={{ backgroundColor: "#e0e0e0", borderRadius: 4 }}>
        <Controls />
      </Box>
    </Container>
  );
}

export default Overall;
