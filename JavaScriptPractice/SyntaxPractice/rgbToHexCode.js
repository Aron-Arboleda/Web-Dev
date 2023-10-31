
const input = require('prompt-sync')();

function rgbToHexCode(value){
    let x = value
    let list = []
    while (list.length != 2) {
        let num = Math.trunc(x % 16)
        if (num >= 10){
            list.push(reference[num])
            console.log(reference[11])
        } else {
            list.push(num)
        }
        
        x = Math.trunc(x / 16)
    }
    list.reverse()
    return list.join("")
}

var reference = {
    10: 'a', 11: 'b',
    12: 'c', 13: 'd',
    14: 'e', 15: 'f',
};

let red = input()
let green = input()
let blue = input()
let rgb = [red,green,blue]
rgb = rgb.map(rgbToHexCode)
let hexcode = "#" + rgb.join("");

console.log(hexcode)