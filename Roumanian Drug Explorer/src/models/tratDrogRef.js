const dbPool = require("../utils/dbSingleton");

exports.getBarChartData9 = async() => {
    try{
        const dbClient = await dbPool.connect();
        const query = `SELECT * FROM tratament_droguri_referire`;
        console.log('test');
        const valuesQuery = [];

        const result = await dbClient.query(query, valuesQuery);

        dbClient.release();
        const filteredData = result.rows;

        return filteredData;
    } catch(error ){
        console.error("eroare", err)
    }
}

