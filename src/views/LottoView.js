class LottoView {
  constructor(outputFunction, inputFunction) {
    this.print = outputFunction;
    this.readLine = inputFunction;
  }

  async getCashInHand() {
    const message = '구입금액을 입력해 주세요.\n';
    return this.readLine(message);
  }

  printLottoPurchase(lottos) {
    const lottosNumber = Object.keys(lottos).length;
    this.print(`\n${lottosNumber}개를 구매했습니다.`);
    for (let i = 0; i < lottosNumber; i += 1) {
      this.print(lottos[i]);
    }
  }

  async getTargetLottoArray() {
    const message = '\n당첨 번호를 입력해 주세요.\n';
    const numbers = await this.readLine(message);
    const stringArray = numbers.split(',');
    return stringArray.map(str => parseInt(str, 10));
  }

  async getBonusNumber() {
    const message = '\n보너스 번호를 입력해주세요.\n';
    return this.readLine(message);
  }

  printWinningStatistics(winStatistics) {
    this.print('당첨 통계');
    this.print('---');
    this.print(`3개 일치 (5,000원) - ${winStatistics[3]}개`);
    this.print(`4개 일치 (50,000원) - ${winStatistics[4]}개`);
    this.print(`5개 일치 (1,500,000원) - ${winStatistics[5]}개`);
    this.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winStatistics.bonus}개`,
    );
    this.print(`6개 일치 (2,000,000,000원) - ${winStatistics[6]}개`);
  }

  printRateOfReturn(rateOfReturn) {
    this.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}
export default LottoView;
