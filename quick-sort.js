function quickSort(array) {
    const swap = function (ix1, ix2) {
        const temp = array[ix2];
        array[ix2] = array[ix1];
        array[ix1] = temp;
    }

    const pivot = array.length - 1;
    if (pivot <= 0) {
        return array;
    }
    let wall = 0;
    for (let i = 0; i < pivot; i++) {
        if (array[i] < array[pivot]) {
            swap(wall, i);
            wall++;
        }
    }
    swap(wall, pivot);

    const leftArray = array.slice(0, wall);
    const middleArray = Array.of(array[wall]);
    const rightArray = array.slice(wall + 1);

    return quickSort(leftArray).concat(middleArray).concat(quickSort(rightArray));
}
