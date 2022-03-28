function missingLetter(text) {
    for (let i = 0; i < text.length - 1; i++) {
        next1 = text[i].charCodeAt(0);
        next2 = text[i + 1].charCodeAt(0);
        if(next2 !== next1 + 1 )
            return String.fromCharCode(next1 + 1);
        
        
    }return "No Missing Letter";
    
}

console.log(missingLetter("abdefg"));
console.log(missingLetter("mnopqs"));
console.log(missingLetter("tuvxyz"));
console.log(missingLetter("ghijklmno"));