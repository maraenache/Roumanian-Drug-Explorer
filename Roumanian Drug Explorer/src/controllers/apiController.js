
const {handlePieChartRequest,handlePieChartRequest2,handlePieChartRequest3,handlePieChartRequest4, handlePieChartRequest5,handlePieChartRequest6,handlePieChartRequest7,handlePieChartRequest8} = require("./pieControllers")
const {handleMultiChartRequest,handleMultiChartRequest1,handleMultiChartRequest2,handleMultiChartRequest3,handleMultiChartRequest4} = require("./multiBarController")
const {fUrgMedGen, fUrgMedVarsta, fModAdministrare,fTipConsum, fDiagnostic} = require("./chartController");
const { handleLineChartRequest, handleLineChartRequest1, handleLineChartRequest2, handleLineChartRequest3 } = require("./2022Controller");
const apiController = (req, res) =>{

    if(req.url.startsWith("/api/tratDroguri")){
        handlePieChartRequest4(req, res);
    }else if(req.url.startsWith("/api/tip-admitere")){
        handleMultiChartRequest4(req, res);
    }else if(req.url.startsWith("/api/drog-principal")){
        handleMultiChartRequest3(req, res);
    }else if(req.url.startsWith("/api/prima-injectare")){
        handleMultiChartRequest2(req, res);
    }else if(req.url.startsWith("/api/boli-varsta")){
        handleMultiChartRequest1(req, res);
    }else if(req.url.startsWith("/api/boli-gen")){
        handleMultiChartRequest(req, res);
    }else  if(req.url.startsWith("/api/tratSitLoc")){
        handlePieChartRequest3(req, res);
    }
    else  if(req.url.startsWith("/api/tratOcupatie")){
        handlePieChartRequest5(req, res);
    }
    else  if(req.url.startsWith("/api/tratStudii")){
        handlePieChartRequest6(req, res);
    }
    else  if(req.url.startsWith("/api/tratTipLoc")){
        handlePieChartRequest7(req, res);
    }
    else  if(req.url.startsWith("/api/tratDrogRef")){
        handlePieChartRequest8(req, res);
    }
    else if(req.url.startsWith("/api/tratDrogVarsta")){
        handlePieChartRequest2(req, res);
    }else if(req.url.startsWith("/api/tratDrogGen")){
        handlePieChartRequest(req, res);}
    else if(req.url.startsWith("/api/urgente-medicale-gen")){
        fUrgMedGen(req, res);
    }
    else if(req.url.startsWith("/api/urgente-medicale-varsta"))
    {
        fUrgMedVarsta(req,res);
    }
    else if(req.url.startsWith("/api/mod-administrare"))
    {
        fModAdministrare(req, res);
    }
    else if(req.url.startsWith("/api/tip-consum"))
    {
        fTipConsum(req, res);
    }
    else if(req.url.startsWith("/api/diagnostic"))
    {
        fDiagnostic(req, res);
    }
    else if(req.url.startsWith("/api/campaniiNationale"))
    {
        handleLineChartRequest(req, res);
    }
    else if(req.url.startsWith("/api/activitatiPrevenire"))
    {
        handleLineChartRequest1(req, res);
    }
    else if(req.url.startsWith("/api/proiecteNationale"))
    {
        handleLineChartRequest2(req, res);
    }
    else if(req.url.startsWith("/api/confiscariDroguri"))
    {
        handleLineChartRequest3(req, res);
    }
    else{
        res.end("nu exista acest endpoint creat")
    }
}

module.exports = apiController