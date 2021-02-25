const forVar = () => {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
};

forVar();

const timeoutExplanation = () => {
	console.log('1');
	setTimeout(() => {
		console.log('2');
	}, 1);
	for (let i = 0; i < 10000; i++) {}
	console.log('3');
};

timeoutExplanation();

const forVarTimeout = () => {
	for (var i = 0; i < 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1);
	}
};

forVarTimeout();

const forVarFunction = () => {
	for (var i = 0; i < 10; i++) {
		function printLoopVar(j) {
			setTimeout(() => {
				console.log(j);
			}, 1);
		}
		printLoopVar(i);
	}
};

forVarFunction();
