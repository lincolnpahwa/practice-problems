// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
	if (max !== null && node.data > max) {
		return false;
	}

	if (min !== null && node.data < min ) {
		return false;
	}
	
	let { left, right, data } = node;
	if (left) {
		return validate(left, min, data);
	} 

	if (right) {
		return  validate(right, data, max);
	} 
	return true;

}

module.exports = validate;
