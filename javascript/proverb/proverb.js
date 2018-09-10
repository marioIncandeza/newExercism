function proverb(input) {
	let args = [].slice.call(arguments);
	let qualifier = false;
	if (args[args.length-1].qualifier) {
		qualifier = true;
		var adjective = args[args.length - 1].qualifier;
		args.pop();
	}
	let output = '';
	for (let c = 0; c < args.length - 1; c++) {
		output += `For want of a ${args[c]} the ${args[c + 1]} was lost.\n`;
	}
	output += `And all for the want of a ${qualifier ? adjective + ' ' : ''}${args[0]}.`;
	return output;
}

export default proverb;