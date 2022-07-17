function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort().filter( (e,i,arr) => e === arr[i+1]).filter( (e,i,arr) => e !== arr[i+1]).length;





    return arr;

}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript