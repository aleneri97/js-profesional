/**
 * En esta clase aprenderemos a como crear objetos
 * Probaremos distintas formas de crear estos objetos, cada una más eficiente que la anterior
 */

/*  
    ! Objeto simple con una función
    * Simplemente creamos un objeto y la función la agregamos aparte
    * El problema de este approach es que tenemos que repetir mucho código si queremos crear otro objeto
*/

// const hulk = {
// 	name: 'hulk',
// };

// hulk.saludar = function () {
// 	console.log(`Hola soy ${this.name}`);
// };

// hulk.saludar();

// const spider = {
// 	name: 'spider',
// };

// spider.saludar = function () {
// 	console.log(`Hola soy ${this.name}`);
// };

// spider.saludar();

/*  
    ! Mayor eficiencia: código menos repetitivo y más general (tipo constructor)
    * Ahora creamos una función que cree un objeto con atributos y funciones (constructor)
    * Esta función está… ok, pero aún podemos mejorarla
    * El problema está en que la función saludar es creada cada vez que creamos a un héroe
    * Con JS podemos hacer que esta función solo se cree una vez y simplemente invocarla con diferentes parámetros.
*/

// function Hero(name) {
// 	const hero = {
// 		name,
// 	};

// 	hero.saludar = function () {
// 		console.log(`Hola soy ${this.name}`);
// 	};

// 	return hero;
// }

// const hulk = Hero('Hulk');
// hulk.saludar();

// const spider = Hero('Spider');
// spider.saludar();

/* 
    ! Más eficiencia: una sola declaración  (colección de métodos)
    * Para evitar crear la(s) funcion(es) cada vez que creamos un objeto, podemos crearla una sola vez y hacer referencia tantas veces sea necesario
    * Definimos las funciones en una constante como si fueran parte de un objeto
        EX  Hmmmm… ¿entonces para heredar todos los métodos, tengo que declarar uno por uno?
        TRA sí… pero no, podrías instanciar a todos los métodos en una variable, pero entonces cada vez que querramos invocar una función,  tendríamos que acceder al objeto > funciones > tu método
    * Esta solución ya es elegante… pero podemos facilitarnos la vida y escribir menos código
*/

// const heroMethods = {
// 	saludar: function () {
// 		console.log(`Hola soy ${this.name}`);
// 	},
// };

// function Hero(name) {
// 	const hero = {
// 		name,
// 	};

// 	hero.saludar = heroMethods.saludar;
// 	return hero;
// }

// const hulk = Hero('Hulk');
// hulk.saludar();

// const spider = Hero('Spider');
// spider.saludar();

/* 
    ! Menos verboso: copiando todos los métodos de una sola vez (Object.create)
    * const nuevoObjeto = Object.create(objeto)
    * Con Object.create podremos asignarle a una variable la referencia a otro objeto
    * Entonces de este modo escribiremos menos código siendo eficientes
    Aclaración de Object.create: Aunque es má fácil entender que Object.create simplemente hace una copia de un objeto, en realidad no es tan simple
        Lo que realmente pasa tiene que ver con HERENCIA PROTOTIPAL, en este punto lo relevante es que
        Sirve como si el objeto copiado estuviera "directamente dentro" de nuestra variable, pero realmente lo pone dentro de __proto__
    * ¿Puede mejorar esto? Sí, porque los heroMethods podrían ser directamente parte de Hero y tendría más sentido a menos de que nuestros métodos fueran parte de de más de una clase (lo que podría ser raro pero no creo que imposible)
*/

// const heroMethods = {
// 	saludar: function () {
// 		console.log(`Hola soy ${this.name}`);
// 	},
// };

// function Hero(name) {
// 	const hero = Object.create(heroMethods);
// 	hero.name = name;

// 	return hero;
// }

// const hulk = Hero('Hulk');
// hulk.saludar();

// const spider = Hero('Spider');
// spider.saludar();

/*
    ! Mayor eficiencia: usando prototipos para crear métodos propios de una clase (prototype)
    * prototype es una propiedad inherente a las funciones, entonces por defecto todas contarán con uno sin hacer nada extra
    * Para que nuestro código tenga más sentido, haremos que nuestra función sea parte directamente de Hero
    * De esta forma podemos obtener la simplicidad de nuestro 2º approach gracias a prototype, pero la eficiencia de una sola creación de función gracias a Object.create
    * ¿Y si usamos azúcar sintáctica para escribir menos código?
*/

// function Hero(name) {
// 	const hero = Object.create(Hero.prototype);
// 	hero.name = name;

// 	return hero;
// }

// Hero.prototype.saludar = function () {
// 	console.log(`Hola soy ${this.name}`);
// };

// const hulk = Hero('Hulk');
// hulk.saludar();

// const spider = Hero('Spider');
// spider.saludar();

/*
    ! LA forma más eficiente: usando new y entendiendo this (new)
    * la palabra reservada new es azúcar sintática que simplemente nos ahorrará escribir código extra
    * Directamente lo que nos ahorra es escribir el Object.create y retorno de la variable que contiene las funciones y propiedades que es this
    * Entendamos un poco más a detalle: cuando creamos una clase con new, es "como" si el object.create se asignara automáticamente con las funciones del protoype de nuestra clase a this.
    * Además, el return también lo hará en automático de this, por esto será mejor que con esta sintaxis agreguemos nuestros atributos a this.
    *
 */
function Hero(name) {
	this.name = name;
}

Hero.prototype.saludar = function () {
	console.log(`Hola soy ${this.name}`);
};

const hulk = new Hero('Hulk');
hulk.saludar();

const spider = new Hero('Spider');
spider.saludar();
