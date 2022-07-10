function highAndLow(numbers){
    let res = numbers.split(' ')
    let finalRes = `${Math.max(...res)} ${Math.min(...res)}`;
    return finalRes;
}

function highAndLow(numbers){
    let res = numbers.split(' ').sort( (a,b) => a-b);
    let finalRes = `${res[res.length-1]} ${res[0]}`;
    return finalRes;
}


//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript