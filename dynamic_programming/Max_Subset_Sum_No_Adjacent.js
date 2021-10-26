//Approach 1
// time complexity will be here O(n)
// space complexity will be  O(n)
//Question: Max subset sum of no adjacent number
function maxSubsetSumNoAdjecent(array) {
	if (array.length === 0) return 0;
	//incase of only one element in the list
	if (array.length === 1) return array[0];
	//incase of only two items in the list
	if (array.length === 2) return Math.max(array[0], array[1]);

	// if more than three we iterate over list and try to replace current value with previous max value
	// 1 step is to create an array of whihc can be a copy of given list
	let maxSumArray = array.slice();
	maxSumArray[1] = Math.max(array[0], array[1]); // because we wanted to replace value at every node with maximum value prior to that

	for (let i = 2; i < array.length; i++) {
		//formula here, this will replace current index value with max sum so far
		maxSumArray[i] = Math.max(
			maxSumArray[i - 1],
			maxSumArray[i - 2] + array[i]
		);
	}
	return maxSumArray[maxSumArray.length - 1];
}

// Now to improve the performace of this algorithim. In sorty to do it in O(n) time complexity and O(1) space complexity

// if we see above solution, we need maxSumArray last two index value [i-1] and [i-2] so idea here is to take two variable whose value can be swaped after every iteration
// no wto improve this algorithim below
// two new variable will take place
// first: array[0]
// second : Math.max(first, array[1]);
// Now we iterate list from index 2 and compare and hold max value in a temporaray value
//temp = Math.max(second, first+array[i])
//

function maxSubsetSumNoAdjecent(array) {
	if (array.length === 0) return 0;
	//incase of only one element in the list
	if (array.length === 1) return array[0];
	//incase of only two items in the list
	if (array.length === 2) return Math.max(array[0], array[1]);

	// if more than three we iterate over list and try to replace current value with previous max value
	// 1 step is to create an array of whihc can be a copy of given list
	let first = array[0];
	let second = Math.max(array[0], array[1]); // because we wanted to replace value at every node with maximum value prior to that

	for (let i = 2; i < array.length; i++) {
		//formula here, this will replace current index value with max sum so far
		let temp = Math.max(second, first + array[i]);
		first = second;
		second = temp;
	}
	return second;
}
