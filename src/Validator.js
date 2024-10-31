class Validator {
  static checkSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  static checkDuplicateNumber(numbers) {
    if(numbers.length !== new Set(numbers)) {
      throw new Error("[ERROR] : 번호들은 중복될 수 없습니다.")
    }
  }
};

export default Validator;