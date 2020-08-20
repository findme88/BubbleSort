const sorted = bubbleSort(
	Array(1000).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000)
)

console.log(sorted)

function bubbleSort (array) {
	for (let n = 0; n < array.length; n++) {
		for (let i = 0; i < array.length - 1 - n; i++) {
			if (array[i] > array[i + 1]) {
				const buff = array[i]
				array[i] = array[i + 1]
				array[i + 1] = buff
			}
		}
	}

	return array
}