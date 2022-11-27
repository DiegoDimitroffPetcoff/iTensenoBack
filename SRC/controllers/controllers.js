const TechModel = require("../dbs/mongodb/models/allTech");
const UserModel = require("../dbs/mongodb/models/users");

// validacion en caso de no recibir info respondera TECNOLOGIA NO ENCONTRADA
const validationNull = require("../utils/validationNull");

class Controllers {
  constructor() {}

  async home(req, res) {
    if (req.isAuthenticated()) {

      let data = {
        allTech: await TechModel.find(),
        allusers: await UserModel.find(),
        userSearched:validationNull(await TechModel.findOne({ name: req.body.name })),
      };

      // console.log(data);
      res.json(data);
    } else {
      res.json("Usuario no logeado");
    }
  }

  async readTech(req, res) {
    // if (req.isAuthenticated()) {
    let tech = await TechModel.find();
    console.log(tech);
    res.json(tech);
    // } else {
    //   res.json("Usuario no logeado");
    // }
  }

  async searchTech(req, res) {
    // console.log(req.body.name.toUpperCase());
    // if (req.isAuthenticated()) {
    let techSearched = await TechModel.findOne({
      name: req.body.name.toUpperCase(),
    });
    // console.log(techSearched);
    res.json(techSearched);
    //   } else {
    //     res.json("Usuario no logeado");
    //   }
  }
}

module.exports = Controllers;
