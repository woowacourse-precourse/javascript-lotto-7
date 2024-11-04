import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class App {
  async run() {
    const inputMoney = async () => {
      const money = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
      return Number(money);
    }

    let purchaseMoney = 0;
    const TICKET_PRICE = 1000;
    let ticketCount = 0;
    const checkRestZero = async () => {
      purchaseMoney = Number(await inputMoney());
      if (purchaseMoney % TICKET_PRICE === 0) {
        ticketCount = purchaseMoney / TICKET_PRICE;
      } else {
        throw new Error('[ERROR] 1,000원 단위로 입력하세요.');
      }
    }

    try {
      await checkRestZero();
    } catch(error) {
      MissionUtils.Console.print(error.message);
      await checkRestZero();
    }

    MissionUtils.Console.print(`${ticketCount}개를 구매했습니다.`);

    const pickNumber = [];
    for (let i = 0; i < ticketCount; i++) {
      const numbers = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
      pickNumber.push(numbers);
    }

    for (let i = 0; i < pickNumber.length; i++) {
      MissionUtils.Console.print(`[${pickNumber[i].getNumbers().join(', ')}]`);
    }

    const arrayInputNumbers = [];
    let arrayWinningNumbers = [];
    let arrayBonusNumbers = [];
    const inputWinningNumbers = async () => {
      const stringNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
      const arrayNumbers = stringNumbers.split(',');
      arrayNumbers.forEach(element => {
        arrayInputNumbers.push(element);
      });
      arrayWinningNumbers = arrayNumbers;
    }

    const inputBonusNumber = async () => {
      const number = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
      arrayInputNumbers.push(number);
      arrayBonusNumbers = number;
    }

    const functionInputNumber = async () => {
      await inputWinningNumbers();
      await inputBonusNumber();
    }

    try {
      await functionInputNumber();
      if (arrayInputNumbers.length !== new Set(arrayInputNumbers).size) {
        throw new Error('[ERROR] 당첨 및 보너스 숫자에 중복이 있으면 안 됩니다.');
      }
    } catch(error) {
      MissionUtils.Console.print(error.message);
      await functionInputNumber();
    }

    const winningStatistics = [0, 0, 0, 0, 0];
    for (const ticket of pickNumber) {
      const ticketNumbers = ticket.getNumbers();
      const matchedNumbers = ticketNumbers.filter((num) => arrayWinningNumbers.includes(String(num))).length;
      const hasBonus = arrayBonusNumbers === ticketNumbers.find((num) => String(num) === arrayBonusNumbers);
  
      if (matchedNumbers === 6) {
        winningStatistics[4] += 1;
      } else if (matchedNumbers === 5 && hasBonus) {
        winningStatistics[3] += 1;
      } else if (matchedNumbers === 5) {
        winningStatistics[2] += 1;
      } else if (matchedNumbers === 4) {
        winningStatistics[1] += 1;
      } else if (matchedNumbers === 3) {
        winningStatistics[0] += 1;
      }
    }
    
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (${prizeMoney[0].toLocaleString()}원) - ${winningStatistics[0]}개`);
    MissionUtils.Console.print(`4개 일치 (${prizeMoney[1].toLocaleString()}원) - ${winningStatistics[1]}개`);
    MissionUtils.Console.print(`5개 일치 (${prizeMoney[2].toLocaleString()}원) - ${winningStatistics[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${prizeMoney[3].toLocaleString()}원) - ${winningStatistics[3]}개`);
    MissionUtils.Console.print(`6개 일치 (${prizeMoney[4].toLocaleString()}원) - ${winningStatistics[4]}개`);

    let winningAmount = 0;
    for (let i = 0; i < prizeMoney.length; i++) {
      winningAmount += prizeMoney[i] * winningStatistics[i];
    }

    const ADUJUST_POINT = 100;
    const returnRate = Math.round(winningAmount / purchaseMoney * ADUJUST_POINT * ADUJUST_POINT) / ADUJUST_POINT;
    MissionUtils.Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default App;
