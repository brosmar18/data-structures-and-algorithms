# Insertion Sort

Insertion sort is a simple and intuitive sorting algorithm. It is especially effective for small datasets or partially sorted arrays. The core idea of *Insertion Sort* resembles the way you might sort playing cards in your hands.

## Process of Insertion Sort 

1. **Divide Array into Sorted and Unsorted Sections**:
- Initially, the array is divided into two sections: The first element is considered sorted, and the rest of the array is unsorted.

2. **Select an Element from the Unsorted Section**:
- The algorithm iteratively selects the first element from the unsorted section.

3. **Find the Correct Position in the Sorted Section**:
- This element is then inserted into the correct position in the sorted section.  
- The correct position is found by comparing the selected element with each element in the sorted section, moving from right to left.

4. **Shift Elements to Make Room**:
- If the selected element is smaller (in the case of ascending order) than the compared element in the sorted section, the compared element is shifted to the right.  
- This process continues until the correct position is found.

5. **Insert the Element**:  
- Once the position is found, the selected element is placed in its correct position.

6. **Repeat Until Sorted**:
- This process is repeated for each element in the unsorted selection until the entire array is sorted.

## Code Challenge Breakdown

**Pseudocode Provided**

```js
Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value 
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input) 
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted
```

**JavaScript Solution**

```js
function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++; 
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);  
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0]; 
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;  
}
```

The provided code is an implementation of the Insertion Sort algorithm in JavaScript, consisting of two functions: `insert` and `insertionSort`. Let's break down each function and understand how they work together to sort an array.

---

**Function**: `insert(sorted, value)`  

This function inserts a given value into an already sorted array.

1. **Initial Index (i = 0)**: It starts with an index of `i` set to `0`.

2. **Finding the Insertion Point**: The first `while` loop increments `i` until it finds the position where the `value` should be inserted (i.e., the first element in the `sorted` which is greater than `value`).

3. **Shifting Elements**: The second `while` loop shifts elements in the `sorted` array to the right to make space for the `value`.
   - A temporary variable `temp` is used to swap values and facilitate this shifting.
   
4. **Inserting the Value**: After the loop, the `value` is appended to the `sorted` array.

---

**Function**: `insertionSort(input)`

This function sorts an array using the Insertion Sort algorithm.

1. **Initialization**: It initializes an array `sorted` and places the first element of `input` into it.

2. **Sorting the Rest of the Array**: For each subsequent element in `input`, it calls the `insert` function to insert the element into the correct position in the `sorted` array.

3. **Return Sorted Array**: Finally, it returns the sorted array. 

### Method Explanation

- **Insertion Sort Logic**: It sorts an array by repeatedly taking an element and inserting it into the correct position in a sorted part of the array.

- **While Loops**: These are used for iterating until a certain condition is met. They're ideal in scenarios where the number of iterations isn't known beforehand.

### Implementation

The code has clear separation of concerns:

- `insert` handles the insertion of a single element into a sorted array.  
- `insertionSort` manages the overall sorting process, using `insert` for each element.

### Visual Representation of Loops and Iterations  

Let's illustrate the process using the example array `[8, 4, 23, 42, 16, 15]`:

**Initial State**  

- `input`: `[8, 4, 23, 42, 16, 15]`.
- `sorted`: `[]` (initially empty) 

**Iteration 1: Inserting `8`**  

- `sorted` before: `[]`.
- `sorted` after: `[8]`.  
- This is the initialization step, where the first element of `input` is placed into `sorted`.

**Iteration 2: Inserting `4`**  

- `sorted` before: `[8]`.  
- `insert` function is called with `insert([8], 4)`  
- inside `insert`:
    - Start with `i = 0`.
    - First `while` loop: `4 > sorted[0]` is `false`, so the loop ends immediately.
    - Second `while` loop does not execute because `i < sorted.length` is `false`.
    - `sorted.push(4)` makes `sorted = [8, 4]`.
- After the `insert` function, we have the sorted array, so `sorted` becomes `[4, 8]`.

**Iteration 3: Inserting `23`**  

- `sorted` before: `[4, 8]`.
- `insert` function is called with `insert([4, 8], 23)`.
- Inside `insert`:
    - Start with `i = 0`.
    - First `while` loop: `23 > sorted[0]` is `true`, so `i++` (now `i = 1`).
    - Continue first `while` loop: `23 > sorted[1]` is `true`, so `i++` (now `i = 2`).
    - Second `while` loop does not execute because `i < sorted.length` is `false`. 
    - `sorted.push(23)` makes `sorted = [4, 8, 23]`.
- After the `insert` function, `sorted` remains `[4, 8, 23]`.

**Iteration 4: Inserting `42`**  

- `sorted` before: `[4, 8, 23]`.  
- `insert` function is called with `insert([4, 8, 23], 42)`
- Inside `insert`:
    - Similar to the previous step, `42` is greater than all elements, so `i` becomes `3`.
    - `sorted.push(42)` makes `sorted = [4, 8, 23, 42]`.

**Iteration 5: Inserting `16`**  

- `sorted` before: `[4, 8, 23, 42]`.
- `insert` function is called with `insert([4, 8, 23, 42], 16)`.  
- Inside `insert`:
    - `16` is greater than `4`, `8`, but less than `23`. So `i` will increment twice and stop at `2`.
    - The second `while` loop starts. It shifts `23` to the right, making room for `16`.
    - `sorted` becomes `[4, 8, 16, 23, 42]` after the loop.

**Iteration 6: Inserting `15`**  

- `sorted` before: `[4, 8, 16, 23, 42]`. 
- `insert` function is called with `insert([4, 8, 16, 23, 42], 15)`.
- Inside `insert`:
    - `15` is greater than `4`, and `8`, but less than `16`. `i` will increment twice and stop at `2`.
    - The second `while` loop starts. It shifts `16`, `23`, and `42` to the right and places `15` at index `2`.
    - `sorted` becomes `[4, 8, 15, 16, 23, 42]` after the `insert` function.

**Final State After Iteration 6**  

- `sorted` = `[4, 8, 15, 16, 23, 42]`.  
- The original `input` array is now fully sorted in `sorted`.

Through each iteration, we see how Insertion Sort builds up a sorted array element by element, inserting each new item into its appropriate place in the already-sorted portion of the array.

### Testing  

You can test the function with various arrays, including edge cases like an empty array or an array with all identical elements. 

```js
console.log(insertionSort([])); // Should return []
console.log(insertionSort([1, 1, 1])); // Should return [1, 1, 1]
console.log(insertionSort([5, 3, 8, 2, 9])); // Should return [2, 3, 5, 8, 9]

```