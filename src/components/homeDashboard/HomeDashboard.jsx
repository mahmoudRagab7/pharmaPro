import "./homeDashboard.css";

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContentModal from "../dialogContent/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function HomeDashboard() {
  const dashboardCardsItems = [
    {
      idi: 1,
      img: "/assets/1.png",
      desc: "Interactions Checkers",
    },
    {
      idi: 2,
      img: "/assets/new1.png",
      desc: "Patient Counselling",
    },
    {
      idi: 3,
      img: "/assets/new2.png",
      desc: "Dose Calculations",
    },
    {
      idi: 4,
      img: "/assets/new3.png",
      desc: "Lab Normal Range",
    },
    {
      idi: 5,
      img: "/assets/1.png",
      desc: "Drugs To Avoid",
    },
    {
      idi: 6,
      img: "/assets/new1.png",
      desc: "IV Preparations",
    },
    {
      idi: 7,
      img: "/assets/new2.png",
      desc: "Drugs Of Choice",
    },
    {
      idi: 8,
      img: "/assets/new3.png",
      desc: "Vaccination Schedule",
    },
    {
      idi: 9,
      img: "/assets/1.png",
      desc: "Food Interactions",
    },
    {
      idi: 10,
      img: "/assets/new1.png",
      desc: "Vitamins & Minerals",
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const homeDashboardCardJsx = dashboardCardsItems.map((card) => {
    return (
      <Grid size={{ xs: 6, md: 3 }} key={card.idi}>
        <div className="homeDashboardCard">
          <div className="homeDashboardCardImgContainer">
            <img src={card.img} alt="" className="homeDashboardCardImg" />
          </div>
          <p className="homeDashboardCardDesc">{card.desc}</p>
        </div>
      </Grid>
    );
  });
  return (
    <div className="homeDashboard">
      <Container maxWidth="lg">
        <div className="searchButtonContainer">
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{ backgroundColor: "#386f8e", color: "#fff" }}
          >
            Start Searching
          </Button>
        </div>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }} alignSelf={"center"}>
            <div className="homeDashboardImgContainer">
              <img
                src="/assets/idea1.png"
                alt=""
                className="homeDashboardImg"
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <div className="homeDashboardCards">
              <Grid container spacing={5}>
                {/* <Grid size={{ xs: 6, md: 3 }}>
                  <div className="homeDashboardCard">
                    <div className="homeDashboardCardImgContainer">
                      <img
                        src="/assets/1.png"
                        alt=""
                        className="homeDashboardCardImg"
                      />
                    </div>
                    <p className="homeDashboardCardDesc">
                      Interactions Checkers
                    </p>
                  </div>
                </Grid> */}
                {homeDashboardCardJsx}
                <Grid size={{ xs: 6, md: 3 }}>
                  <div className="homeDashboardCard">
                    <div className="homeDashboardCardImgContainer">
                      <img
                        src="/assets/1.png"
                        alt=""
                        className="homeDashboardCardImg"
                      />
                    </div>
                    <p className="homeDashboardCardDesc">
                      Interactions Checkers
                    </p>
                  </div>
                </Grid>

                <Grid size={{ xs: 6, md: 3 }}>
                  <div className="homeDashboardCard">
                    <div className="homeDashboardCardImgContainer">
                      <img
                        src="/assets/1.png"
                        alt=""
                        className="homeDashboardCardImg"
                      />
                    </div>
                    <p className="homeDashboardCardDesc">
                      Interactions Checkers
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogContentModal handleClose={handleClose} />
        </BootstrapDialog>
      </Container>
    </div>
  );
}
