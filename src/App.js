import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidPayment, isValidLotto, isRepeat } from "./validator.js";
import Lotto from "./Lotto.js";

async function askPayment() {
  try {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    isValidPayment(input);
    return Number(input);

  } catch (err) {
    MissionUtils.Console.print(err.message)
    return await askPayment();
  }
}

async function askWinningNumbers() {
  try {
    const input = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n')
    let winningNumbers = input.split(',');
    winningNumbers = winningNumbers.map((element) => {
      isValidLotto(element);
      isRepeat(winningNumbers, element);
      return Number(element);
    })
    winningNumbers = new Lotto(winningNumbers)
    return winningNumbers;

  } catch (err) {
    MissionUtils.Console.print(err.message);
    return await askWinningNumbers();
  }
}

async function askBonusNumber(list) {
  try {
    const input = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n')
    isValidLotto(input);
    if (list.numbers.includes(Number(input))) throw Error('[ERROR] 보너스 번호가 중복됨')
    return Number(input)

  } catch (err) {
    MissionUtils.Console.print(err.message)
    return await askBonusNumber(list);
  }
}

class App {
  async run() {
    // 구입 금액 입력
    const payment = await askPayment();

    // 로또 수량 출력
    const quantity = payment / 1000;
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);

    // 로또 번호 발행
    const makeLottoNumber = () => {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    // 로또 번호 정렬
    const asc = (a, b) => { return a - b; }

    // 로또 번호 출력
    const printList = (list) => {
      MissionUtils.Console.print(`[${list.numbers.join(', ')}]`);
    }

    const myLottoList = []
    for (let i = 0; i < quantity; i++) {
      myLottoList.push(new Lotto(makeLottoNumber()));
      myLottoList[i].numbers.sort(asc);
      printList(myLottoList[i]);
    }

    // 당첨 번호 입력
    const winningNumbers = await askWinningNumbers()

    // 보너스 번호 입력
    const bonusNumber = await askBonusNumber(winningNumbers)

    // 당첨 내역 집계
    const score = {
      THREE_MATCHES: 0,
      FOUR_MATCHES: 0,
      FIVE_MATCHES: 0,
      FIVE_BONUS_MATCHES: 0,
      SIX_MATCHES: 0,
    }
    const countScore = (score, len, bonus) => {
      if (len === 6) return score.SIX_MATCHES += 1;
      if (len === 5 && bonus) return score.FIVE_BONUS_MATCHES += 1;
      if (len === 5) return score.FIVE_MATCHES += 1;
      if (len === 4) return score.FOUR_MATCHES += 1;
      if (len === 3) return score.THREE_MATCHES += 1;
    }

    for (let i = 0; i < quantity; i++) {
      const result = myLottoList[i].numbers.filter(list => winningNumbers.numbers.includes(list))
      const isBonus = myLottoList[i].numbers.some((element) => {
        return element == bonusNumber
      });
      countScore(score, result.length, isBonus);
    }

    // 수익률 계산
    const profit = Math.round(((5000 * score.THREE_MATCHES) + (50000 * score.FOUR_MATCHES)
      + (1500000 * score.FIVE_MATCHES) + (30000000 * score.FIVE_BONUS_MATCHES)
      + (2000000000 * score.SIX_MATCHES)) / payment * 100 * 10) / 10;

    // 당첨 내역 및 수익률 출력
    const printScore = (score) => {
      const str = `
당첨 통계
---
3개 일치 (5,000원) - ${score.THREE_MATCHES}개
4개 일치 (50,000원) - ${score.FOUR_MATCHES}개
5개 일치 (1,500,000원) - ${score.FIVE_MATCHES}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${score.FIVE_BONUS_MATCHES}개
6개 일치 (2,000,000,000원) - ${score.SIX_MATCHES}개
총 수익률은 ${profit}%입니다.`
      MissionUtils.Console.print(str)
    }
    printScore(score)
  }
}

export default App;
