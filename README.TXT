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

/
GET
Es una pagina de inicio que solo muestra "HOME INICIO" a los fines de probar que el
server este corriendo correctamente

/signout
POST
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

/login
POST
Una vez creada la cuenta se podra ingresar incorporando el el body el username y
el password correspondiente:
Ejemplo:
	{"password":"123",
	"username":"Diego"}

/logout
GET
Pegando en esta ruta se deslogea automaticamente la session que se encuentre activa.
En caso de estar logeado esta ruta respode "Ud. Esta logeado correctamente", en
casop contrario responde "Ud no esta logeado"

En caso de pegar una ruta inexistente la app va a responder con un 404 error
