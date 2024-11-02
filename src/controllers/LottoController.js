import Lotto from '../models/Lotto.js';

class LottoController {
  static generateLotto(purchaseNumber) {
    const lottoList = [];
    for (let i = 0; i < purchaseNumber; i++) {
      const lotto = new Lotto();
      lottoList.push(lotto.getLotto());
    }
    return lottoList;
  }

  static getWinningLottoNumber(lottoList, winningNumbers, bonusNumber) {
    let winningLottoNumber = [0, 0, 0, 0, 0];
    lottoList.forEach((lotto) => {
      const distinctLotto = winningNumbers.filter((x) => lotto.includes(x));
      if (lotto.length - distinctLotto.length === 3) {
        return (winningLottoNumber[0] += 1);
      }
      if (lotto.length - distinctLotto.length === 2) {
        return (winningLottoNumber[1] += 1);
      }
      if (lotto.length - distinctLotto.length === 1) {
        return (winningLottoNumber[2] += 1);
      }
      if (lotto.length - distinctLotto.length === 0) {
        if (lotto.includes(bonusNumber)) {
          return (winningLottoNumber[3] += 1);
        }
        if (!lotto.includes(bonusNumber)) {
          return (winningLottoNumber[4] += 1);
        }
      }
    });
    return winningLottoNumber;
  }
}

export default LottoController;
