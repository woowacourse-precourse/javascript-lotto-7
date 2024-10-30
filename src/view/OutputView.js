import { Console } from '@woowacourse/mission-utils';

class OutputView {
  displayEmptyLine() {
    Console.print('');
  }

  displayLottoCount(lottoCount) {
    this.displayEmptyLine();
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  displayLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(', ')}]`);
    });

    this.displayEmptyLine();
  }

  displayLottoResult(lottoResult) {
    this.displayEmptyLine();
    Console.print('당첨 통계\n---');

    Console.print(
      `3개 일치 (5,000원) - ${lottoResult.fifth.count}개\n` +
        `4개 일치 (50,000원) - ${lottoResult.fourth.count}개\n` +
        `5개 일치 (1,500,000원) - ${lottoResult.third.count}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.second.count}개\n` +
        `6개 일치 (2,000,000,000원) - ${lottoResult.first.count}개\n`
    );
  }

  displayLottoRateOfReturn(lottoRateOfReturn) {
    Console.print(`총 수익률은 ${lottoRateOfReturn}%입니다.`);
  }

  displayErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }
}

export default OutputView;
