const {getBarChartData} = require("../models/boliGen")
const {getBarChartData1} = require("../models/boliVarsta")
const {getBarChartData2} = require("../models/primaInjectare")
const {getBarChartData3} = require("../models/drogPrincipal")
const {getBarChartData4} = require("../models/tipAdmitere")


//boli_gen
const handleMultiChartRequest = async (req, res) => {

    const filteredRows = await getBarChartData();
    res.end(JSON.stringify(filteredRows))

}

//boli_varsta
const handleMultiChartRequest1 = async (req, res) => {

    const filteredRows = await getBarChartData1();
    res.end(JSON.stringify(filteredRows))

}
//prima_injectare
const handleMultiChartRequest2 = async (req, res) => {

    const filteredRows = await getBarChartData2();
    res.end(JSON.stringify(filteredRows))

}
//drog_principal
const handleMultiChartRequest3 = async (req, res) => {

    const filteredRows = await getBarChartData3();
    res.end(JSON.stringify(filteredRows))

}
//tip_admitere
const handleMultiChartRequest4 = async (req, res) => {

    const filteredRows = await getBarChartData4();
    res.end(JSON.stringify(filteredRows))

}
module.exports = { handleMultiChartRequest,handleMultiChartRequest1,handleMultiChartRequest2,handleMultiChartRequest3,handleMultiChartRequest4};
