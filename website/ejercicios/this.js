// Scope Global
console.log(`Global Scope THIS: ${this}`);

// Function Scope
function whoIsThis() {
	return this;
}

console.log(`Function Scope THIS: ${whoIsThis()}`);

// Function Scope (Strict Mode)
function whoIsThisStrict() {
	'use strict';
	return this;
}

console.log(`Function Scope THIS (strict mode): ${whoIsThisStrict()}`);

// Object Scope
const person = {
	name: 'John',
	saludar: function () {
		console.log(`Hola soy ${this}`);
	},
};

person.saludar();

//
const accion = person.saludar;
accion();

// Class Scope
function Person(name) {
	this.name = name;
}

Person.prototype.saludar = function () {
	console.log(`Me llamo ${this.name}`);
};

const angela = new Person('Angela');
angela.saludar();
