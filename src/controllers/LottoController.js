import { Random } from "@woowacourse/mission-utils";
import LottoOutput from "../views/LottoOutput.js";
import { CONSTANT } from "../constants/Constants.js";

class LottoController {
  static userLottoArr = [];
  static matchCntArr = new Array(6).fill(0);

  constructor() {
    this.lottoOutput = new LottoOutput();
  }

  makeLottoNum() {
    let lottoNum = Random.pickUniqueNumbersInRange(
      CONSTANT.LOTTO_RANGE_LOWER,
      CONSTANT.LOTTO_RANGE_UPPER,
      6
    );
    lottoNum.sort((a, b) => a - b);
    LottoController.userLottoArr.push(lottoNum);

    return lottoNum;
  }

  calcWinStat(winLottoArr, lottoBonusNum, lottoPrice) {
    for (let i = 0; i < LottoController.userLottoArr.length; i++) {
      let winCnt = LottoController.userLottoArr[i].filter((num) =>
        winLottoArr.getNumbers().includes(num)
      ).length;
      let isBonus = false;
      if (LottoController.userLottoArr[i].includes(lottoBonusNum)) {
        isBonus = true;
      }
      LottoController.matchNumCnt(winCnt, isBonus);
    }
    this.lottoOutput.printWinStat(LottoController.matchCntArr);
    this.calcReturnRate(lottoPrice);
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

  calcReturnRate(lottoPrice) {
    let returnSum =
      LottoController.matchCntArr[5] * CONSTANT.LOTTO_WIN_5 +
      LottoController.matchCntArr[4] * CONSTANT.LOTTO_WIN_4 +
      LottoController.matchCntArr[3] * CONSTANT.LOTTO_WIN_3 +
      LottoController.matchCntArr[2] * CONSTANT.LOTTO_WIN_2 +
      LottoController.matchCntArr[1] * CONSTANT.LOTTO_WIN_1;
    let returnRate = (returnSum / lottoPrice) * 100;
    this.lottoOutput.printReturnRate(returnRate.toFixed(1));
  }
}

export default LottoController;
