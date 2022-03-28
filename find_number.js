function numInStr(text) {
    let value = [];
    for(const values of text){
        if(values.match(/[0-9]/g)){
            value.push(values)
        }
    }
    return value;
}

console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
console.log(numInStr(["1a", "a", "2b", "b"]));