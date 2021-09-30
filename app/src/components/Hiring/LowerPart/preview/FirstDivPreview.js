import * as React from "react";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import "./FirstDiv.css";
function BasicGrid({ form }) {
  function renderPoste() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.poste) {
          return form.infoForm.values.poste;
        }
      } else {
        return "Nom du poste";
      }
    }
    return "Nom du poste";
  }
  function renderCompany() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.entreprise) {
          return form.infoForm.values.entreprise;
        }
      } else {
        return "Nom de l'entreprise";
      }
    }
    return "Nom de l'entreprise";
  }
  function renderTags() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.tags) {
          return form.infoForm.values.tags;
        }
      } else {
        return "mot-clé";
      }
    }
    return "mot-clé";
  }
  function renderPlace() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.place) {
          return form.infoForm.values.place;
        }
      } else {
        return "Place";
      }
    }
    return "Place";
  }
  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          width: "490px",
        }}
      >
        <div
          id="previewLogo"
          style={{
            maxHeight: "8vh",
            margin: "10px",
            marginTop: "20px",
            width: "60px",
          }}
        ></div>
        <div
          elevation="none"
          style={{
            minHeight: "10vh",
            margin: "10px",
            textAlign: "start",
          }}
        >
          <Typography variant="h5">{renderPoste()}</Typography>
          <Typography style={{ fontSize: "13px" }}>
            {renderCompany()}
          </Typography>
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
                {renderTags()}
              </p>
            </Typography>
          </div>
        </div>
      </div>

      <div
        elevation="none"
        style={{ minHeight: "10vh", margin: "10px", marginTop: "20px" }}
      >
        <Chip
          icon={<LocationOnIcon style={{ color: "white" }} />}
          label={renderPlace()}
          variant="outlined"
          style={{
            minWidth: "100px",
            cursor: "pointer",
            backgroundColor: "  #000080",
            color: "white",
          }}
        />
      </div>

      <div
        elevation="none"
        style={{ minHeight: "10vh", margin: "10px", marginTop: "20px" }}
      >
        7 days ago
      </div>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};
export default connect(mapStateToProps)(BasicGrid);
