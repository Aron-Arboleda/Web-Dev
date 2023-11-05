/*
const input = require('prompt-sync')();

let sentence = input().split(" ")
let lastLetter = sentence[0].charAt(sentence[0].length - 1)
let checker = true 
for (let i = 1; i < sentence.length; i++) {
    if (sentence[i][0] != lastLetter){
        checker = false
        break
    }
    lastLetter = sentence[i].charAt(sentence[i].length - 1)
}
console.log(checker)*/

function limitDecimalPoints(num, decimalCount) {
  return Number(num.toFixed(decimalCount));
}

function rank(data) {
  const sortedDescending = [...data].sort((a, b) => a - b).reverse();
  let rankData = [];
  for (let i = 0; i < sortedDescending.length; i++) {
    rankData[i] = sortedDescending.indexOf(data[i]) + 1;
  }
  return rankData;
}

function calculateSpearmanRank(xData, yData) {
  const n = xData.length;
  let xRankData = rank(xData), yRankData = rank(yData), diData = [];
  for (let i = 0; i < n; i++) {
    diData[i] = xRankData[i] - yRankData[i];
  }
  let diSquaredData = diData.map((num) => num ** 2);
  const diSquaredSummation = diSquaredData.reduce((acc, val) => acc + val, 0);  
  const spearmanRank = 1 - ((6 * diSquaredSummation) / (n * ((n ** 2) - 1)));

  return limitDecimalPoints(spearmanRank, 3);
}



console.log(calculateSpearmanRank([7,15,12,5,13,10,4,3],[8,10,19,4,15,23,12,14]));