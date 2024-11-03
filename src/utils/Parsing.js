class Parsing {
  static parseNumbers(numbers) {
    return numbers.map((num) => parseInt(num, 10));
  }

  static parseList(numbers) {
    return numbers.split(',').map((num) => parseInt(num, 10));
  }
}
export default Parsing;
