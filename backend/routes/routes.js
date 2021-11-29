const express = require("express");
const router = express.Router();

// Import Mongo Models
const Companies = require("../models/CompaniesModel");
const Investors = require("../models/InvestorsModel");
const Investments = require("../models/InvestmentsModel");


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
router.post("/investCompany", async (req, res, next) => {


  Companies.findById(
    { _id: req.body.companyid },
    (err, company) => {
      if (!err) {
        Investors.findById(
          { _id: req.body.investorid },
          (err, investor) => {
            if (!err) {
              console.log(`${req.body.investorid} invests ${req.body.companyid}`);
              Investments.create(
                {
                  companyid: req.body.companyid,
                  investorid: req.body.investorid,
                  name: req.body.name,
                  stage: req.body.stage,
                  funding: req.body.funding,
                },
                (err, investment) => {
                  if (!err) {
                    res.writeHead(200, {
                      "Content-Type": "application/json",
                    });
                    res.end(JSON.stringify(investment));
                  } else {
                    res.writeHead(500, {
                      "Content-Type": "text/plain",
                    });
                    res.end(`Interal Error: ${err}`);
                  }
                }
              );
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
  Investments.find(
    { investorid: req.params.investorid }, 
    (error, investments) => {
    if (error) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("Investment not found.");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      company_list = investments.map(e => e.companyid);
      res.end(JSON.stringify(company_list));
    }
  });
});

// List all investors of a company.
router.get("/investor/:companyid", async (req, res, next) => {
  console.log(`Get investors of ${req.params.companyid}`);
  Investments.find(
    { companyid: req.params.companyid }, 
    (error, investments) => {
    if (error) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("Investment not found.");
    } else {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      console.log(investments);
      investor_list = investments.map(e => e.investorid);
      res.end(JSON.stringify(investor_list));
    }
  });
});


module.exports = router;
