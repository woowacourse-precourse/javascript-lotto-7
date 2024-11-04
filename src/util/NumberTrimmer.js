class NumberTrimmer {
  static trim(numbers) {
    return numbers.map(num => String(num).trim()).filter(num => num !== '');
  }
}
export default NumberTrimmer;
