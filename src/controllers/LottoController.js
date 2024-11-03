import { Random } from "@woowacourse/mission-utils";

class LottoController {
  constructor() {
    this.userLottoArr = [];
  }

  makeLottoNum() {
    let lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNum.sort((a, b) => a - b);
    this.userLottoArr.push(lottoNum);

    return lottoNum;
  }
}

export default LottoController;
