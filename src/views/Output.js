import { Console } from '@woowacourse/mission-utils';

class Output {
  printLottoCount(count) {
    Console.print(`${count}개를 구매했습니다.`);
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }
}

export default Output;
