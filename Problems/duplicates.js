// **Finding Duplicates in an Array**

const array = [1, 2, 3, 4, 2, 5, 2, 3, 6, 4, 6];

// **1. Using `filter` and `indexOf`**
const duplicatesFilter = array.filter((ele, index, arr) => 
    arr.indexOf(ele) !== index // Check if the current element's first occurrence is not its current index
);
console.log(duplicatesFilter); // Output: [2, 2, 3, 4, 6]

// Time Complexity: O(n²) - `indexOf` inside `filter` causes nested iteration
// Space Complexity: O(n) - For the `duplicatesFilter` array

// **2. Using a `Map` (or Object)**
const map = {};
let duplicatesMap = [];
for (let num of array) {
    if (map[num] && !duplicatesMap.includes(num)) {
        duplicatesMap.push(num); // Add the number to duplicates if it's already in the map
    } else {
        map[num] = true; // Mark the number as seen
    }
}
console.log(duplicatesMap); // Output: [2, 3, 4, 6]

// Time Complexity: O(n) - Iterates through the array once
// Space Complexity: O(n) - For the `map` object and `duplicatesMap` array

// **3. Using a `Set`**
const elementsSet = new Set(); // To track seen elements
const duplicatesSet = [];
for (let num of array) {
    if (elementsSet.has(num)) {
        duplicatesSet.push(num); // Add to duplicates if already in the set
    } else {
        elementsSet.add(num); // Otherwise, add the number to the set
    }
}
console.log(duplicatesSet); // Output: [2, 3, 4, 6]

// Time Complexity: O(n) - Single pass through the array
// Space Complexity: O(n) - For the `Set` and `duplicatesSet` array
