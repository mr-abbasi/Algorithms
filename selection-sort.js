function selectionSort(array) {
    for (let splitter = 0; splitter < array.length - 1; splitter++) {
        let smallestIndex = splitter;
        for (let i = splitter + 1; i < array.length; i++) {
            if (array[i] < array[smallestIndex]) {
                smallestIndex = i;
            }
        }
        if (smallestIndex != splitter) {
            const temp = array[smallestIndex];
            array[smallestIndex] = array[splitter];
            array[splitter] = temp;
        }
    }

    return array;
}
