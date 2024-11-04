export function intersection(array1, array2) {
  return array1.filter((element) => array2.includes(element));
}

export function getInterSectionSize(array1, array2) {
  return intersection(array1, array2).length;
}
