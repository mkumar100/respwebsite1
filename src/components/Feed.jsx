//import { red } from "@mui/material/colors";
import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

//const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
