import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/products";
import { ProductCard } from "./Card";

export const ProductsList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const renderList = products.map((product) => {
    return <ProductCard product={product} key={product._id} />;
  });
  return <>{renderList}</>;
};
