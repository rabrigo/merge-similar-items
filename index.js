var mergeSimilarItems = function(items1, items2) {
    const items = {};
    // items1 = [[1, 2], [2, 3], [3, 4]]
    // items2 = [[1, 3], [0, 9], [11, 0]]
    for (i = 0; i < items1.length; i++) {
        if (!([items1[i][0]] in items)) {
            items[items1[i][0]] = items1[i][1];
        } else {
            items[items1[i][0]] += items1[i][1];
        }
    }
    for (i = 0; i < items2.length; i++) {
        if (!([items2[i][0]] in items)) {
            items[items2[i][0]] = items2[i][1];
        } else {
            items[items2[i][0]] += items2[i][1];
        }
    }
    const ret = [];
    for (const key in items) {
        if (items.hasOwnProperty(key)) {
            ret.push([parseInt(key), items[key]]);
        }
    }
    return ret;
};

items1 = [[1, 2], [2, 3], [3, 4]];
items2 = [[1, 3], [0, 9], [11, 0]];
console.log(mergeSimilarItems(items1, items2));

// const items = {};
// items1 = [[1, 2], [2, 3], [3, 4]]
// items2 = [[1, 3], [0, 9], [11, 0]]
// for (i = 0; i < items1.length; i++) {
//     if (!([items1[i][0]] in items)) {
//         items[items1[i][0]] = items1[i][1];
//     } else {
//         items[items1[i][0]] += items1[i][1];
//     }
// }
// for (i = 0; i < items2.length; i++) {
//     if (!([items2[i][0]] in items)) {
//         items[items2[i][0]] = items2[i][1];
//     } else {
//         items[items2[i][0]] += items2[i][1];
//     }
// }
// const ret = [];
// for (const key in items) {
//     if (items.hasOwnProperty(key)) {
//         ret.push([key, items[key]]);
//     }
// }
// console.log(items);
// console.log(ret);