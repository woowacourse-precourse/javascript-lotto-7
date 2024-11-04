export class Parser {
  static parseLottoNumbers(numbers) {
    const parsedNumber = numbers
      .split(",")
      .map((number) => Number(number.trim()));
    return parsedNumber;
  }
}
