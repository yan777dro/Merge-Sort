//In this exercise we'll use Merge Sort to sort an very large array containing a million random unsorted numbers

const hugeArray = [...Array(1000000)].map(() => Math.floor(Math.random() * 1000000));  //our array contains 1000,000 random elements

console.log(hugeArray);

// creating our merging function
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }
  
  // this is our sorting function
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;       
    let mid = Math.floor(arr.length / 2);       // creating our middle
    let left = mergeSort(arr.slice(0, mid));    //calling mergeSort function to sort from the beginning to the middle of the array ( left)
    let right = mergeSort(arr.slice(mid));      //calling mergeSort function to sort from the middle to the end of the array  ( right)
  
    return merge(left, right);                //calling merge function to merge left and right and return our entire array sorted
  }
  