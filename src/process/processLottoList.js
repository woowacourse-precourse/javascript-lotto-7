import LottoList from "../Class/LottoList.js";
import purchaseOutput from "../feature/UI/purchaseOutput.js";

function processLottoList(userPurchase) {
  const LOTTOS = new LottoList(userPurchase);

  const LOTTO_LIST = LOTTOS.lottoList;
  const PURCHASE_COUNT = LOTTOS.purchase;

  purchaseOutput(LOTTO_LIST, PURCHASE_COUNT);

  return LOTTO_LIST;
};

export default processLottoList;