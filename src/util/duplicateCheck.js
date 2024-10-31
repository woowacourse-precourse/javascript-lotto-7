export function hasDuplicatesArr(arr) {
  const numbers = new Set(arr);
  return numbers.size !== arr.length;
}

export function hasBonusDuplicate(bonusNumber, arr) {
  if (arr.includes(bonusNumber)) {
    return true;
  }
  return false;
}
