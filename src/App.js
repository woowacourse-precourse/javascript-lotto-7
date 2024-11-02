import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // - 로또 구입 금액을 입력받는다.
    const priceString = await this.readPriceString();
    const price = Number(priceString);

    // - 당첨 번호 6개를 입력받는다.
    const winningNumbersString = await this.readWinningNumbersString();

    // - 당첨 번호를 쉼표(,)를 기준으로 구분한다.
    const winnigNumbersArray = this.getWinningNumberArray(winningNumbersString);

    // - 보너스 번호 1개를 입력받는다.
    const bonusNumberString = await this.readBonusNumberString();

    // - 1~45 사이의 중복되지 않는 6개 숫자를 랜덤으로 뽑는다.
    const uniqueRandomNumbersArray = this.getUniqueRandomNumbersArray();

    // - 구입 금액에 따라 발행할 로또 개수가 몇 개인지 구한다.
    const lottoCount = this.getLottoCount(price);

    // - 로또를 발행한다.
    const lottosArray = this.getLottosArray(lottoCount);

    // - 발행한 로또 수량을 출력한다.
    this.print(`${lottoCount}개를 구매했습니다.`);

    // - 발행한 로또 번호를 출력한다.
    this.printLottos(lottosArray);

    // - 로또 번호는 오름차순으로 정렬하여 보여준다.
    // - 사용자가 구매한 로또 번호와 당첨 번호를 비교한다.
    // - 당첨 내역을 출력한다.
    // - 수익률을 출력한다.
    // - 수익률은 소수점 둘째 자리에서 반올림한다.
  }

  readPriceString() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  readWinningNumbersString() {
    return Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  }

  getWinningNumberArray(numbersString) {
    return numbersString.split(',').map(Number);
  }

  readBonusNumberString() {
    return Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  }

  getUniqueRandomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottoCount(price) {
    return Math.floor(price / 1000);
  }

  getLottosArray(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.getUniqueRandomNumbersArray();
      lottos.push(lotto);
    }

    return lottos;
  }

  print(message) {
    Console.print(message);
  }

  printLottos(lottosArray) {
    this.print(
      lottosArray
        .map((lotto) => lotto.join(', '))
        .map((lotto) => `[${lotto}]`)
        .join('\n'),
    );
  }
}

export default App;
