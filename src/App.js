import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    let price;
    while (true) {
      try {
        price = parseInt(
          await Console.readLineAsync('구입금액을 입력해 주세요.\n')
        );

        if (price % 1000 === 0) {
          break;
        }

        throw new Error(
          '[ERROR] 로또 구입 금액은 1000원 단위만 입력 가능합니다.'
        );
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottoCount = price / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);

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
  }
}

export default App;
