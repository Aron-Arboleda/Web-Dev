

function rank(data) {
  let rankData = [];
  if (typeof data[0] === 'string'){
    for (let i = 0; i < data.length; i++) {
      rankData[i] = i + 1;
    }
  } else {
    const sortedDescendingArray = [...data].sort((a, b) => a - b).reverse();
    const dataArray = [], duplicateRank = []; let average;
    
    for (let i = 0; i < sortedDescendingArray.length; i++) {
      if (sortedDescendingArray[i] === sortedDescendingArray[i+1]){
        duplicateRank.push(i + 1);
        for (let j = i + 1; j < sortedDescendingArray.length; j++) {
          if (sortedDescendingArray[i-1] === sortedDescendingArray[i]) {
            
          }
        }
      }
      
      if (sortedDescendingArray[i] === sortedDescendingArray[i + 1] && i + 1 != sortedDescendingArray.length){
        duplicateRank.push(i + 1);
      }
      if (sortedDescendingArray[i] !== sortedDescendingArray[i + 1] && duplicateRank.length > 0){
        const sum = duplicateRank.reduce((acc, val) => acc + val, 0);
        const n = dataArray.length;
        average = sum/n;
      }

      if (duplicateRank.length > 0){
        duplicateRank.map((rank) => rank = average);
        for (let i = 0; i < duplicateRank.length; i++) {
          rankData.push(duplicateRank.pop());
        }
      }
      rankData.push(i + 1);
      dataArray.push(sortedDescendingArray[i]);
    }
  }
  return rankData;
}


console.log(rank([60, 50, 25, 15, 10, 10, 10, 8]));


function countDuplicates(arr) {
  const countMap = new Map();
  arr.forEach(value => {
    countMap.set(value, (countMap.get(value) || 0) + 1);
  });
  const result = arr.map(value => countMap.get(value) || 1);

  return result;
}

function rank(data) {
  let rankData = [];
  if (typeof data[0] === 'string'){
    for (let i = 0; i < data.length; i++) {
      rankData[i] = i + 1;
    }
  } else {
    const sortedDescendingArray = [...data].sort((a, b) => a - b).reverse();
    const dataArray = [], duplicateRank = []; let average;
    
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
    }
    
  }
  return rankData;
}

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
