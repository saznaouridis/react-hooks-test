const {Pool} = require('pg');
require("dotenv").config();

const devconfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}
:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = {
  connectionString: "postgres://noqadwqmgsowov:552c006938574330a3b057036d68f7d9093ddb21a1d498b1b4feb1b683ecc79c@ec2-54-217-206-236.eu-west-1.compute.amazonaws.com:5432/d70cfoul38r0ep" //heroku addons
}
exports.pool = new Pool({
  connectionString: "postgres://noqadwqmgsowov:552c006938574330a3b057036d68f7d9093ddb21a1d498b1b4feb1b683ecc79c@ec2-54-217-206-236.eu-west-1.compute.amazonaws.com:5432/d70cfoul38r0ep"
});