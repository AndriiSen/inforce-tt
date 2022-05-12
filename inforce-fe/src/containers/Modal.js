import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/actions/products";
import { closeModal } from "../redux/actions/modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export const ProductModal = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalState);
  const [imageUrl, setImageUrl] = useState();
  const [name, setName] = useState();
  const [count, setCount] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [comments, setComments] = useState();
  const productData = {
    imageUrl,
    name,
    count,
    width,
    height,
    weight,
  };

  return (
    <div>
      <Modal
        open={modalState.isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalState.isEdit ? "Edit" : "Add"} product
          </Typography>
          <TextField
            required
            defaultValue={modalState.isEdit ? modalState.editData.imageUrl : ""}
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
            label="Link to image"
            variant="standard"
          />

          <TextField
            required
            defaultValue={modalState.isEdit ? modalState.editData.name : ""}
            onChange={(event) => {
              setName(event.target.value);
            }}
            label="Product name"
            variant="standard"
          />
          <TextField
            required
            defaultValue={modalState.isEdit ? modalState.editData.count : ""}
            onChange={(event) => {
              setCount(event.target.value);
            }}
            label="Count"
            variant="standard"
          />
          <TextField
            required
            defaultValue={modalState.isEdit ? modalState.editData.width : ""}
            onChange={(event) => {
              setWidth(event.target.value);
            }}
            label="Width mm"
            variant="standard"
          />
          <TextField
            required
            defaultValue={modalState.isEdit ? modalState.editData.height : ""}
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            label="Height mm"
            variant="standard"
          />
          <TextField
            required
            defaultValue={modalState.isEdit ? modalState.editData.weight : ""}
            onChange={(event) => {
              setWeight(event.target.value);
            }}
            label="Weight g"
            variant="standard"
          />
          <Button
            onClick={() => {
              dispatch(closeModal());
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={
              modalState.isEdit
                ? () => {
                    dispatch(
                      updateProduct(modalState.editData.id, productData)
                    );
                    dispatch(closeModal());
                  }
                : () => {
                    dispatch(addProduct(productData));
                    dispatch(closeModal());
                  }
            }
            color="primary"
          >
            {modalState.isEdit ? "Edit" : "Add"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
