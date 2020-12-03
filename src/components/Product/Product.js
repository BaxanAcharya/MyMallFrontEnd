import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Badge,
} from "@material-ui/core";
import classNames from "classnames";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import useStyles from "./productStyle";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card key={product._id} className={classNames(classes.card)}>
      {/* target="_blank" */}
      <CardActionArea href={"#"}>
        <CardMedia
          className={classes.media}
          image={`http://localhost:3010/productImage/${product.photo}`}
        />
        <div className={classes.details}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            style={{ fontWeight: 600 }}
          >
            {product.name}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(product.createdAt).toDateString()}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          Rs: {product.price}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description.slice(0, 99)} ......
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        {product.quantity && (
          <Button
            size="small"
            color="primary"
            style={{ color: "white", backgroundColor: "#8F2E49" }}
          >
            Add To Cart
          </Button>
        )}

        {product.quantity === 0 ? (
          <Typography variant="h5" color="textSecondary">
            {" "}
            Out of stock{" "}
          </Typography>
        ) : (
          <Typography variant="h5" color="textSecondary">
            Stock:
            <Badge badgeContent={product.quantity} color="primary">
              <BeenhereIcon color="primary" style={{ color: "#8F2E49" }} />
            </Badge>
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
