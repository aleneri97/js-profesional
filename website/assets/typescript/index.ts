import {Interface} from 'node:readline';

let muted: boolean = true;
muted = false;

let age = 6;
let numerador: number = 42;
let denominador: number = age;
let result: number = numerador / denominador;

let nombre: string = 'Ale';
let saludo: string = `Hola, ${nombre}`;

let people: string[] = [];
people = ['Ale', 'Mario'];
// people.push(9000)

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ale');
peopleAndNumbers.push(900);

enum Color {
	Rojo = 'rojo',
	Verde = 'verde',
	Azul = 'azul',
}
let colorFavorito: Color = Color.Rojo;
console.log('Mi color favorito es ' + colorFavorito);

let comodin: any = 'Joker';
comodin = {
	type: 'Wildcard',
};

let someObject: object = {
	type: 'Wildcard',
};

function add(a: number, b: number): number {
	return a + b;
}

function addFun(a: number): (number) => number {
	return function (b: number) {
		return a + b;
	};
}

function fullName(name: string, lastName?: string) {
	return `${name}  ${lastName || 'Neri'}`;
}
console.log(fullName('Manuel'));

function fullNameDefault(name: string, lastName: string = 'Neri') {
	return `${name}  ${lastName}`;
}
function extra() {
	return 1;
}

interface Rectangulo {
	ancho: number;
	alto: number;
	color?: Color;
}

let rect: Rectangulo = {
	ancho: 4,
	alto: 6,
	// color: Color.Rojo,
};

function area(r: Rectangulo) {
	return r.ancho * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

rect.toString = function () {
	return this.color
		? `un rectangulo ${this.color}`
		: `Un rectángulo sin color`;
};

console.log(rect.toString());
