module.exports = function check(str, bracketsConfig) {
  	let container = [];
	let openBrackets = [];
	let closeBrackets = [];
	let objectBrackets = {};
	// console.log (str);
	// console.log (bracketsConfig);

	for(let elem of bracketsConfig) {
		openBrackets.push(elem[0]);
		closeBrackets.push(elem[1]);
		objectBrackets[elem[1]] = elem [0];
	}

	for (let i = 0; i < str.length; i++) {
		if (container[container.length - 1] === objectBrackets[str[i]] && container.length > 0) {
			container.pop()
			console.log (`Удалили скобку "${str[i]}"`);
			console.log (container);
		} else if (openBrackets.includes(str[i])) {
			container.push(str[i]);
			console.log (`Добавили скобку "${str[i]}"`);
			console.log (container);
		} else if (closeBrackets.includes(str[i])) {
			console.log (`Скобка "${str[i]}" не совпадает с последней в стеке`);
			console.log (container);
			return false;
		} else if (container.length === 0) {
			console.log (`Скобка "${str[i]}" закрывающая, контейнер пуст`);
			console.log (container);
			return false; 
		}
	}

	if (container.length !== 0) {
		console.log('footer: (container.length) > 0 ==> false');
		console.log(container);
		return false;
	} else {
		console.log('footer: (container.length) = 0 ==> true');
		console.log(container);
		return true;
	}
}

// console.log (check('|((({{{||}}}))||)|', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]))
