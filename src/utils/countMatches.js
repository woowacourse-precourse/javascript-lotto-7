export function countMatches(arr1, arr2) {
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      count++;
      i++;
      j++;
      continue; 
    }
    if (arr1[i] < arr2[j]) {
      i++;
      continue; 
    }
    j++;
  }

  return count;
}