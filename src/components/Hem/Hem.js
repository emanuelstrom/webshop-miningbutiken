import React from "react";
import { Button } from "@mui/material";

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
      <div className="wrapper">
        <div className="highlights">PRODUKTER</div>
      </div>
    </div>
  );
};

export default Hem;
