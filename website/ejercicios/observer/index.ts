interface Observer {
	update: (data: any) => void;
}

interface Subject {
	subscribe: (observer: Observer) => void;
	unsubscribe: (observer: Observer) => void;
}

/**
 * @description Esta clase representa al sujeto que cambiará el precio al que los demás quieren acceder.
 * @author ale_neri97
 * @date 2021-03-19
 * @class BitcoinPrice
 * @implements {Subject}
 */
class BitcoinPrice implements Subject {
	observers: Observer[] = [];

	constructor() {
		// Creamos una constante el que será la etiqueta input
		const el: HTMLInputElement = document.querySelector('#value');
		//  Le asignamos un EventListener que se ejecutará cada vez que haya un cambio en el input, pasando el nuevo dato.
		el.addEventListener('input', () => {
			this.notify(el.value);
		});
	}

	/**
	 * @description Esta función agregará a un observador al arreglo de observadores
	 * @author ale_neri97
	 * @date 2021-03-19
	 * @param {Observer} observer
	 * @memberof BitcoinPrice
	 */
	subscribe(observer: Observer) {
		this.observers.push(observer);
	}

	/**
	 * @description Esta función elimina del arreglo de observadores al observador indicado
	 * @author ale_neri97
	 * @date 2021-03-19
	 * @param {Observer} observer
	 * @memberof BitcoinPrice
	 */
	unsubscribe(observer: Observer) {
		const index = this.observers.findIndex((obs) => {
			return obs === observer;
		});

		this.observers.splice(index, 1);
	}

	/**
	 * @description Esta función ejecuta la función update() de todos los observadores con el valor que recibe como parámetro
	 * @author ale_neri97
	 * @date 2021-03-19
	 * @param {*} data
	 * @memberof BitcoinPrice
	 */
	notify(data: any) {
		this.observers.forEach((observer) => observer.update(data));
	}
}

/**
 * @description Esta clase representa a los observadores que están interesados en escuchar los cambios.
 * @author ale_neri97
 * @date 2021-03-19
 * @class PriceDisplay
 * @implements {Observer}
 */
class PriceDisplay implements Observer {
	private el: HTMLElement;
	constructor() {
		// definimos que la variable el será la etiqueta de texto #price
		this.el = document.querySelector('#price');
	}

	/**
	 * @description Esta función cambia el valor del texto de la etiqueta con el valor que recibe como parámetro
	 * @author ale_neri97
	 * @date 2021-03-19
	 * @param {*} data
	 * @memberof PriceDisplay
	 */
	update(data: any) {
		this.el.innerText = data;
	}
}

// Creamos un sujeto
const value = new BitcoinPrice();
//  Creamos un observador
const display = new PriceDisplay();

// Agregamos a Display a la lista de suscriptores
value.subscribe(display);

// Ejecutamos un timeout de 5 segundos que cuando acabe, quitará de la lista de suscriptores a display
setTimeout(() => {
	value.unsubscribe(display);
}, 5000);
