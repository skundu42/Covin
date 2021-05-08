import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./style";

import axios from "axios";

import {
  ResourcesStateSearch,
  ServicesSearch,
  ResourceCards,
} from "../../components";

const useStyles = makeStyles(styles);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResourcesPage() {
  const classes = useStyles(),
    history = useHistory(),
    query = useQuery();

  const [stateName, setStateName] = useState(query.get("state"));
  const [service, setService] = useState(query.get("service"));
  const [resources, setResources] = useState({
    ambulance: null,
    helpline: null,
    hospitalsAndBeds: null,
    medicine: null,
    oxygen: null,
  });

  useEffect(() => {
    const ambulanceData = {
      method: "get",
      url: "https://life-api.coronasafe.network/data/ambulance_verified.json",
      headers: {},
    };
    const helplineData = {
      method: "get",
      url: "https://life-api.coronasafe.network/data/helpline_verified.json",
      headers: {},
    };
    const hospitalsAndBedsData = {
      method: "get",
      url:
        "https://life-api.coronasafe.network/data/hospital_clinic_centre_verified.json",
      headers: {},
    };
    const medicineData = {
      method: "get",
      url: "https://life-api.coronasafe.network/data/medicine_verified.json",
      headers: {},
    };
    const oxygenData = {
      method: "get",
      url: "https://life-api.coronasafe.network/data/oxygen_verified.json",
      headers: {},
    };
    console.log("Fetching resources...");

    axios(ambulanceData).then(function (response) {
      setResources((prevResources) => {
        return { ...prevResources, ambulance: response.data };
      });
    });
    axios(helplineData).then(function (response) {
      setResources((prevResources) => {
        return { ...prevResources, helpline: response.data };
      });
    });
    axios(hospitalsAndBedsData).then(function (response) {
      setResources((prevResources) => {
        return { ...prevResources, hospitalsAndBeds: response.data };
      });
    });
    axios(medicineData).then(function (response) {
      setResources((prevResources) => {
        return { ...prevResources, medicine: response.data };
      });
    });
    axios(oxygenData).then(function (response) {
      setResources((prevResources) => {
        return { ...prevResources, oxygen: response.data };
      });
    });
  }, []);

  useEffect(() => {
    if (!stateName && !service) history.replace(`?state=India&service=All`);
    else if (!stateName) history.replace(`?state=India&service=${service}`);
    else if (!service) history.replace(`?state=${stateName}&service=All`);
    else history.push(`?state=${stateName}&service=${service}`);
  }, [stateName, service]);

  return (
    <Grid container className={classes.homePage}>
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
      <Grid item sm={12} md={6} className={classes.section}>
        <ResourcesStateSearch
          setStateName={setStateName}
          stateName={stateName}
        />
      </Grid>
      <Grid item sm={12} md={6} className={classes.section}>
        <ServicesSearch setService={setService} service={service} />
      </Grid>
      <Grid
        container
        className={`${classes.section} ${classes.resourcesSection}`}
      >
        <ResourceCards resources={resources} />
      </Grid>
    </Grid>
  );
}

export default ResourcesPage;