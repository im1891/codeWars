// вариант 1
function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort().filter( (e,i,arr) => e === arr[i+1]).filter( (e,i,arr) => e !== arr[i+1]).length;

    return arr;

}


//вариант 2

function duplicateCount(text){
    const res = Object.entries(text.toLowerCase().split('').reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {}));
    const finalRes = res.filter(e => e[1] > 1).length
    return finalRes;
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript