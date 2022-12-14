const mongoose = require("mongoose");

const {MONGO_URI} = require("../globals/globals");

let instance = null;


class Factory {
  constructor() {}

  static getInstance(data) {
    if (!instance) {
      instance = new Factory();
      if (data == "mongo" || data == "file") {
        console.log(`Se activa Factory con ${data}`);
      }
    }
    return instance;
  }
  connection(data) {
    if (data == "file") {
    } else if (data == "mongo") {
      mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("CONEXION MONGO");
    } else {
      console.log("Error en conexion de base de datos");
    }
  }
}

module.exports = Factory;
