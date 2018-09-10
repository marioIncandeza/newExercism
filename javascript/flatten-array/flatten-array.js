class Flattener {

	flatten(input) {
		let output = [];
		poundCake(output, input);
		return output;
	}

}

function poundCake(flat, arr) {
	arr = arr.filter(el => el !== undefined);
	arr = arr.filter(el => el !== null);
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			poundCake(flat, arr[i]);
		} else{
			flat.push(arr[i]);
		}
	}
}

export default Flattener;