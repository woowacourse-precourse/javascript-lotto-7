import { Random } from "@woowacourse/mission-utils";
import LottoOutput from "../views/LottoOutput.js";

class LottoController {
  static userLottoArr = [];
  static matchCntArr = new Array(6).fill(0);

  constructor() {
    this.lottoOutput = new LottoOutput();
  }

  makeLottoNum() {
    let lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNum.sort((a, b) => a - b);
    LottoController.userLottoArr.push(lottoNum);

    return lottoNum;
  }

  calcWinStat(lottoWinArr, lottoBonusNum) {
    for (let i = 0; i < LottoController.userLottoArr.length; i++) {
      let winCnt = LottoController.userLottoArr[i].filter((num) =>
        lottoWinArr.includes(num)
      ).length;
      let isBonus = false;
      if (LottoController.userLottoArr[i].includes(lottoBonusNum))
        isBonus = true;
      LottoController.matchNumCnt(winCnt, isBonus);
    }
    this.lottoOutput.printWinStat(LottoController.matchCntArr);
  }

  static matchNumCnt(winCnt, isBonus) {
    if (winCnt == 6) {
      LottoController.matchCntArr[1]++;
    } else if (winCnt == 5) {
      if (isBonus) return this.matchCntArr[2]++;
      LottoController.matchCntArr[3]++;
    } else if (winCnt == 4) {
      LottoController.matchCntArr[4]++;
    } else if (winCnt == 3) {
      LottoController.matchCntArr[5]++;
    }
  }
}

export default LottoController;
