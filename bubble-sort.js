function bubbleSort(array) {
    let swappHappened = false;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j <= array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swappHappened = true;
                const temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
        if (!swappHappened) {
            return array;
        }
    }

    return array;
}
