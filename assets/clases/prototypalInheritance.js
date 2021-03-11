function Hero(name) {
	this.name = name;
}

Hero.prototype.saludar = function () {
	console.log(`Hola, soy ${this.name}`);
};

const hulk = new Hero('Hulk');
hulk.saludar();

/*
    ! Propiedades de la instancia
*/

console.log(`Name: ${hulk.name}`);

/*
    ! Propiedades de la clase
*/

console.log(`Saludar: ${hulk.saludar}`);

/*
    ! Propiedades heredadas. Ej: toString()
*/

console.log(`toString(): ${hulk.toString}`);

/*
    ! HasOwnProperty. Para saber si una propiedad le pertenece al objeto o es heredada
*/

console.log(`Has Own Property: ${hulk.hasOwnProperty('name')}`);
