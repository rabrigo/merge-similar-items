const ret = {};
array1 = [[1, 2], [2, 3], [3, 4]]
for (i = 0; i < array1.length; i++) {
    ret[array1[i][0]] = array1[i][1];
}
console.log(ret);