const TechModel = require("../dbs/mongodb/models/allTech");
const UserModel = require("../dbs/mongodb/models/users");


class Controllers {
  constructor() {}

  async home(req, res) {
    let allTech = await TechModel.find();
    let alluser = await UserModel.find();
    res.status(allTech, alluser);
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
    let techSearched = await TechModel.findOne({ name: req.body.name.toUpperCase() });
    // console.log(techSearched);
    res.json(techSearched);
    //   } else {
    //     res.json("Usuario no logeado");
    //   }
  }
}

module.exports = Controllers;
