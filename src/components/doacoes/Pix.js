import React from "react";
import pix1 from "../../assets/pix1.JPG";
import codigo from "../../assets/codigo.jpeg";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function Pix() {
  return (
    <Container className="container-pix">
      <Grid container spacing={6}>
        <Grid item xs={8}>
          <img src={pix1} className="img-pix" alt="logo" />
          <h3 className="title-pix">SEJA UM PARCEIRO</h3>
          <p className="p-pix">Apoiei nosso projeto!</p>
        </Grid>
        <Grid item xs={4}>
          <Card className="card-pix">
            <CardActionArea>
              <CardMedia
                className="card-img-top"
                component="img"
                height="250"
                image={codigo}
                alt="qr code"
              />
              <CardContent style={{ marginTop: "10px", textAlign: "center" }} >
                <Typography gutterBottom variant="h5" component="div">
                  PIX PARA DOAÇÃO
                </Typography>
                <Typography gutterBottom component="div">
                  CNPJ: 39.421.031/0001-51
                </Typography>
                <Typography gutterBottom component="div">
                  Instituto Favela Radical
                </Typography>
                <Typography gutterBottom component="div">
                  Banco santander
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pix;
