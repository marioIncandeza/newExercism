class InputCell {

	constructor(val) {
		this.value = val;
		this.listeners = [];
	}

	setValue(val) {
		this.value = val;
		for (let compute of this.listeners) {
			compute.update();
		}
	}

	addListener(cell) {
		this.listeners.push(cell);
	}

}

class ComputeCell {

	constructor(cells, fn) {
		this.cells = cells;
		this.fn = fn;
		this.listeners = [];
		this.callbacks = [];
		this.value = fn(cells);
		for (var inp of cells) {
			inp.addListener(this);
		}
	}

	update() {
		let oldValue = this.value;
		this.value = this.fn(this.cells);
		for (let compute of this.listeners) {
			compute.update();
		}
		if (oldValue !== this.value) {
			for (let cb of this.callbacks) {
				cb.update(this);
			}
		}
		
	}

	addListener(cell) {
		this.listeners.push(cell);
	}

	addCallback(callback) {
		this.callbacks.push(callback);
		//callback.update(this);
	}

	removeCallback(callback) {
		let pos = this.callbacks.indexOf(callback);
		if (pos !== -1) {
			this.callbacks.splice(pos, 1);
		}
	}

}

class CallbackCell {

	constructor(fn) {
		this.values = [];
		this.fn = fn;
	}

	update(arg) {
		this.values.push(this.fn(arg));
	}

}

export {InputCell, ComputeCell, CallbackCell};