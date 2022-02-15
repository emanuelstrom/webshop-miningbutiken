import React from "react";
import { Button, Container, Typography } from "@mui/material";

const ProductCard = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "350px",
        }}
      >
        <img src="./001.jpg" alt="riser" className="product__img" />
        <Container>
          <Typography variant="h6">Riser 009S - Guldpläterad</Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography mb={1} variant="paragraph">
            99 kr
          </Typography>
          <Button sx={{ p: 0 }}>Lägg i varukorg</Button>
        </Container>
      </Container>
    </>
  );
};

export default ProductCard;
