class Field {
	errors: string[];
	input: HTMLInputElement;

	constructor(input: HTMLInputElement) {
		this.input = input;
		this.errors = [];

		// Creamos una etiqueta para errores, le asignamos estilos y lo posicionamos antes del input correspondiente
		let errorMessage = document.createElement('p');
		errorMessage.className = 'text-danger';
		this.input.parentNode.insertBefore(
			errorMessage,
			this.input.nextSibling
		);

		// Cada vez que cambie el valor del input, vaciará el arreglo de errores, ejecutará la función de validación y mostrará el primer error del arreglo en la etiqueta que creamos previamente
		this.input.addEventListener('input', () => {
			this.errors = [];
			this.validate();
			errorMessage.innerText = this.errors[0] || '';
		});
	}

	// función genérica que representa a las validación pre existentes de una clase
	validate() {}
}

/**
 * @description Esta función agrega una validación a la clase Field
 * @author ale_neri97
 * @date 2021-03-19
 * @param {Field} field
 * @returns {Field}
 */
function RequiredFieldDecorator(field: Field): Field {
	// Primero guardaremos la validación original
	let validate = field.validate;

	// Agregamos una nueva validación que ejecutará la validación original y la nueva
	field.validate = function () {
		validate();
		// Obtendremos el valor del input, si no tiene nada, empujaremos un nuevo error
		let value = field.input.value;
		if (!value) {
			field.errors.push('Requerido');
		}
	};

	// Regresamos la misma instancia con una nueva validación agregada a la misma función validate()
	return field;
}

function EmailFieldDecorator(field: Field): Field {
	let validate = field.validate;

	field.validate = function () {
		validate();
		// Obtenemos el valor del input, si no tiene en algún lugar el arroba, empujaremos un nuevo error
		let value = field.input.value;
		if (value.indexOf('@') === -1) {
			field.errors.push('Debe ser un email');
		}
	};

	return field;
}

let field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);
