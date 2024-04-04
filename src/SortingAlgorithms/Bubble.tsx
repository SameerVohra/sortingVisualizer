import React from 'react'


export default Bubble(arr: number[]):number[]=>{
const sortedArr = [...arr];
    const n: number = sortedArr.length;
    const iterations = [];
    for (let i = 0; i < n - 1; i++) {
      let isSwapped: boolean = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
          isSwapped = true;
        }
      }
      if (!isSwapped) break;
      iterations.push([...sortedArr]);
      console.log(sortedArr);
    }

    iterations.forEach((iterations, index) => {
      setTimeout(() => {
        setArr(iterations);
      }, index * 500);
    });
}
