function selectionSort(array) {
    for (let spliter = 0; spliter < array.length - 1; spliter++) {
        let smallestIndex = spliter;
        for (let i = spliter + 1; i < array.length; i++) {
            if (array[i] < array[smallestIndex]) {
                smallestIndex = i;
            }
        }
        const temp = array[spliter];
        array[spliter] = array[smallestIndex];
        array[smallestIndex] = temp;
    }

    return array;
}
