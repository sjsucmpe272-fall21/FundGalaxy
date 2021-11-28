const express = require("express");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();
const secret = 'mysecretsshhh';
// Import Mongo Models
const Companies = require("../models/CompaniesModel");
const Investors = require("../models/InvestorsModel");

//authenticate user with login & password.
router.post('/api/authenticate', function (req, res) {
  const { usertype, email, password } = req.body;
  if (usertype.toLowerCase() === "company") { var entity = Companies; }
  else if (usertype.toLowerCase() === "investor") { var entity = Investors; }
  else { res.status(500).send("Entity type not specified."); }
  console.log(usertype);
  console.log(email);
  console.log(password);
  entity.findOne({ contact: { email } }, function (err, entity) {
    console.log(entity);
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!entity) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      entity.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

router.post('/api/register', function (req, res) {
  const { usertype } = req.body;
  if (usertype.toLowerCase() === "company") {
    const { domain,
      status,
      categoryList,
      email, phone, countryCode, stateCode, city, address,
      description,
      employeeCount,
      foundedOn,
      founders,
      homepageUrl,
      links,
      name,
      numFundingRounds,
      password,
      people,
      revenueRange,
      totalFundingUsd } = req.body;

    var entity = new Companies({
      domain,
      status,
      categoryList,
      contact: { email, phone, countryCode, stateCode, city, address },
      description,
      employeeCount,
      foundedOn,
      founders,
      homepageUrl,
      links,
      name,
      numFundingRounds,
      password,
      people,
      revenueRange,
      totalFundingUsd
    });
  }
  else if (usertype.toLowerCase() === "investor") {
    const { companiesInvestedIn, companyName, funding, stage,
      telphone, address, email,
      description,
      investmentDomains,
      investorType,
      links,
      name,
      password,
      totalFunding } = req.body;
    console.log(companiesInvestedIn);
    var entity = new Investors({
      companiesInvestedIn: [{ companyName, funding, stage }],
      contact: { telphone, address, email },
      description,
      investmentDomains,
      investorType,
      links,
      name,
      password,
      totalFunding
    });
  }
  else {
    res.status(500).send("Entity type not specified.");
  }
  console.log(entity);
  //TODO: check if enity with email already present
  entity.save(function (err) {
    if (err) {
      res.status(500).send("Error registering new entity please try again.");
    } else {
      res.status(200).send("Entity registered");
    }
  });
});

// Get Company Details by ID
router.get("/company/details/:companyid", async (req, res, next) => {
  Companies.findOne({ _id: req.params.companyid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

// Get Investor Details by ID
router.get("/investor/details/:investorid", async (req, res, next) => {
  Investors.findOne({ _id: req.params.investorid }, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

// Update Company Details
router.put("/updateCompanyDetails/:companyid", async (req, res, next) => {
  Companies.findOneAndUpdate(
    { _id: req.params.companyid },
    {
      domain: req.body.domain,
      status: req.body.status,
      categoryList: req.body.categoryList,
      contact: req.body.contact,
      description: req.body.description,
      employeeCount: req.body.employeeCount,
      foundedOn: req.body.foundedOn,
      founders: req.body.founders,
      homepageUrl: req.body.homepageUrl,
      links: req.body.links,
      name: req.body.name,
      numFundingRounds: req.body.numFundingRounds,
      people: req.body.people,
      revenueRange: req.body.revenueRange,
      totalFundingUsd: req.body.totalFundingUsd,
    },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(doc));
      } else {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      }
    }
  );
});

// Update Investor Details
router.put("/updateInvestorDetails/:investorid", async (req, res, next) => {
  Companies.findOneAndUpdate(
    { _id: req.params.investorid },
    {
      companiesInvestedIn: req.body.companiesInvestedIn,
      contact: req.body.contact,
      description: req.body.description,
      investmentDomains: req.body.investmentDomains,
      investorType: req.body.investorType,
      links: req.body.links,
      name: req.body.name,
      totalFunding: req.body.totalFunding,
    },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify(doc));
      } else {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
        res.end("Error Occured");
      }
    }
  );
});

// Get All Companies
router.get("/companies/all", async (req, res, next) => {
  Companies.find({}, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

// Get All Investors
router.get("/investors/all", async (req, res, next) => {
  Investors.find({}, (error, doc) => {
    if (error) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error Occured");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(doc));
    }
  });
});

module.exports = router;
