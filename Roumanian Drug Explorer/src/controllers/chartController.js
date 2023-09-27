const {getBarChartData} = require("../models/chartModels")
const {getBarChartData1} = require("../models/urgMedVarsta")
const {getBarChartData2} = require("../models/modAdministrare")
const {getBarChartData3} = require("../models/tipConsum")
const {getBarChartData4} = require("../models/diagnostic")

const fUrgMedGen = async (req, res) => {
    const filteredRows = await getBarChartData();
    res.end(JSON.stringify(filteredRows))
}

const fUrgMedVarsta = async (req, res) => {
  const filteredRows1 = await getBarChartData1();
  res.end(JSON.stringify(filteredRows1))

} 

const fModAdministrare = async (req, res) => {
  const filteredRows2 = await getBarChartData2();
  res.end(JSON.stringify(filteredRows2))
} 

const fTipConsum = async (req, res) => {
  const filteredRows3 = await getBarChartData3();
  res.end(JSON.stringify(filteredRows3))
} 

const fDiagnostic = async (req, res) => {
  const filteredRows4 = await getBarChartData4();
  res.end(JSON.stringify(filteredRows4))
} 

module.exports = { fUrgMedGen, fUrgMedVarsta, fModAdministrare, fTipConsum, fDiagnostic };
