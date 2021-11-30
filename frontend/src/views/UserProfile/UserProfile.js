import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

const UserProfile = () => {
  const [personaDetails, setPersonaDetails] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:5001/investor/details/6199a907f7b3a7df4c314546")
      .then((res) => setPersonaDetails(res.data));
  }, []);

  console.log("personaDetails", personaDetails);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody></CardBody>
            <div style={{ textAlign: "right", padding: "15px" }}>
              <Button color="primary">Update Profile</Button>
            </div>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default UserProfile;
