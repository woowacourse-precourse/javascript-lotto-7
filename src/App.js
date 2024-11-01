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
      Console.print(lottos[i]);
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
  }
}

export default App;
