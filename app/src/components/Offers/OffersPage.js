import React from "react";
import Logo from "./Logo";
import HeaderOffer from "./HeaderOffer/HeaderOffer";
import Offers from "./Offers/Offers";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function OffersPage() {
  return (
    <>
      <Logo />
      <Container>
        <Grid container spacing={2}>
          <Grid
            elevation="none"
            item
            xs={12}
            style={{ minHeight: "80vh", marginTop: "40px" }}
          >
            <HeaderOffer />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginBottom: "20vh", marginTop: "20px" }}
          >
            <Offers />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default OffersPage;
