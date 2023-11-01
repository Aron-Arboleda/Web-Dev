const input = require('prompt-sync')();

let word = input()
let buffer = []
let isogram = true
for (let letter of word){
    if (buffer.includes(letter)){
        isogram = false
        break
    }
    buffer.push(letter)
}
console.log(isogram)