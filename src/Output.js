import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static printAllLottos(lotoArray) {
    MissionUtils.Console.print(`${lottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    lottoArray.forEach((lotto) => lotto.printNumbers());
  }
}

export default Output;
