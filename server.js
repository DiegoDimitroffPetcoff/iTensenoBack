const express = require('express');
const app = express()

require("dotenv").config();

const Factory = require("./utils/factory");
const DBSChosen = process.argv[2] || "mongo";
const DBS = Factory.getInstance(DBSChosen);
DBS.connection(DBSChosen);

const Routes = require('./routes/routes')
const PORT = process.env.PORT || 3000;

const routes = new Routes()
app.use(routes.start())

const SERVER = app.listen(PORT, () => {
    console.log(`Funcionando en http://localhost:${PORT}`);
  });
  
  SERVER.on("Error", (error) => console.log("error en servidor ${error}"));