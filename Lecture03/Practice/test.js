let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];
let common_elements = [];

for (let i = 0; i < values1.length; i++) {
    for (let j = 0; j < values2.length; j++){
    if ((values1[i]) == (values2[j])) 
        common_elements.push(values1[i])
    }
}


for (let i = 0; i < values1.length; i++) {
    for (let k = 0; k < values3.length; k++){
        if ((values1[i]) == (values3[k])) 
            common_elements.push(values1[i])
    }
}

console.log(common_elements)
