import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/actions/products";
import { openModal, setEdit } from "../redux/actions/modal";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

const styles = {
  card: {
    maxWidth: 600,
    margin: "10px auto 0 auto",
  },
  image: {
    width: "200px",
  },
  comment: {
    padding: "5px",
    height: "40px",
  },
};

export const ProductCard = (props) => {
  const dispatch = useDispatch();

  return (
    <Card sx={styles.card}>
      <CardContent>
        <img src={props.product.imageUrl} alt="product" style={styles.image} />
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Quantity: {props.product.count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weight: {props.product.weight} g. <br />
          Width: {props.product.width} mm. <br />
          Height: {props.product.height} mm.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            dispatch(setEdit(props.product));
            dispatch(openModal());
          }}
        >
          Edit
        </Button>
        <Button
          type="submit"
          onClick={() => dispatch(removeProduct(props.product.id))}
        >
          Delete
        </Button>
      </CardActions>
      {props.product.comments
        ? props.product.comments.map((comment) => {
            return <Card style={styles.comment}>{comment}</Card>;
          })
        : null}
    </Card>
  );
};
