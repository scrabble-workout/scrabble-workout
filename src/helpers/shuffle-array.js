const shuffleArray = (arr) => {
    const newArr = arr;
    let currIndex = arr.length;
    let tempValue;
    let randomIndex;

    while (currIndex) {
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;

        tempValue = newArr[currIndex];
        newArr[currIndex] = newArr[randomIndex];
        newArr[randomIndex] = tempValue;
    }

    return newArr;
};

export { shuffleArray };
