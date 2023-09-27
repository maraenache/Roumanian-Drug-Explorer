const dbPool = require("../utils/dbSingleton");


exports.getBarChartData4 = async() => {
    try{
        const dbClient = await dbPool.connect();
        const query = `SELECT * FROM diagnostic`;
        console.log('test_mod');
        const valuesQuery = [];

        const result = await dbClient.query(query, valuesQuery);

        dbClient.release();
        const filteredData = result.rows;

        return filteredData;
    } catch(error ){
        console.error("eroare", err)
    }
}

