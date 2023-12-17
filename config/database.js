const { Pool } = require('pg');
const pool = new Pool({
    connectionString: "postgres://hogwarts_2dm2_user:aeOuaMfHhawQOxSwJssjpB6yH8dmHamm@dpg-clvm5rmd3nmc738ehlmg-a.oregon-postgres.render.com/hogwarts_2dm2",
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = pool;


