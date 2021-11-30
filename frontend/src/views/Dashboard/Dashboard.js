import React, { useState, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import axios from "axios";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://fundgalaxy-api.herokuapp.com/investorname?iname=glassdoor")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <GridContainer>
        {data &&
          data.map((key) => (
            <GridItem xs={12} sm={12} md={4} key={key.id}>
              <Card chart>
                <CardBody>
                  <h4 className={classes.cardTitle}>Daily Sales</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} />{" "}
                      55%{key.id}
                    </span>{" "}
                    increase in today sales.
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 4 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}
