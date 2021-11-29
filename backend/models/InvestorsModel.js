const mongoose = require("mongoose");
const Schema = mongoose.Schema;



var investorsSchema = new Schema(
  {
    // companiesInvestedIn:  [{
    //   companyid: {type: String},
    //   name: { type: String },
    //   stage: { type: String },
    //   funding: { type: String },
    // }],
    contact: { type: Object },
    description: { type: String },
    investmentDomains: { type: Array },
    investorType: { type: String },
    links: { type: Array },
    name: { type: String },
    password: { type: String },
    totalFunding: { type: String },
  },
  {
    versionKey: false,
  }
);

const investorsModel = mongoose.model("investor", investorsSchema);
module.exports = investorsModel;
