function trimNums(numbers) {
  return numbers.map(num => String(num).trim()).filter(num => num !== '');
}

export default trimNums;
