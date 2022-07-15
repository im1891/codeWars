function moveZeros(arr) {
    let newArr = [];

    newArr= [...arr].filter( e => e !== 0  );

    [...arr].filter( (e,i,arr) => {
        if (arr[i] === 0) {
            newArr.push(arr[i]);
        }
    }  )

    return newArr;
}

https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript


