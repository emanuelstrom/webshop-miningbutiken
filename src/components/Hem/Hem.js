import React from "react";
import { Button, Container, Typography, Grid, Divider } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const Hem = () => {
  return (
    <div>
      <div className="img-container">
        <img
          className="img-container__img"
          src="./mb-banner.jpg"
          alt="banner miningbutiken"
        />
        <Button
          className="img-container__btn"
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            borderWidth: "2px",
            display: {
              xs: "none",
              sm: "flex",
            },

            "&:hover": {
              color: "black",
              backgroundColor: "white",
              borderColor: "white",
              borderWidth: "2px",
            },
          }}
        >
          VÅRA PRODUKTER
        </Button>
      </div>
      <Container
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: "20px",
        }}
      >
        <Typography variant="h3" sx={{ m: "20px" }}>
          UTVALDA PRODUKTER
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={4} sx={{ p: 3 }}>
            <ProductCard />
          </Grid>
          <Grid item sm={12} md={6} lg={4} sx={{ p: 3 }}>
            <ProductCard />
          </Grid>
          <Grid item sm={12} md={6} lg={4} sx={{ p: 3 }}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>
      <Divider variant="middle" sx={{ mb: "20px" }} />
      <Container
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ m: "20px" }}>
          Varför miningbutiken?
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <img src="./mining.jpg" alt="banner" style={{ width: "100%" }} />
          </Grid>
          <Grid item sm={7}>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
              metus eu quam varius tempor. Morbi fermentum dictum fringilla.
              Maecenas et odio vitae nisl blandit laoreet. Aliquam imperdiet
              vestibulum hendrerit. Sed eleifend pellentesque velit, commodo
              pellentesque odio pretium hendrerit. Suspendisse nec est auctor,
              blandit erat lobortis, lacinia lectus. Nulla fermentum dignissim
              nisl auctor fringilla. Nam sed mi vel enim consequat vehicula
              dapibus nec lacus.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Hem;
