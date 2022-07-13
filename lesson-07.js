var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let newArr = [];
    if (Array.isArray(iterable)) {

        for (let i = 0; i < iterable.length; i++) {
            if (iterable[i] !== iterable[i + 1]) {
                newArr.push(iterable[i])
            }
        }

    } else {
        let arr = iterable.split('');

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1]) {
                newArr.push(arr[i])
            }
        }

    }


    return newArr;
}
//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript