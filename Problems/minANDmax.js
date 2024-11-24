// Sample Array
const arr = [2, 5, 7, 33, 53, 0, 56, 224, 32];

// Function to find the maximum value in the array using the reduce method
const maxValue = (arr) => {
    // Using reduce to iterate through the array
    // prev: the accumulated value (initially the first element), curr: the current element
    // The ternary operator compares prev and curr, keeping the larger value
    return arr.reduce((prev, curr) => prev > curr ? prev : curr);
}

// Function to find the minimum value in the array using the reduce method
const minValue = (arr) => {
    // Using reduce to iterate through the array
    // prev: the accumulated value (initially the first element), curr: the current element
    // The ternary operator compares prev and curr, keeping the smaller value
    return arr.reduce((prev, curr) => prev < curr ? prev : curr);
}

// Calling the minValue function and logging the result
// console.log(minValue(arr));  // Output: 0 (the minimum value in the array)

// Another Array for demonstration
const array = [1, 2, 3, 4, 5, 6];

// Initialize max and min to the first element of the array
let max = array[0];
let min = array[0];

// Iterate through the array from the second element to the end
for (let i = 1; i < array.length; i++) {
    // Update max if the current element is greater
    if (array[i] > max) {
        max = array[i]; 
    }
    // Update min if the current element is smaller
    if (array[i] < min) {
        min = array[i]; 
    }
}

// Log the final max and min values
// console.log(`Max: ${max}, Min: ${min}`);  // Output: Max: 6, Min: 1


// ------------------- Time and Space Complexity -------------------

// **Using reduce() method:**
// Time Complexity: O(n), where n is the number of elements in the array.
// - The reduce method iterates through the entire array once to find the max or min.
// Space Complexity: O(1)
// - Only constant space is used as no additional data structures are created, just the variables prev and curr are used for comparison.


// **Manual Loop:**
// Time Complexity: O(n), where n is the number of elements in the array.
// - The loop iterates through each element in the array once to compare with max and min.
// Space Complexity: O(1)
// - Constant space is used to store the max and min values, no extra space for data structures.




// Function to find the second largest element
let maxEle = -Infinity;  // Initialize the largest element as negative infinity
let secondLargest = -Infinity;  // Initialize the second largest element as negative infinity

// Loop through the array
for (let i = 0; i < arr.length; i++) {
    // If the current element is greater than maxEle, it becomes the largest element
    if (arr[i] > maxEle) {
        secondLargest = maxEle;  // The old largest element becomes the second largest
        maxEle = arr[i];  // Update maxEle to the current element
    }
    // If the current element is less than maxEle but greater than secondLargest, it becomes the second largest
    else if (arr[i] < maxEle && arr[i] > secondLargest) {
        secondLargest = arr[i];  // Update secondLargest
    }
}

console.log(secondLargest);  // Output the second largest element

// Time Complexity:
// - **O(n)**: We only loop through the array once, where 'n' is the length of the array.

// Space Complexity:
// - **O(1)**: We are only using a constant amount of extra space (maxEle and secondLargest), no extra data structures are used.
