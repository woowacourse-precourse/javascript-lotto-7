import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { lottoNumberOutOfRangeException } from "./Exception/validation.js";

class App {
  async run() {
    const amount = Number(await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
    this.amountExceptionHandler(amount);

    const possibleLottoCount = Number(amount / 1000);
    Console.print(`${possibleLottoCount}개를 구매했습니다.`);

    const lottoArray = this.createLotto(possibleLottoCount);
    this.displayLotto(lottoArray);

    const inputWinningLotto = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningLotto = new Lotto(this.createWinningLotto(inputWinningLotto));
    this.notSixRangeLottoException(winningLotto.getLotto());

    const bonusLottoNumber = Number(await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"));
    lottoNumberOutOfRangeException(bonusLottoNumber);

    const winningArray = this.checkWinning(lottoArray, winningLotto.getLotto(), bonusLottoNumber);

    this.displayPrizeMoney(winningArray, amount);
  }

  createLotto(count) {
    const lottoArray = [];

    for (let i = 0; i < count; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.sort((a, b) => a - b);

      const lottoClass = new Lotto(lotto);

      lottoArray.push(lottoClass);
    }

    return lottoArray;
  }

  displayLotto(lottoArray) {
    for (let i of lottoArray) {
      Console.print(`[${i.getLotto().join(", ")}]`);;
    }
  }

  createWinningLotto(lottoNumbers) {
    return lottoNumbers
      .split(",")
      .map(lotto => Number(lotto))
      .sort((a, b) => a - b);
  }

  checkWinning(lottoArray, winningLotto, bonusLottoNumber) {
    const winningArray = [];

    for (let lotto of lottoArray) {
      let correctCount = 0;
      for (let i = 0; i < 6; i++) {
        if (lotto.getLotto().some(item => item === winningLotto[i])) {
          correctCount++;
        }
      }

      if (correctCount == 6) {
        winningArray.push(7);
        continue;
      }

      if (correctCount === 5 && lotto.getLotto().some(item => item == bonusLottoNumber)) {
        winningArray.push(6);
        continue;
      }

      winningArray.push(correctCount);
    }

    return winningArray;
  }

  displayPrizeMoney(winningArray, lottoAmount) {
    const winningCount = new Map();
    let winningAmount = 0;

    for (let i = 3; i <= 7; i++) {
      winningCount.set(i, 0);
    }
    for (let wl of winningArray) {
      winningCount.set(wl, winningCount.get(wl) + 1);
      winningAmount += this.prizeMoney[wl];
    }
    
    Console.print(`3개 일치 (5,000원) - ${winningCount.get(3)}개`);
    Console.print(`4개 일치 (50,000원) - ${winningCount.get(4)}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningCount.get(5)}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount.get(6)}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${winningCount.get(7)}개`);
    Console.print(`총 수익률은 ${(winningAmount / lottoAmount) * 100}%입니다.`);
  }

  // 1000원 단위가 아닐 경우
  amountExceptionHandler(amount) {
    if (Number.isNaN(amount)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    if (amount % 1000 != 0) {
      throw new Error("[ERROR] 1,000원 단위만 입력해주세요.");
    }
  }

  // 입력한 로또 번호가 6개가 아닐 시
  notSixRangeLottoException(winningLotto) {
    if (winningLotto.length !== 6) {
      throw new Error("[ERROR] 로또 개수는 6개 입력해주세요.");
    }
  }

  prizeMoney = [0, 0, 0, 5000, 50000, 1500000, 30000000, 2000000000];
}

export default App;
