const {getBarChartData} = require("../models/campaniiNationale")
const {getBarChartData1} = require("../models/activitatiPrevenire")
const {getBarChartData2} = require("../models/proiecteNationale")
const {getBarChartData3} = require("../models/confiscariDroguri")




//campanii_nationale
const handleLineChartRequest = async (req, res) => {

    const filteredRows = await getBarChartData();
    res.end(JSON.stringify(filteredRows))

}

//activitati_prevenire
const handleLineChartRequest1 = async (req, res) => {

    const filteredRows = await getBarChartData1();
    res.end(JSON.stringify(filteredRows))

}
//proiecte_nationale
const handleLineChartRequest2 = async (req, res) => {

    const filteredRows = await getBarChartData2();
    res.end(JSON.stringify(filteredRows))

}
//confiscari_droguri
const handleLineChartRequest3 = async (req, res) => {

    const filteredRows = await getBarChartData3();
    res.end(JSON.stringify(filteredRows))

}

module.exports = { handleLineChartRequest,handleLineChartRequest1,handleLineChartRequest2,handleLineChartRequest3};
