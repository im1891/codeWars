function filter_list(l) {
    // Return a new array with the strings filtered out
    let res=  l.filter(e => typeof e !== 'string');
    return res;

}