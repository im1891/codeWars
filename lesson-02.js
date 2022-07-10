function descendingOrder(n) {

    let num = n.toString().split('').sort((a, b) => b - a).join('');

    return +num;


}

descendingOrder(12345)

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript