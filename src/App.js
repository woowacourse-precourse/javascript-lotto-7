import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    while (true) {
      try {
        const price = await Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
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
  }
}

export default App;
