require('dotenv').config()

module.exports ={
    MONGO_URI: process.env.MONGO_URI ||'',
    TIEMPO_EXPIRACION: process.env.TIEMPO_EXPIRACION|| 90000,
    PORT: process.env.PORT ||8080

}