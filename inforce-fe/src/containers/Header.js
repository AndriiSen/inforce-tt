import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ProductModal } from "./Modal";
import { useDispatch } from "react-redux";
import { openModal, setAdd } from "../redux/actions/modal";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Inforce test tast
          </Typography>
          <ProductModal />
          <Button
            onClick={() => {
              dispatch(setAdd());
              dispatch(openModal());
            }}
            variant="contained"
            color="primary"
          >
            Add Product
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
