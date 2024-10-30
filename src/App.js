import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 구입 금액 입력
    const payment = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    // 로또 수량 출력
    const quantity = Number(payment) / 1000;
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);

    // 로또 번호 발행
    const makeLottoNumber = () => {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    // 로또 번호 정렬
    const asc = (a, b) => { a - b; }

    // 로또 번호 출력
    const printList = (list) => {
      MissionUtils.Console.print(`[${list.join(', ')}]`);
    }

    const myLottoList = []
    for (let i = 0; i < quantity; i++) {
      myLottoList.push(makeLottoNumber())
      myLottoList[i].sort(asc)
      printList(myLottoList[i])
    }

    // 당첨 번호 입력
    const winningString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n')
    const winningNumber = winningString.split(',').map((element) => {
      return Number(element);
    });

    // 보너스 번호 입력
    const bonusString = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n')
    const bonusNumber = Number(bonusString)

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
      const result = myLottoList[i].filter(list => winningNumber.includes(list))
      const isBonus = myLottoList[i].some((element) => {
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
