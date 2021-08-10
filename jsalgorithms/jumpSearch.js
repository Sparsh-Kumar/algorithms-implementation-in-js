

const jumpSearch = (arr, element = undefined, start, blockSize, diff) => {

	if (!arr.length || !element) {
		return -1;
	} else {
		if (arr [start] === element) {
			return {
				index: start,
				value: arr [start]
			}
		} else if (arr [blockSize] === element) {
			return {
				index: blockSize,
				value: arr [blockSize]
			}
		} else if ((element > arr [start]) && (element < arr [blockSize])) {
			let result = -1;
			for (let i = start + 1;i <= blockSize - 1; i++) {
				if (arr [i] === element) {
					result = i;
					break;
				}
			}
			return result; 
		} else {
			start = blockSize;
			blockSize = blockSize + diff <= arr.length - 1 ? blockSize + diff: arr.length - 1;
			return jumpSearch (arr, element, start, blockSize, diff);
		}
	}

}

const main = () => {
	let arr = [12, 23, 45, 56, 75, 89, 101, 125];
	let blockSize = Math.floor (Math.sqrt (arr.length));
	console.log (jumpSearch (arr, 56, 0, blockSize, blockSize));
}

main ();