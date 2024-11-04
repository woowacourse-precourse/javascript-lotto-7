// services/LottoService.js
import {
  createLottoNumber,
  createBonusNumber,
} from '../factories/ObjectFactory.js';

class LottoService {
  constructor() {
    this.lottoObj = null;
  }

  async createLotto() {
    const lotto = await createLottoNumber();
    this.lottoObj = lotto;
    const lottoNumber = lotto.getLottoNumber();
    return { lotto, lottoNumber };
  }

  async createBonus(lottoNumber) {
    const bonus = await createBonusNumber(lottoNumber);
    return bonus.getBonusNumber();
  }

  checkWinning(randomNumObj, bonusNumber) {
    if (!this.lottoObj) {
      throw new Error('로또 객체가 아직 초기화되지 않았습니다.');
    }
    return this.lottoObj.checkWinningCnt(randomNumObj, bonusNumber);
  }

  createMoneyArr(winningCnt, bonusCnt) {
    if (!this.lottoObj) {
      throw new Error('로또 객체가 아직 초기화되지 않았습니다.');
    }
    return this.lottoObj.createMoneyArr(winningCnt, bonusCnt);
  }
}

export default LottoService;
