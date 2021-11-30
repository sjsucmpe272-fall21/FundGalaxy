import React, { useState, useEffect } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import axios from "axios";
import LocationIcon from "../../assets/img/location.png";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://fundgalaxy-api.herokuapp.com/investorname?iname=" +
          JSON.parse(localStorage.getItem("user")).name.toLowerCase()
      )
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <div>
      <GridContainer>
        {data &&
          data.map((key) => (
            <GridItem xs={12} sm={12} md={4} key={key.id}>
              <Card chart>
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    <b
                      style={{
                        textTransform: "capitalize",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        window.location.href = "#";
                      }}
                    >
                      {key.name}
                    </b>
                  </h4>
                  <p
                    className={classes.cardCategory}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    <b>Investment Domain:</b>{" "}
                    {key.investmentDomains[0].split("_")[0]}{" "}
                    {key.investmentDomains[0].split("_")[1]}
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <span style={{ marginRight: "5px" }}>
                      <img
                        src={LocationIcon}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </span>
                    <div style={{ color: "black" }}>
                      {key.contact.split(",")[0]}, {key.contact.split(",")[1]}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}
