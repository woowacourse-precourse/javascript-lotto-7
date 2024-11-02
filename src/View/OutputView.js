import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  async printOutput(string) {
    MissionUtils.Console.print(string);
  }

  printLottoNumbers(lottoQuantity, lottos) {
    this.printOutput(`${lottoQuantity}개를 구매했습니다.`);
    lottos.map(lotto => {
      this.printOutput(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

}

export default OutputView;
