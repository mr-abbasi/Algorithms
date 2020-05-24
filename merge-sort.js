function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        const middle = Math.floor(array.length / 2);
        const leftArray = array.slice(0, middle);
        const rightArray = array.slice(middle);

        return merge(mergeSort(leftArray), mergeSort(rightArray));
    }
}

function merge(leftArray, rightArray) {
    let resultArray = [], leftPointer = 0, rightPointer = 0;

    
    while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if (leftArray[leftPointer] < rightArray[rightPointer]) {
            resultArray.push(leftArray[leftPointer]);
            leftPointer++;
        }
        else {
            resultArray.push(rightArray[rightPointer]);
            rightPointer++;
        }
    }

    return resultArray.concat(leftArray.slice(leftPointer)).concat(rightArray.slice(rightPointer));
}
