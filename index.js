const express = require('express');
const app = express();
const cors = require('cors');
const countryRoutes = require('./queries');
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 4000;

//process.env.PORT
//process.env.NODE_ENV =>production or undefined
//middleware
app.use(cors());
app.options('*', cors()); // include before other routes
app.use(express.json());
app.use(express.static("./frontend/build"));   
if (process.env.NODE_ENV === "production") {
  
  app.use(express.static(path.join(__dirname, "frontend/build")));
}
// GET Request to root URL (/)
app.use("/",countryRoutes); // mount the countryRoutes on the app

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
})
const server = http.createServer(app);
server.listen(PORT, () => {
console.log(`server has started on port ${PORT}.`)
})