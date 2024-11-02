import { scan } from './utils/scanner.js';

class WinnintLotto {
  winningLottoNumber;

  async splitLotto() {
    const lottoString = await scan('\n당첨 번호를 입력해 주세요.');
    this.winningLottoNumber = lottoString.split(',').map(Number);
  }

  async getBounusNumber() {
    const bonusNumber = await scan('\n보너스 번호를 입력해 주세요.');
    this.winningLottoNumber.push(Number(bonusNumber));
  }
}

export default WinnintLotto;
