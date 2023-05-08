class Console {
	constructor() {
		this.elem = null;
		this.output = null;
		this.input = null;
		this.text = '';
	}

	render() {
		this.elem = document.createElement('div');
		document.querySelector('body').appendChild(this.elem)
		//this.elem.style.display='none';
		this.output = document.createElement('pre');
		this.input = document.createElement('input');
		this.input.style.borderWidth = '0px';

		this.elem.appendChild(this.output)
		this.elem.appendChild(this.input)
	}

	init() {
		document.addEventListener('keydown', (e) => {
			if (e.code == 'Backquote') {
				this.switchViewing()
				e.preventDefault();
			}
			if (e.code == 'Enter') {
				const result = eval(this.input.value);
				this.printLn(result)
				this.input.value = '';
			}
		} )
		this.render();
		this.printLn('Hello world!')
		this.printLn('Hello world!')
		this.printLn('Hello world!')
	}

	switchViewing() {
		console.log('this.switchViewing')
		this.elem.style.display = (this.elem.style.display=='block')?'none':'block';
		this.input.focus()
	}

	printLn(str) {
		this.text += str + '\n';
		this.output.innerText = this.text ;
	}

}

export default Console;