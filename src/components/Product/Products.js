import { Grid, Grow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../axois";
import Product from "./Product";
import useStyles from "./productsStyle";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("api/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <Product key={product._id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};
