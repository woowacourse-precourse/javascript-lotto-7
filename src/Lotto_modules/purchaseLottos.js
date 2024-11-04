import Lotto from '../Lotto.js';
import { printLottos } from '../io/printResult.js';

function purchaseLottos(purchaseAmount) {
  const lottoCount = purchaseAmount / 1000;
  const lottos = Array.from({ length: lottoCount }, () => new Lotto());
  printLottos(lottos);
  return lottos;
}

export default purchaseLottos;
