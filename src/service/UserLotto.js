import UserLottoValidate from '../utils/validators/UserLottoValidator.js';

class UserLotto {
  constructor() {
    this.userLottoValidator = new UserLottoValidate();
  }

  setUserLotto(userInput) {
    let inputValue = userInput.split(',');
    const userLotto = inputValue.map((number) => Number(number));
    this.userLottoValidator.runAllFunction(userLotto);
    return userLotto;
  }

  setUserBonusLotto(lotto, userInput) {
    let inputValue = Number(userInput);
    const bonusNumber = this.userLottoValidator.validateBonusNumber(inputValue);
    this.userLottoValidator.hasDuplicateBonusNumber(lotto, bonusNumber);
    return bonusNumber;
  }
}
export default UserLotto;
