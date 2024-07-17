const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accu,ulator: ${accumulator},currentValue: ${currentValue}, index: ${index}, retunrs: ${returns}`,
    );
    return returns
} 

array.reduce(reducer)