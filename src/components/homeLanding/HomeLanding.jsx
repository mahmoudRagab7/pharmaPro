import "./homeLanding.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

export default function HomeLanding() {
  return (
    <div className="homeLanding">
      <Container maxWidth="lg">
        <h1 className="title" style={{ color: "#386f8e" }}>
          Welcome to pharmaPro
        </h1>
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="homeLandingImgContainer">
              <img src="/assets/image.png" alt="" className="homeLandingImg" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
