function arrayDiff(a, b) {
    let newArr;

    newArr = a.filter( (e) => b.lastIndexOf(e) === -1)

    return newArr;

}

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript