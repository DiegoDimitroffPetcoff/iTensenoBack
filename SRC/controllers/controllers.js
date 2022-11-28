const TechModel = require("../dbs/mongodb/models/allTech");
const UserModel = require("../dbs/mongodb/models/users");
const Stars = require("../utils/votes");

// validacion en caso de no recibir info respondera TECNOLOGIA NO ENCONTRADA
const validationNull = require("../utils/validationNull");

class Controllers {
  constructor() {}

  async home(req, res) {
    // if (req.isAuthenticated()) {
    let data = {
      allTech: await TechModel.find(),
      allusers: await UserModel.find(),
      userSearched: validationNull(
        await TechModel.findOne({ name: req.body.name })
      ),
    };

    // console.log(data);
    res.json(data);
    // } else {
    //   res.json("Usuario no logeado");
    // }
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
  async vote(req, res) {
    // console.log(req.body.name.toUpperCase());
    // if (req.isAuthenticated()) {

    let user = await UserModel.findOne({
      // Se envia por el body el nombre a puntuar: {name: Laura}
      firstName: req.body.name,
    });
    let VotoNuevo = req.body.VotoNuevo;
    let SumaDeVotosH = await user.points.SumaDeVotosH;
    let VotantesCantidad = await user.points.VotantesCantidad;
    let Averange = await user.points.Averange;

    let prueba = Stars(VotoNuevo, SumaDeVotosH, VotantesCantidad);
    // actualizacion del usuario
    let userUpdate = await UserModel.updateOne(
      {
        firstName: req.body.name,
      },
      {
        $set: {
          points: {
            SumaDeVotosH: prueba.SumaDeVotosH,
            VotantesCantidad: prueba.VotantesCantidad,
            Averange:prueba.Averange
          },
        },
      }
    );

    res.json(prueba);
    //   } else {
    //     res.json("Usuario no logeado");
    //   }
  }
}

module.exports = Controllers;
