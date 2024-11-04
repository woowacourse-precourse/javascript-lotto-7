import { Random } from "@woowacourse/mission-utils";

class LottoList {
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