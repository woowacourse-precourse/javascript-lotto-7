import { scan } from './utils/scanner.js';

class MakeWinningLotto {
  winningLottoNumber;
  bonusNumber;

  async splitLotto() {
    const lottoString = await scan('\n당첨 번호를 입력해 주세요.');
    this.winningLottoNumber = lottoString.split(',').map(Number);
  }

  async getBonusNumber() {
    const bonusNumber = Number(await scan('\n보너스 번호를 입력해 주세요.'));
    this.validateIsRangeNumber(bonusNumber);
    this.validateDuplicate(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validateIsRangeNumber(num) {
    if (!(num >= 1 && num <= 45)) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
    }
  }

  validateDuplicate(num) {
    if (this.winningLottoNumber.indexOf(num) > -1) {
      throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요.');
    }
  }
}

export default MakeWinningLotto;
