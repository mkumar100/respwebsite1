import React, { useState } from "react";
import { Tooltip } from "@mui/material";
//import { IconButton } from "@mui/material";
//import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
//import { Typography } from "@mui/material";

const AddSymbol = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: "20",
          left: { xs: "calc(50%) - 25px", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>Hello</Box>
      </Modal>
    </div>
  );
};

export default AddSymbol;
