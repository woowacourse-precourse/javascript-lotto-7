import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printEmptyLine() {
    Console.print('');
  }
  printLottoCount(lottoCount) {
    this.printEmptyLine();
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });

    this.printEmptyLine();
  }

  printLottoResult(lottoResult) {
    this.printEmptyLine();
    Console.print('당첨 통계\n---');

    Console.print(
      `3개 일치 (5,000원) - ${lottoResult.fifth}개\n` +
        `4개 일치 (50,000원) - ${lottoResult.fourth}개\n` +
        `5개 일치 (1,500,000원) - ${lottoResult.third}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.second}개\n` +
        `6개 일치 (2,000,000,000원) - ${lottoResult.first}개\n`
    );
  }

  printLottoRateOfReturn(lottoRateOfReturn) {
    Console.print(`총 수익률은 ${lottoRateOfReturn}%입니다.`);
  }

  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
