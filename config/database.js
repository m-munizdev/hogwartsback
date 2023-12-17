const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'artemisapolo2',
  database: 'hogwarts'
});

module.exports = pool; 





