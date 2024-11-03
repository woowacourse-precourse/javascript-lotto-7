import { Console, Random } from "@woowacourse/mission-utils";

class LottoController {
  static userLottoArr = [];

  makeLottoNum() {
    let lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNum.sort((a, b) => a - b);
    LottoController.userLottoArr.push(lottoNum);

    return lottoNum;
  }

  static calcWinStat(lottoWinArr, lottoBonusNum) {
    for (let i = 0; i < this.userLottoArr.length; i++) {
      let winCnt = this.userLottoArr[i].filter((num) =>
        lottoWinArr.includes(num)
      ).length;
    }
  }
}

export default LottoController;
