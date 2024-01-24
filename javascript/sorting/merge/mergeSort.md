# Merge Sort

Merge sort is an efficient, stable, and comparison-based sorting algorithm. Most commonly implemented with a divide-and-conquer approach, it divides the input array into halves, sorts each half, and then merges them back together. Merge sort is particularly effective for sorting large datasets and offers a consistent time complexity.

## Process of Merge Sort

1. **Divide the Array into Halves**:
   - Initially, the entire array is considered unsorted. The first step is to divide this array into two halves. This division continues recursively until each sub-array contains a single element or no elements, which by definition are sorted.

2. **Conquer: Sort Each Half**:
   - The sorting happens during the merge process. As the sub-arrays are already sorted (as they contain only one element), the merge operation effectively combines two sorted arrays into a single sorted array.
   
3. **Merge the Sorted Halves**:
   - The core of merge sort lies in the merging of two sorted sub-arrays. This is done by comparing the elements of each sub-array and placing the smaller (or larger, depending on the desired order) element into a new array. This process is repeated until all elements from both sub-arrays are merged.
   - During this process, it's essential to maintain the order of elements with equal values (stability).
   
4. **Repeat the Process for Each Sub-Array**:
   - The divide, conquer, and merge steps are recursively applied to each sub-array until the entire array is sorted.
   
5. **Efficiently Combine at Each Level**:
   - As the process continues, the size of each sorted sub-array increases, eventually leading to a fully sorted array when the final merge is done.
   
6. **Time Complexity**:
   - The time complexity of merge sort is O(n log n) in the worst, average, and best cases, making it more efficient than simple algorithms like insertion sort for large datasets. 
   
Merge sort is a classic example of divide-and-conquer strategy in computer science, providing an efficient way to sort data.

## Code Challenge Breakdown

**Pseudocode Provided**

```js
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

**JavaScript Solution**

```js
function mergeSort(arr) {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        mergeSort(left);
        mergeSort(right);
        merge(left, right, arr);
    }
}

