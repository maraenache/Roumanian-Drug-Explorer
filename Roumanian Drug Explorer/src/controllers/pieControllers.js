const {getBarChartData2} = require("../models/tratDrogGen")
const {getBarChartData3} = require("../models/tratDrogVarsta")
const {getBarChartData4} = require("../models/tratSitLoc")
const {getBarChartData5} = require("../models/tratDroguri")
const {getBarChartData6} = require("../models/tratOcupatie")
const {getBarChartData7} = require("../models/tratStudii")
const {getBarChartData8} = require("../models/tratTipLoc")
const {getBarChartData9} = require("../models/tratDrogRef")


//tratement_droguri_gen
const handlePieChartRequest = async (req, res) => {

    const filteredRows2 = await getBarChartData2();
    res.end(JSON.stringify(filteredRows2))

}
//tratement_droguri
const handlePieChartRequest4 = async (req, res) => {

  const filteredRows2 = await getBarChartData5();
  res.end(JSON.stringify(filteredRows2))

}
//tratement_droguri_varsta

const handlePieChartRequest2 = async (req, res) => {

  const filteredRows3 = await getBarChartData3();

  res.end(JSON.stringify(filteredRows3))

}
//tratament_situatie_locativa
const handlePieChartRequest3 = async (req, res) => {

  const filteredRows4 = await getBarChartData4();

  res.end(JSON.stringify(filteredRows4))

}
const handlePieChartRequest5 = async (req, res) => {

  const filteredRows5 = await getBarChartData6();

  res.end(JSON.stringify(filteredRows5))

}
const handlePieChartRequest6 = async (req, res) => {

  const filteredRows6 = await getBarChartData7();

  res.end(JSON.stringify(filteredRows6))

}
const handlePieChartRequest7 = async (req, res) => {

  const filteredRows7 = await getBarChartData8();

  res.end(JSON.stringify(filteredRows7))

}
const handlePieChartRequest8 = async (req, res) => {

  const filteredRows8 = await getBarChartData9();

  res.end(JSON.stringify(filteredRows8))

}

module.exports = { handlePieChartRequest, handlePieChartRequest2,handlePieChartRequest3,handlePieChartRequest4,handlePieChartRequest5, handlePieChartRequest6,handlePieChartRequest7,handlePieChartRequest8};
