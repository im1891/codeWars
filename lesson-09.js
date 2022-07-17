function duplicateCount(text){
    let arr = text.toLowerCase().split('');
    arr = arr.sort();

    arr = arr.filter( (e,i) => e === arr[i+1]);

    arr= arr.filter( (e,i) => e !== arr[i+1]);

    return arr.length;

}


//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript