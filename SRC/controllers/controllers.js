const TechModel = require("../dbs/mongodb/models/allTech");
const UserModel = require("../dbs/mongodb/models/users");
const Stars = require("../utils/votes");

// validacion en caso de no recibir info respondera TECNOLOGIA NO ENCONTRADA
const validationNull = require("../utils/validationNull");

class Controllers {
  constructor() {}

  async getHome(req, res) {
    // if (req.isAuthenticated()) {
    let data = {
      allTech: await TechModel.find(),
      allusers: await UserModel.find(),
    };

    // console.log(data);
    res.json(data);
    // } else {
    //   res.json("Usuario no logeado");
    // }
  }

  async postHome(req, res) {
    console.log(req.body.name);
    let data = {
      userSearched: validationNull(
        await TechModel.findOne({ name: req.body.name })
      ),
    };
    res.json(data);
  }

  async getUserHome(req, res) {
    if (req.isAuthenticated()) {
      console.log("REDIRECCIONADO A RUTA GET> /USERHOME");
      let data = {
        allTech: await TechModel.find(),
        allusers: await UserModel.find(),
      };
      res.json(data);
    } else {
      res.json("Usuario no logeado");
    }
  }
  async postUserHome(req, res) {
    if (req.isAuthenticated()) {
      let userUpdate = await UserModel.updateOne(
        {
          username: req.body.SearchByName,
        },
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            aboutMe: req.body.aboutMe,
            socialNet: req.body.socialNet,
            phonenumber: req.body.phonenumber,
          },
        }
      );
      console.log(req.body.SearchByName);
      console.log(userUpdate);

      res.redirect("userHome");
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

  async addTechToUser(req, res) {
    // console.log(req.body.name.toUpperCase());
    // if (req.isAuthenticated()) {
    let techSearched = await TechModel.findOne({
      name: req.body.tech.toUpperCase(),
    });

    let userSearched = await UserModel.findOne({
      username: req.body.name,
    });
    console.log(techSearched.users);
    let userAdded = techSearched.users.push(userSearched._id);
    console.log(techSearched.users);

    let tech = await TechModel.updateOne(
      {
        name: req.body.tech.toUpperCase(),
      },
      {
        $set: {
          users: techSearched.users,
        },
      }
    );

    res.redirect("userHome");
    //   } else {
    //     res.json("Usuario no logeado");
    //   }
  }

  async searchTech(req, res) {
    // console.log(req.body.name.toUpperCase());
    // if (req.isAuthenticated()) {
    let techSearched = await TechModel.findOne({
      name: req.body.tech.toUpperCase(),
    });
    console.log(techSearched.users);
    let allusers = [];
    const map1 = techSearched.users.map(async x =>
      allusers.push(
      await UserModel.find({
        _id: techSearched.users,
      })
// return allusers
    )

    );
    console.log(allusers);
    res.redirect("/userHome");
    //   } else {
    //     res.json("Usuario no logeado");
    //   }
  }
  async vote(req, res) {
    if (req.isAuthenticated()) {
      let user = await UserModel.findOne({
        // Se envia por el body el nombre a puntuar: {name: Laura}
        username: req.body.name,
      });
      let VotoNuevo = req.body.VotoNuevo;
      let SumaDeVotosH = await user.points.SumaDeVotosH;
      let VotantesCantidad = await user.points.VotantesCantidad;
      let Averange = await user.points.Averange;

      let prueba = Stars(VotoNuevo, SumaDeVotosH, VotantesCantidad);
      // actualizacion del usuario
      let userUpdate = await UserModel.updateOne(
        {
          username: req.body.name,
        },
        {
          $set: {
            points: {
              SumaDeVotosH: prueba.SumaDeVotosH,
              VotantesCantidad: prueba.VotantesCantidad,
              Averange: prueba.Averange,
            },
          },
        }
      );
      console.log(userUpdate);
      res.json(prueba);
    } else {
      res.json("Usuario no logeado");
    }
  }
}

module.exports = Controllers;

// FUNCION PARA ENCONTRAR EL USUARIO

// let searched = await UserModel.findOne({
//   _id: userSearched._id
// });
// console.log(userSearched._id);
// console.log(searched);
