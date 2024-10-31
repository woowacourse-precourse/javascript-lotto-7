import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto"; // Lotto 클래스 임포트

class App {
  async run() {
    // 로또 구입 금액 입력
    const lottoPrice = parseInt(
      await Console.readLineAsync("얼마치 로또를 구입하시겠습니까?"),
      10
    );
    const lottoCount = Math.floor(lottoPrice / 1000);

    Console.print(`${lottoCount}개를 구매했습니다.`);

    // 로또 번호 생성 및 오름차순 정렬 후 출력
    const lottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      lottoList.push(randomNumbers);
      Console.print(`[${randomNumbers.join(", ")}]`);
    }

    // 당첨 번호 및 보너스 번호 입력 처리
    const lottoNum = await Console.readLineAsync("당첨 번호를 입력 하세요.");
    const lottoNumbers = lottoNum.split(",").map(Number);
    const lotto = new Lotto(lottoNumbers);

    const bonusNumber = Lotto.genBonusNum(lotto.getNum());

    //당첨 결과 계산
    const winningMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000,
    };
    const result = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };

    lottoList.forEach((ticket) => {
      const matchCount = ticket.filter((num) =>
        lottoNumbers.includes(num)
      ).length;
      const isBonusMatched = ticket.includes(bonusNumber);

      if (matchCount === 5 && isBonusMatched) result["5+bonus"]++;
      else if (matchCount >= 3) result[matchCount]++;
    });

    //수익률 계산
    const totalPrize = Object.keys(result).reduce(
      (acc, key) => acc + result[key] * winningMoney[key],
      0
    );
    const profitRate = Math.round((totalPrize / lottoPrice) * 100 * 10) / 10;

    // 로직 실행
    Console.print(`구입 금액: ${lottoPrice}`);
    Console.print(`당첨 번호: ${lotto.getNum()}`);
    Console.print(`보너스 번호: ${bonusNumber}`);

    // 당첨 내역 출력
    Console.print(`3개 일치 (5,000원) - ${result[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["5+bonus"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${result[6]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
