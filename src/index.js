module.exports = function reverse(n) {
    let module = Math.abs(n);
    let str = module + '';
    let array = str.split('');
    let reverse_array = array.reverse();
    let rexerse_str = reverse_array.join('');
    let reverse_num = Number(rexerse_str);
    return reverse_num;
}
