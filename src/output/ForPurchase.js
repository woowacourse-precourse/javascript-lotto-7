import { Console } from '@woowacourse/mission-utils';

class ForPurchase {

  static print(lottos) {
    Console.print("\n" + lottos.length + "개를 구매했습니다.");
    let result = "";

    lottos.forEach((lotto) => {
      result += JSON.stringify(lotto) + "\n";
    });

    Console.print(result);
  }

}

export default ForPurchase;

