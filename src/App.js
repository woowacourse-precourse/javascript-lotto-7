import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    let price;
    while (true) {
      try {
        price = parseInt(
          await Console.readLineAsync('구입금액을 입력해 주세요.\n')
        );

        if (price % 1000 !== 0) {
          throw new Error(
            '[ERROR] 로또 구입 금액은 1000원 단위만 입력 가능합니다.'
          );
        }

        Console.print('');
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottoCount = price / 1000;
    Console.print(`${lottoCount}개를 구매했습니다.`);

    let lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      lottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
    }
    for (let i = 0; i < lottoCount; i++) {
      Console.print(`[${lottos[i].join(', ')}]`);
    }
    Console.print('');

    let winningNumbers;
    while (true) {
      try {
        winningNumbers = (
          await Console.readLineAsync('당첨 번호를 입력해 주세요.\n')
        )
          .split(',')
          .map(Number);

        if (winningNumbers.some((number) => number < 1 || number > 45)) {
          throw new Error(
            '[ERROR] 로또 번호는 1-45 사이의 숫자로 이루어져야 합니다.'
          );
        }

        Console.print('');
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = parseInt(
          await Console.readLineAsync('보너스 번호를 입력해 주세요.\n')
        );
        if (bonusNumber < 1 || bonusNumber > 45) {
          throw new Error(
            '[ERROR] 로또 번호는 1-45 사이의 숫자로 이루어져야 합니다.'
          );
        }
        if (winningNumbers.some((number) => number === bonusNumber)) {
          throw new Error(
            '[ERROR] 당첨 번호 6개와 보너스 번호는 중복이 불가능합니다.'
          );
        }

        Console.print('');
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    Console.print('당첨 통계');
    Console.print('---');
    let matchLotto = {
      3: {
        count: 0,
        reward: 5000,
      },
      4: {
        count: 0,
        reward: 50000,
      },
      5: {
        count: 0,
        reward: 1500000,
      },
      '5 + bonus': {
        count: 0,
        reward: 30000000,
      },
      6: {
        count: 0,
        reward: 2000000000,
      },
    };
    for (let i = 0; i < lottos.length; i++) {
      const compareNumbers = winningNumbers.filter((number) =>
        lottos[i].includes(number)
      );
      const matchCount = compareNumbers.length;
      if (lottos[i].includes(bonusNumber) && matchCount === 5) {
        ++matchLotto['5 + bonus'].count;
      } else if (matchCount > 2) {
        ++matchLotto[matchCount].count;
      }
    }

    let totalProfit = 0;
    for (let [key, value] of Object.entries(matchLotto)) {
      if (value !== 0) {
        totalProfit += value.reward * value.count;
      }
    }

    let roi = ((totalProfit / price) * 100).toFixed(1);

    Console.print(`3개 일치 (5,000원) - ${matchLotto[3].count}개`);
    Console.print(`4개 일치 (50,000원) - ${matchLotto[4].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchLotto[5].count}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchLotto['5 + bonus'].count}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchLotto[6].count}개`);

    Console.print(`총 수익률은 ${roi}%입니다.`);
  }
}

export default App;
