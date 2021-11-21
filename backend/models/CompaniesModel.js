const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var companiesSchema = new Schema(
  {
    domain: { type: String },
    status: { type: String },
    categoryList: { type: Array },
    contact: { type: Object },
    description: { type: String },
    employeeCount: { type: String },
    foundedOn: { type: String },
    founders: { type: Array },
    homepageUrl: { type: String },
    links: { type: Array },
    name: { type: String },
    numFundingRounds: { type: String },
    password: { type: String },
    people: { type: Array },
    revenueRange: { type: String },
    totalFundingUsd: { type: String },
  },
  {
    versionKey: false,
  }
);

const companiesModel = mongoose.model("company", companiesSchema);
module.exports = companiesModel;
