import React from "react";
import styles from "./navbar.module.scss";
import { Grid, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.nav_container}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={styles.navbar}>
            <Typography varient="p" component="p">
              Home
            </Typography>
            <Typography varient="p" component="p">
              About Us
            </Typography>
            <Typography varient="p" component="p">
              Contact Us
            </Typography>
            <Typography varient="p" component="p">
              Chat
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
