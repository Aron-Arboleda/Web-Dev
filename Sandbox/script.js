
/** 
function rank(data) {
  let rankData = [];
  let mainSortedData = [];
  if (typeof data[0] === 'string'){
    mainSortedData = data;
  } else {
    mainSortedData = [...data].sort((a, b) => a - b).reverse();
  }
  const dataArray = [], duplicateRank = []; 
  
  for (let i = 0; i < mainSortedData.length; i++) {
    if (mainSortedData[i] === mainSortedData[i+1]){
      let duplicate = mainSortedData[i];
      duplicateRank.push(i + 1);
      for (let j = i + 1; j < mainSortedData.length; j++) {
        if (duplicate === mainSortedData[j]) {
          duplicateRank.push(j + 1);
        }
      }

      i += duplicateRank.length;
    }

    if (duplicateRank.length > 0){
      const sum = duplicateRank.reduce((acc, val) => acc + val, 0);
      const n = duplicateRank.length;
      let average = sum/n;

      for (let i = 0; i < duplicateRank.length; i++) {
        duplicateRank[i] = average;
      }

      const len = duplicateRank.length;

      for (let i = 0; i < len; i++) {
        rankData.push(duplicateRank.pop());
      }
    }

    if (mainSortedData[i] !== mainSortedData[i+1] && i < mainSortedData.length) {
      rankData.push(i + 1);
      dataArray.push(mainSortedData[i]);
    } else if (mainSortedData[i] === mainSortedData[i+1]) {
      i--;
    }
  }
  
  return rankData;
}


console.log(rank(['University', 'HighSchool', 'Elementary', 'Preparatory','Kindergarten', 'Kindergarten']));
*/
function removeEgg(foods) {
  let eggCounter = 0;
  const output = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      eggCounter++;
      if (eggCounter > 2){
        output.push(foods[i]);
      }
      continue;
    } else {
      output.push(foods[i]);
    }
  }
  return output;
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

// array = [60, 50, 50, 50, 50, 25, 15, 12, 12, 10, 10, 10,9,9,9, 7, 5, 5, 3, '']
// array = [1,4,1,1,1,2]
// array = [1,2,3,4,5,]


/** 
      for (let j = i; j < sortedDescendingArray.length - 1; j++) {
          if (sortedDescendingArray[j] === sortedDescendingArray[j + 1]) {
              duplicateRank.push(j, j + 1);
          }
      }*/

/*



function rank(data) {
  let rankData = [];
  if (typeof data[0] === 'string'){
    for (let i = 0; i < data.length; i++) {
      rankData[i] = i + 1;
    }
  } else {
    let buffer = new Stack();
    const sortedDescending = [...data].sort((a, b) => a - b).reverse();
    let dupChecker = false;
    //const rawRank = Array.from({ length: sortedDescending.length }, (_, i) => i + 1);

    buffer.push(sortedDescending[0]);
    for (let i = 1; i < sortedDescending.length; i++) {
      console.log("buffer: " + buffer.items);
      if (i + 1 === sortedDescending.length){
        rankData.push(i);
        break;
      }
      if (sortedDescending[i] === sortedDescending[i - 1]){
        console.log("true");
        dupChecker === true;
        buffer.push(sortedDescending[i - 1]);
        rankData.push(i);
      } else {
        if (dupChecker === false){
          rankData.push(i);
        } else {
          dupChecker === false;
          buffer.push(sortedDescending[i - 1]);
          rankData.push(i);
          let sum = 0;
          for (let t = i - 1; t >= buffer.length; t--) {
            sum += rankData[t];
          }
          const averank = sum/buffer.length;
          for (let j = i - 1; j >= buffer.length; j--) {
            rankData[j] = averank;
          }
        }
        /** 
        for (let j = 0; j < buffer.size(); j++) {
          let rankBuffer = [];
          for (let k = 0; k < rankBuffer.length; k++) {
            rankBuffer.push(k + 1);
          }
          const rank = getMean(rankBuffer)/rankBuffer.length;
          for (let m = sortedDescending.indexOf(buffer.top()); m < rankBuffer.length; m++) {
            rankData[m] = rank;
          }
        }
      }

      if (dupChecker === false){
        buffer.clear();
      }
      //rankData[i] = sortedDescending.indexOf(data[i]) + 1;
    }
  }
  
  return rankData;
}

console.log(rank([60,55,45,10,10,10,8,5,6]));
*/
