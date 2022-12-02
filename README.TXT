Documentacion Backend.
ARQUITECTURA:
Se comenzo a crear la appi mediante NODE JS. y Express Js. con la creacion de un factory
nos aseguramos de poder concretar una estructura escalable a futuro, a los fines de 
poder incorporar mas de un tipo de base de datos si se desea. 

DBS
Actualmente se encuentra viculada a una Base de datos de Mongo Db y se esta utili
zando el pacete mongoose para trabajar en el back. Por el momento se creo un modelo,
el cual se encuentra dentro de la carpeta mongodb, justamente con la intencion de
mantener la escalabilidad y crecimiento de la app a futuro.
En cuando al Modelo Users se obseran todos los requerimientos peticionados como o
bligatorios excepto el phonenumber, el cual es opcionar a incorporar por parte del
usuario.

VARIABLES GLOBALES
Se crea una carpeta Globals a los fines de incorporar directamente alli todas las va
riables locales y que ello facilite el automatico cambio, si ello se requiriece, de
todas las incorporadas a lo largo del proyecto

LOGIN, SIGOUT & LOGOUT:
Se utiliza el packete passport para este trabajo, el cual de manera adaptada completa el
logeo necesario que se explica en cada una de las rutas a continuacion.

RUTAS:


GET
/
Esta pagina se vera sin necesidad de logeo y va a devolver todas las tecnologias guardadas
en base de datos y todos los usuarios existententes:
EJEMPLO: 
{
    "allTech": [
        {
            "_id": "637e788141dcd09ecc363a78",
            "name": "NODE.JS"
        },
        {
            "_id": "637e78d741dcd09ecc363a79",
            "name": "DENO"
        },
        {
            "_id": "637e78f241dcd09ecc363a7a",
            "name": "JAVASCRIPT"
        },
        {
            "_id": "637e790141dcd09ecc363a7b",
            "name": "JAVA"
        }
    ],
    "allusers": [
        {
            "_id": "6383ae6ebdc7a1949a3aa11a",
            "firstName": "Laura",
            "lastName": "Ojeda",
            "socialNet": "linkedin/laura",
            "phonenumber": 98237981,
            "email": "lauraojeda@gmail.com",
            "username": "Laura",
            "password": "$2b$10$8OsPoyKrvs5MvZDf.1Wml.eoH1HKx8dJ4qOrX4A2LodB3eqvDfwSa",
            "points": {
                "SumaDeVotosH": 26,
                "VotantesCantidad": 6,
                "Averange": 4.333333333333333
            },
            "__v": 0
        },
        {
            "_id": "6383b38eebc63be7b166663e",
            "firstName": "Diego Leonardo",
            "lastName": "Dimitroff Petcoff",
            "socialNet": "linkedin/Diego",
            "phonenumber": 23423,
            "email": "lauraojeda@gmail.com",
            "username": "Diego",
            "password": "$2b$10$84mKdBn7HZbHMVqOyc8xJOJWjIwUCMPZx6gm4vfF5DKj9RRgioLu2",
            "points": {
                "SumaDeVotosH": 7,
                "VotantesCantidad": 3,
                "Averange": 2.3333333333333335
            },
            "__v": 0
        },
        {
            "_id": "6383d28a057987f5146b88db",
            "firstName": "Juan",
            "lastName": "Segovia",
            "socialNet": "linkedin/Juan",
            "phonenumber": 23423,
            "email": "Juan@gmail.com",
            "username": "Juan",
            "password": "$2b$10$eMfOUYCvEZw.aO/gJ53YuePLAV.ivkvzqIUvHNbG923tZjBov3WDW",
            "points": {
                "SumaDeVotosH": 7,
                "VotantesCantidad": 2,
                "Averange": 3.5
            },
            "__v": 0
        },
        {
            "_id": "638505540777d697b486fba9",
            "firstName": "Maiten",
            "lastName": "Cullen",
            "socialNet": "linkedin/maiten",
            "phonenumber": 3413540307,
            "email": "maitencullen@gmail.com",
            "username": "Maiten18",
            "password": "$2b$10$LjZJek6lC7yzDs5ogn2nJ.J6ht3wwEWs9qEw32YCuCbcOcvmGC83W",
            "points": {
                "SumaDeVotosH": 0,
                "VotantesCantidad": 0,
                "Averange": 0
            },
            "__v": 0
        }
    ]
}


POST 
/
Esta ruta post, si enviamos un objeto con la clave "name" y el valor de la 
tecnologia buscada: devolvera la misma con su ID. En el proyecto hacia adelante se incluira
las personas que estan dando clases de esa tec bucada:
EJEMPLO del resultado si enviamos en el body {name:JAVA}
{
    "userSearched": {
        "_id": "637e790141dcd09ecc363a7b",
        "name": "JAVA"
    }
}


POST
/signout
Ruta dirigida a registrarse, en la misma se debe enviar por el BODY cada uno de los 
datos necesarios para generar un usuario. 
Ejemplo:
	{"password":"123",
	"username":"Diego",
	"email":"diegodimitroffpetcoff@gmail.com",
	"phonenumber":"3624846785",
	"socialNet":"linkedin/diego",
	"lastName":"Dimitroff Petcoff",
	"firstName":"Diego Leonardo"}

Una vez que se realice el pedido de manera exitosa la pag se redigira a la ruta /userHome
en donde se deben ver los datos del Usuario (la misma por el momento solo devuelve como 
info todas las tecnologias y los usuarios)




POST
/login
Una vez creada la cuenta se podra ingresar incorporando el el body el username y
el password correspondiente:
Ejemplo:
	{"password":"123",
	"username":"Diego"}
Una vez que se realice el pedido de manera exitosa la pag se redigira a la ruta /userHome
en donde se deben ver los datos del Usuario (la misma por el momento solo devuelve como 
info todas las tecnologias y los usuarios)


GET
/logout
Pegando en esta ruta se deslogea automaticamente la session que se encuentre activa.
En caso de estar logeado esta ruta respode "Ud. Esta logeado correctamente", en
casop contrario responde "Ud no esta logeado"

En caso de pegar una ruta inexistente la app va a responder con un 404 error


POST
/vote
Este endpoint contiene la funcion que suma los puntos y hace la ecuacion del pro
medio de las cinco estrellas. Enviando en el body un objeto con el nombre y la
puntuacion el mismo ya actualiza la base de datos. 
Devuelve el siguiente objeto:
{
    "VotoNuevo": "5",
    "SumaDeVotosH": 5,
    "VotantesCantidad": 1,
    "Averange": 5
}
VotoNuevo: Va a ser la puntuacion dada en esa ocacion en particular (en este caso
yo vote a Mainten y le di un 5, cinco estrellas)
SumaDeVotosH: Va a ser la sumatoria de todos los votos existentens: En este caso 
hago nuevamente una votacion para el ejemplo dandole como puntuacion y el resultado
ahora es :
{
    "VotoNuevo": "2",
    "SumaDeVotosH": 7,
    "VotantesCantidad": 2,
    "Averange": 3.5
}

VotantesCantidad: Es la cantidad de usuarios que votaron... se puede observar en el 
primer ejemplo era uno, y en el segundo aparece un dos ya que se voto dos veces (falta
la validacion para que el mismo usuario no pueda votar mas de una vez como lo hice en 
este ejemplo)
Averange: Es el promedio. La funcion fue generada para que haga dicha matematica de 
manera automatica.