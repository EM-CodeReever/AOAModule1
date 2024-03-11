"use strict";
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left child
    const right = 2 * i + 2; // right child
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    // If largest is not root
    if (largest !== i) {
        // Swap arr[i] and arr[largest]
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}
function heapSort(arr) {
    const n = arr.length;
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        }
        else {
            merged.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }
    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }
    return merged;
}
function measureSortRuntime(sortFn, arr) {
    const start = Date.now();
    sortFn(arr);
    const end = Date.now();
    return end - start;
}
const array10k = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
const array50k = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 50000));
const array100k = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));
console.log('Array size: 10k');
console.log('Quick sort:', measureSortRuntime(quickSort, array10k), 'ms');
console.log('Selection sort:', measureSortRuntime(selectionSort, array10k), 'ms');
console.log('Heap sort:', measureSortRuntime(heapSort, array10k), 'ms');
console.log('Merge sort:', measureSortRuntime(mergeSort, array10k), 'ms');
console.log('Insertion sort:', measureSortRuntime(insertionSort, array10k), 'ms');
console.log('Bubble sort:', measureSortRuntime(bubbleSort, array10k), 'ms');
console.log("\n\n");
console.log('Array size: 50k');
console.log('Quick sort:', measureSortRuntime(quickSort, array50k), 'ms');
console.log('Selection sort:', measureSortRuntime(selectionSort, array50k), 'ms');
console.log('Heap sort:', measureSortRuntime(heapSort, array50k), 'ms');
console.log('Merge sort:', measureSortRuntime(mergeSort, array50k), 'ms');
console.log('Insertion sort:', measureSortRuntime(insertionSort, array50k), 'ms');
console.log('Bubble sort:', measureSortRuntime(bubbleSort, array50k), 'ms');
console.log("\n\n");
console.log('Array size: 100k');
console.log('Quick sort:', measureSortRuntime(quickSort, array100k), 'ms');
console.log('Selection sort:', measureSortRuntime(selectionSort, array100k), 'ms');
console.log('Heap sort:', measureSortRuntime(heapSort, array100k), 'ms');
console.log('Merge sort:', measureSortRuntime(mergeSort, array100k), 'ms');
console.log('Insertion sort:', measureSortRuntime(insertionSort, array100k), 'ms');
console.log('Bubble sort:', measureSortRuntime(bubbleSort, array100k), 'ms');
