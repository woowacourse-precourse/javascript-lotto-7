import LottoList from "../Class/LottoList.js";
import purchaseOutput from "../feature/UI/purchaseOutput.js";

function processLottoList(userPurchase) {
  /** TODO : 
   * 1. 유효한 구매액을 매개변수로 받는다
   * 2. 구매액으로 LottoList를 인스턴스화
   * 3. 생성된 구매내역, 구매 갯수를 변수에 저장
   * 4. 구매내역과 구매 갯수로 사용자게에 내역을 출력
   * 5. 구매내역, 구매 갯수를 반환환
   */

  const LOTTOS = new LottoList(userPurchase);

  const LOTTO_LIST = LOTTOS.lottoList;
  const PURCHASE_COUNT = LOTTOS.purchase;

  purchaseOutput(LOTTO_LIST, PURCHASE_COUNT);

  return { LOTTO_LIST, PURCHASE_COUNT };
};

export default processLottoList;