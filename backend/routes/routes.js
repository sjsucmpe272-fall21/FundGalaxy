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
  Investors.findOneAndUpdate(
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


// Add Company Details
router.post("/addCompanyDetails", async (req, res, next) => {
  console.log(`Add new company ${req.body.name}`);
  Companies.create(
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


// Add Investor Details
router.post("/addInvestorDetails", async (req, res, next) => {
  console.log(`Add investor ${req.body.name}`);
  Investors.create(
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
    // { new: true },
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

// Invest a company
router.put("/investCompany/:investorid", async (req, res, next) => {
  Companies.findById(
    { _id: req.body.companiesInvestedIn.companyid },
    (err, company) => {
      if (!err) {
        Investors.findOneAndUpdate(
          { _id: req.params.investorid },
          { $push: { companiesInvestedIn: req.body.companiesInvestedIn } },
          { new: true },
          (err, doc) => {
            if (!err) {
              res.writeHead(200, {
                "Content-Type": "application/json",
              });
              res.end(JSON.stringify(doc));
            } else {
              res.writeHead(404, {
                "Content-Type": "text/plain",
              });
              res.end("Investor not found.");
            }
          }
        )
      } else {
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });
        res.end("Company not found.");
      }
    });
});

// List all invested companies of an investor.
router.get("/investor/invested_companies/:investorid", async (req, res, next) => {
  console.log(`Get invested companies of ${req.params.investorid}`)
  Investors.findOne(
    { _id: req.params.investorid }, 
    (error, investor) => {
    if (error) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("Investor not found.");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      console.log(`response:\n ${investor.companiesInvestedIn}`);
      res.end(JSON.stringify(investor.companiesInvestedIn));
    }
  });
});


module.exports = router;
