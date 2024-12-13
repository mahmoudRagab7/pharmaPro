import "./ourResources.css";
import Container from "@mui/material/Container";

export default function OurResources() {
  return (
    <div className="ourResources">
      <Container maxWidth="lg">
        <h1 style={{ color: "#386f8e" }}>Our Resources</h1>
        <div className="ourResourcesImgContainer">
          <img
            src="/assets/r5.jpeg"
            alt=""
            className="ourResourcesImg"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </Container>
    </div>
  );
}
