const dbPool = require("../utils/dbSingleton");

exports.getBarChartData = async() => {
    try{
        const dbClient = await dbPool.connect();
        
        const query = `SELECT * FROM urgente_medicale_sex`;
        const valuesQuery = [];

        const result = await dbClient.query(query, valuesQuery);

        dbClient.release();
        const filteredData = result.rows;

        return filteredData;
    } catch(error ){
        console.error("eroare", err)
    }
}

