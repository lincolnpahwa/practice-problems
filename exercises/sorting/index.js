// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort



function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		
		for (let j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				const lesser = arr[j+1];
				arr[j + 1] = arr[j];
				arr[j] = lesser
			}
		}

	};

	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		let minValue = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}

		if (i !== indexOfMin) {
			const lesser = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = lesser;
		}

	};

	return arr;
}

function mergeSort(arr) {

	if (arr.length > 1) {
		let mid = Math.floor(arr.length / 2);

		let left = arr.slice(0, mid);

		let right = arr.slice(mid);

		left = mergeSort(left);

		right = mergeSort(right);

		arr = merge(left, right);
	}

	return arr;

}

function merge(left, right) {

	let merged = [];

	while (left.length || right.length) {
		if (left[0] === undefined) {
			merged.push(...right);
			break;
		}

		if (right[0] === undefined) {
			merged.push(...left);
			break;
		}

		if (left[0] < right[0]) {
			merged.push(left.shift());
		} else {
			merged.push(right.shift());
		}
	}

	return merged;

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