function merge(left, right, arr) {
    let i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

```


### Method Explanation

The `mergeSort` function is a JavaScript implementation of the Merge Sort algorithm. This algorithm is a highly efficient, stable, divide-and-conquer sorting method. It consists of two main functions: `mergeSort` and `merge`. Here's a detailed breakdown of each function: 

#### Function: `mergeSort` 

This function is the main driver of the Merge Sort algorithm. 

1. **Base Condition**: Checks if the array length is greater than 1. If it's 1 or less, the array is already sorted, or empty, and no further action is taken. 

2. **Divide**: The array is split into two halves using the `mid` index. This step is where the divide-and-conquer strategy starts, breaking the problem into smaller, more manageable subproblems. 

3. **Recursive Sorting**: Both halves (`left`, and `right`) are sorted independently via recursive calls to the `mergeSort` function. 

4. **Merge**: Once the subarrays are sorted, the `merge` function is called to combine these sorted subarrays into a single sorted array. 

#### Function: `merge(left, right, arr)`

This function merges two sorted arrays into one. 

1. **Initialization**: Three pointers are initialized - `i` for traversing the `left` array, `j` for the `right` array, and `k` for the combined array `arr`. 

2. **Comparison and Merging**: The funciton interates through both `left` and `right` arrays. At each step, it compares the elements pointed by `i` and `j`, and places the smaller elements into `arr[k]`. The pointers (`i`, `j`, `k`) are incremented accordingly. 

3. **Remaining Elements**: After the main while loop, there might be remaining elements in either `left` or `right` (but not both). The subsequent while loops add these remaining elements to `arr`. 

### Visual Representation of Loops and Iterations  

Let's use the array `[3, 1, 4, 1, 5, 9, 2, 6]` to illustrate each step of the `mergeSort` and `merge` functions in detail. We'll track the values of the array s and the indices during each iteration. 

#### The Process Begins: First Call to `mergeSort(arr)`

1. **Initial Call**: 

    - We start by calling `mergeSort` on the entire array. 
    - At this point, `arr` is `[3, 1, 4, 1, 5, 9, 2, 6]`. 

```js
    mergeSort([3, 1, 4, 1, 5, 9, 2, 6])
```

2. **Dividing the Array**: 

    - The array is split into two halves: `[3, 1, 4, 1]` and `[5, 9, 2, 6]`. 
    - This is done by finding the middle index of the array. 

```js
    let mid = Math.floor(8 / 2); // 4
    let left = [3, 1, 4, 1];
    let right = [5, 9, 2, 6];
```

#### Working on the Left Half: `mergeSort([3, 1, 4, 1])`. 

1. **Further Division**: 

    - Now, we apply `mergeSort` on the `left` half: `[3, 1, 4, 1]`. 
    - This array is again split into `[3, 1]` and `[4, 1]`. 

```js
    mergeSort([3, 1, 4, 1]);
    // Splits into: 

    left = [3, 1];
    right = [4, 1];
```

2. **Sorting Subarrays**: 

    - We continue to split these arrays until they cannot be split further (i.ei., they have 1 or 0 elements). 
    - For `[3, 1]`, it splits into `[3]` and `[1]`. 
    - For `[4, 1]`, it splits into `[4]` and `[1]`. 

```js
// For left half [3, 1]. 
mergeSort([3, 1]); 
// splits into: 
left = [3]; // No further split as it's a single element. 
right = [1]; // No further split. 

// For right half [4, 1]. 
mergeSort([4, 1]);
// Splits into: 
left = [4]; // No further split. 
right = [1]; // No further split. 
```

3. **Merging the Smallest Pieces**: 
    - Now, we start merging these single-element arrays using `merge`. 
    - Merge `[3]` and `[1]` to get `[1, 3]`. 
    Merge `[4]` and `[1]` to get `[1, 4]`. 

```js
    merge([3], [1], left); // left becomes [1, 3]. 
    merge([4], [1], right); // right becomes [1, 4]
```

4. **Merging Back to Original `left`**: 
    - Now, we merge `[1, 3]` and `[1, 4]` to frm the sorted version of the original `left` half. 

```js
merge([1, 3], [1, 4], left); // left becomes [1, 1, 3, 4].
```

#### Paralell Process on the Right Half: `mergeSort([5, 9, 2, 6])`. 

1. **Applying the Same Logic to the Right Half**: 

    - Repeat steps 3 to 6 for the `right` half: `[5, 9, 2, 6]`.
    - The process is identical, resulting in the sorted right half. 

```js
mergeSort([5, 9, 2, 6]);
// After the same process, right becomes [2, 5, 6, 9].
```

#### Final Merge: Combining left and right

1. **Final Merging Step**: 

    - We have two sorted halves: `[1, 1, 3, 4]` (left) and `[2, 5, 6, 9]` (right).
    - The final step is to merge these halves back iinto the original `arr`. 

```js
merge([1, 1, 3, 4], [2, 5, 6, 9], arr); // arr becomes [1, 1, 2, 3, 4, 5, 6, 9]. 
```

#### Conclusion: Sorted Array

- At the end of this process, `arr` is completely sorted: `[1, 1, 2, 3, 4, 5, 6, 9]`. 

- Throughout this process, `mergeSort` and `merge` work together: `mergeSort` breaks down the problem into manageable pieces, and `merge` combines these pieces back togetheri n a sorted manner. 

This explanation illustrates how Merge Sort uses recursion and merging to sort an array, detailing the state of all variables and arrays at each step. 


### Testing  
 
 To ensure the reliability and correctness of the `mergeSort` function, we can run a series of tests with different types of arrays. These tests include typical cases, edge cases, and special scenarios to verify that the algorithm works as expected in various situations. Here are some test cases: 

 1. **Empty Array**: This tests how the function handles an array with no elements. 

 ```js
 console.log(mergeSort([])); // Should return []
 ```

 2. **Single Element**: Checks the function's behavior with an array containing only one element. 

 ```js
 console.log(mergeSort([7])); // Should return [7].
 ```

 3. **Array with Identical Elements**: This tests if the function can handle an array where all elements are the same. 

 ```js
console.log(mergeSort([2, 2, 2, 2])); // Should return [2, 2, 2, 2].
 ```

 4. **Sorted Array**: Tests the function with an already sorted array. 

 ```js
 console.log(mergeSort([1, 2, 3, 4])); // Should return [1, 2, 3, 4].
 ```

 5. **Reverse Sorted Array**: Helps in checking if the function can handle an array sorted in descending order. 

 ```js
 console.log(mergeSort([9, 7, 5, 3, 1])); // Should return [1, 3, 5, 7, 9]. 
 ```

 6. **Random Unsorted Array**: The most common test case to check if the function sorts correctly. 

 ```js
 console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])); // Should return [1, 1, 2, 3, 4, 5, 6, 9]

 ```

 7. **Large Array**: Tests the function's efficiency and performance with a large number of elements. 
 ```js
 // Generating a large array with random numbers
let largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
console.log(mergeSort(largeArray)); // Should return a sorted version of largeArray

 ```
