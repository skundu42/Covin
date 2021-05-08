import React from "react";

// import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import styles from "./style";
import { Grid, Typography, Hidden, Container } from "@material-ui/core";
import Tip from "../../components/Tip";

import medicalMask from "../../assets/medical-mask 1.png";
import hands from "../../assets/washing-hands 1.png";
import liquidSoap from "../../assets/liquid-soap 1.png";
import socialDist from "../../assets/social-distancing 1.png";
import Member from "../../components/Member";


const useStyles = makeStyles(styles);

function AboutPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.aboutPage}>
      <Hidden mdUp>
        <Grid xs={12}>
          <Typography variant="h5" className={classes.brandingName}>
            Cov
            <Typography
              variant="h5"
              className={classes.secondaryColorBrandingName}
            >
              in
            </Typography>
          </Typography>
        </Grid>
      </Hidden>

      {/* Hero Section */}
      <div className={classes.about_main}>
        <Typography variant="h4" className={classes.title}>
          What is{" "}
          <Typography variant="h4" className={classes.title_underline}>
            Covin
          </Typography>{" "}
          ?
        </Typography>
        <Typography variant="caption" gutterBottom className={classes.info}>
          <strong>Covin</strong> is a platform created by our team to help
          patients during this pandemic. The coronavirus scare in India has left
          a tremendous impact on its citizens. There is a shortage of resources.
          These resources include oxygen, beds, plasma, blood, ventilators,
          ambulances, vaccines, and other medications.{" "}
        </Typography>
        <Typography variant="caption" className={classes.info}>
          With <strong>IndiCov</strong>, we plan to provide all the help
          possible to the patient by informing and constantly updating them of
          the available resources.
        </Typography>
      </div>

      {/* Prevention Section */}
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h4" className={classes.title}>
            Basic Prevention Methods
          </Typography>
        </Grid>
        <Grid container sm={12} md={6}>
          <Tip
            image={medicalMask}
            title={"Face covers/masks"}
            description={
              "Wear a mask in public and ensure it covers your nose and mouth and is secure under the chin."
            }
          />
          <Tip
            image={hands}
            title={"Wash Hands frequently"}
            description={
              "Wash hands with soap and water for at least 20 seconds and avoid touching your face."
            }
          />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}>
          <Tip
            image={liquidSoap}
            title={"Use of sanitizers"}
            description={
              "Use an alcohol-based sanitizer to prevent the spread of germs."
            }
          />
          <Tip
            image={socialDist}
            title={"Physical distancing"}
            description={
              "Stay at least 6 feet apart from people who don't live with you, and avoid close contact with sick people."
            }
          />
        </Grid>
      </Grid>

      {/* Team Section */}
      

      {/* Sources Section */}
      <div className={classes.sources}>
        <Typography variant="h3" className={classes.title}>
          Sources
        </Typography>
        <Typography variant="subtitle1" className={classes.info}>
          All the information in the platform is imported from an open-source Covid Database mmanaged by a group of volunteers, who are in constant search of new leads from any source available and only added after an initial verification round. So that all information is accurate and up-to date. 
        </Typography>
      </div>
    </Grid>
  );
}

export default AboutPage;