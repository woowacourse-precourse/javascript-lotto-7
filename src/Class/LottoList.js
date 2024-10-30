import { Random } from "@woowacourse/mission-utils";

class LottoList {
/** TODO :
 *  field : 
 *    purchase : 구입금액을 1000으로 나눈 값
 *    lottoList : 생성된 구매 로또의 배열
 *  constuctor :
 *    purchase 필드 값을 purchase 값을 1000으로 나눈 값으로 초기화
 *    해당 값의 갯수 만큼 로또를 생성
 *    생성된 로또 배열로 lottoList를 초기화
 *  method :
 *    1. 배열을 오름 차순으로 정렬하는 기능
 *    2. 하나의 로또를 생성하는 기능
 *    3. purchase 갯수 만큼 로또를 생성하는 기능
 */

  purchase;
  lottoList;

  constructor(purchase) {
    this.purchase = purchase / 1000;
    this.lottoList = this.#buyLottos(this.purchase);
  }

  #sortAscending(lotto) {
    const ORDERED_LOTTO = [...lotto].sort((a, b) => a - b);
    return ORDERED_LOTTO;
  }


  #createLotto() {
    const SINGLE_LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6);
    const ORDERED_LOTTO = this.#sortAscending(SINGLE_LOTTO);

    return ORDERED_LOTTO;
  };

  #buyLottos(purchase) {
    const LOTTO_LIST = [];

    while(LOTTO_LIST.length < purchase) {
      const LOTTO = this.#createLotto();
      LOTTO_LIST.push(LOTTO);
    };
    
    return LOTTO_LIST;
  }
}

export default LottoList;