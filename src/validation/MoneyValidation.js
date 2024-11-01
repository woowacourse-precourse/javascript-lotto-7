class MoneyValidation {
  static checkIsEmpty(money) {
    return money.trim() === '';
  }

  static checkIsNaN(money) {
    const number = Number(money);
    return !Number.isInteger(number) || Number.isNaN(money);
  }
}
export default MoneyValidation;
