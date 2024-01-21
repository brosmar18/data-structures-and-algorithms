# Merge Sort
Merge Sort is a divide and conquer algorithm that divides the input array into two halves, sorts the halves, and then merges them back together. It is known for its efficiency in sorting large data sets.

## Article
[Merge Sort In-Depth Breakdown](./mergeSort.md)

## Whiteboard Process
![Whiteboard](../../assets/mergeSortWhiteboard.png)


## Approach & Efficiency

### Approach 

Merge Sort employs a divide and conquer strategy: 

1. **Divide**: The array is split into two halves until each sub-array contains a single element or is empty. 

2. **Conquer**: Each half is sorted recursively. 

3. **Combine**: The sorted sub-arrays are merged to produce a new sorted array. 

This approach ensures that each element is only part of a smaller, more manageable array during sorting, making the process efficient even for large datasets. 


### Efficiency 

- **Time Complexity**: O(n log n). The array is repeatedly divided in half (log n steps), and in each step, a linear amount of work (n) is done to merge the sub-arrays. 

- **Space Complexity**: O(n). Additional space is required for the tempoorary arrays used during the merging process, which grows linearly with the size of the input array. 

## Solution

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

// Example usage
const array = [12, 11, 13, 5, 6, 7];
mergeSort(array);
console.log("Sorted array is: ", array);

  
