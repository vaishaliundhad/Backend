const sql = require("mssql/msnodesqlv8")
var config = {
    server: "DESKTOP-C1U3550\\MSSQLSERVER04",
    database: "testdb",
    driver: "ODBC Driver 17 for SQL Server",
    options: {
        trustedConnection: true
    }
}

sql.connect(config, function (err) {
    if (err) 
        
    {
        console.log("Error something to the database", err);
        return;
    }

    console.log("connection to the database");

    var request = new sql.Request();
    request.query("select * from tbl_students", function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log("Query resullts" , result);
        
      


    })

})