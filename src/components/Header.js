import * as React from "react";
import Typography from "./home/Typography";
import Button from "./home/Button";
import Layout from "./home/Layout";
import capa from '../assets/robotica.jpg'

const backgroundImage = capa

export default function Header() {
  return (
    <div className="header-container">
      <Layout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "brand.orange", // Average color of the background image.
          backgroundPosition: "center",
        }}
      >
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
         Lorem ipsum dolor sit amet
        </Typography>
        <Button
          variant="contained"
          size="large"
          component="button"
          sx={{ minWidth: 200 }}
        >
          saiba mais
        </Button>
      </Layout>
    </div>
  );
}
