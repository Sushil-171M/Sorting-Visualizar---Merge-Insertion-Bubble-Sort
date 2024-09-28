export function getMergeSortAnimations(array) {
    const animations = [];
    //console.log(array);
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    //console.log(auxiliaryArray);
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  
  
  export function getBubbleSortAnimations(array) {
    const animations = [];
    //console.log(array);
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    //console.log(auxiliaryArray);
    let i=0;
    let l=array.length - 1;
    let j=0;
    let temp=0;
    for( i=0 ; i <= l ; i++)
    {
      for( j=0 ; j < l-i ; j++)
      {
        animations.push([j , j+1]);
        
        if(auxiliaryArray[j] > auxiliaryArray[j+1])
        {
          temp=auxiliaryArray[j];
          auxiliaryArray[j]=auxiliaryArray[j+1];
          auxiliaryArray[j+1]=temp;
        }
        animations.push([j , auxiliaryArray[j]]);
        animations.push([j+1 , auxiliaryArray[j+1]]);
        animations.push([j , j+1]);
      }
    }
    
    return animations;
  }
  
  export function getInsertionSortAnimations (array) {
    const animations = [];
    let i, len = array.length, el, j;
    
      for(i=1 ; i < len ; i++)
      {
        j=i;
        el=array[i];
        for(j = i ; j > 0 ; j--)
        {
          animations.push([j , j-1]);
          if(array[j] < array[j-1])
          {
            array[j] = array[j-1];
            array[j-1] = el;
            animations.push([j-1 , array[j-1]]);
            animations.push([j , array[j]]);
            animations.push([j , j-1]);
          }
          else
          {
            animations.push([j-1 , array[j-1]]);
            animations.push([j , array[j]]);
            animations.push([j , j-1]);
            break;
          }
        }
      }
    
      return animations;
    
  }