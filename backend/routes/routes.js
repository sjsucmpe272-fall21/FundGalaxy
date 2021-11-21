const express = require("express");
const router = express.Router();

// Import Mongo Models
const Companies = require("../models/CompaniesModel");
const Investors = require("../models/InvestorsModel");

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

module.exports = router;
