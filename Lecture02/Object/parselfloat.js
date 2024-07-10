function circumferencer(r) {
    if (Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumferencer("4.567abcdefgh"));

console.log(circumferencer("abcdefgh"));
