import UserLottoValidate from '../utils/validators/UserLottoValidator.js';

class UserLotto {
  constructor() {
    this.userLottoValidator = new UserLottoValidate();
  }

  createUserLotto(lotto, bonus) {
    let userLotto = [];
    userLotto.push(lotto);
    userLotto.push(bonus);
    return userLotto;
  }

  setUserLotto(userInput) {
    let inputValue = userInput.split(',');
    const userLotto = inputValue.map((number) => Number(number));
    this.userLottoValidator.runAllFunction(userLotto);
    return userLotto;
  }

  setUserBonusLotto(userInput) {
    let inputValue = Number(userInput);
    const bonusNumber = this.userLottoValidator.validateBonusNumber(inputValue);
    return bonusNumber;
  }
}
export default UserLotto;
