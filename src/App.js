import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const purchaseAmount = Number(
      await Console.readLineAsync('구입금액을 입력해주세요.\n'),
    );
    Console.print(purchaseAmount);

    if (isNaN(purchaseAmount)) {
      throw new Error('[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.');
    }
    if (purchaseAmount < 1000) {
      throw new Error('[ERROR] 최소 구입금액은 1,000원입니다.');
    }
    if (purchaseAmount > Number.MAX_SAFE_INTEGER) {
      throw new Error(
        '[ERROR] 구입금액은 9,007,199,254,740,000원을 넘어설 수 없습니다.',
      );
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.');
    }
  }
}

export default App;
