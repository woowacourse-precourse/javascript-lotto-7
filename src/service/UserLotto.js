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
}
export default UserLotto;
