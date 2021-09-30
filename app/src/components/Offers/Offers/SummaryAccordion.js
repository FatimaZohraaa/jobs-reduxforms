import * as React from "react";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import "./SummaryAccordion.css";
export default function BasicGrid({ poste, entreprise, tags, place }) {
  return (
    <Grid
      container
      id="divSummary"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        minHeight: "9vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: "400px",
        }}
      >
        <div
          id="logoOffer"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: "8vh",
            width: "70px",
            marginTop: "10px",
            minHeight: "5vh",
            paddingBottom: "5px",
          }}
        ></div>
        <div
          onClick={(e) => e.stopPropagation()}
          elevation="none"
          style={{
            maxHeight: "10px",
            textAlign: "start",
            marginLeft: "10px",
          }}
        >
          <Typography variant="h6" style={{ fontSize: "18px" }}>
            {poste}
          </Typography>
          <Typography style={{ fontSize: "13px" }}>{entreprise}</Typography>
          <div style={{ display: "flex" }}>
            <Typography>
              <p
                style={{
                  border: "0.5px solid black",
                  borderRadius: "10px",
                  marginTop: "10px",
                  padding: "5px",
                  marginRight: "2px",
                  fontSize: "13px",
                }}
              >
                {tags}
              </p>
            </Typography>
            <Typography>
              <p
                style={{
                  border: "0.5px solid black",
                  borderRadius: "10px",
                  marginTop: "10px",
                  padding: "5px",
                  marginRight: "2px",
                  fontSize: "13px",
                }}
              >
                Software
              </p>
            </Typography>
            <Typography>
              <p
                style={{
                  border: "0.5px solid black",
                  borderRadius: "10px",
                  marginTop: "10px",
                  padding: "5px",
                  marginRight: "2px",
                  fontSize: "13px",
                }}
              >
                Web
              </p>
            </Typography>
          </div>
        </div>
      </div>

      <div elevation="none" onClick={(e) => e.stopPropagation()}>
        <Chip
          icon={<LocationOnIcon style={{ color: "white" }} />}
          label={place}
          variant="outlined"
          style={{
            minWidth: "100px",
            cursor: "pointer",
            backgroundColor: " #000080",
            color: "white",
          }}
        />
      </div>

      <div
        elevation="none"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "Roboto" }}
      >
        7 days ago
      </div>
    </Grid>
  );
}
