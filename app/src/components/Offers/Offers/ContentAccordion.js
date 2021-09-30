import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
function SecondDivPreview({
  description,
  mission,
  profile,
  howToApply,
  index,
}) {
  const history = useHistory();
  return (
    <>
      <Grid style={{ textAlign: "start", margin: "20px", marginTop: "0px" }}>
        <Grid style={{ paddingTop: "40px" }}>
          <Typography style={{ minHeight: "100px" }}>{description}</Typography>
        </Grid>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Missions
        </Typography>
        <Typography style={{ minHeight: "100px" }}>{mission}</Typography>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Profil recherché
        </Typography>
        <Typography style={{ minHeight: "100px" }}>{profile}</Typography>
      </Grid>
      <Grid
        style={{
          paddingTop: "30px",
          marginRight: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            borderTop: "0.5px solid #E8E8E8",
            paddingTop: "30px",
          }}
        >
          Comment postuler ?
        </Typography>
        <Typography style={{ marginTop: "30px", minHeight: "50px" }}>
          {howToApply}
        </Typography>
        <Button
          variant="default"
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#f6c200",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          onClick={() => history.push(`/offers/:${index + 1}`)}
        >
          Postuler
        </Button>
        <Typography style={{ marginTop: "20px", marginBottom: "20px" }}>
          N'hésitez pas à indiquer que vous avez trouvé l'offre d'emploi sur AI
          Jobs pour nous soutenir, cela incite plus d'entreprises à publier ici
          !
        </Typography>
      </Grid>
    </>
  );
}

export default SecondDivPreview;
