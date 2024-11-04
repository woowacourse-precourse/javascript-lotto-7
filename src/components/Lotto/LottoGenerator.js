import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import RULES from '../../resources/RULES.js';

export default function (inputMoney) {
  const quantity = parseInt(inputMoney / RULES.LOTTO_PRICE);
  const lottoList = [];
  for (let i = 0; i < quantity; i += 1) {
    lottoList.push(
      new Lotto(
        Random.pickUniqueNumbersInRange(
          RULES.PICK_RANGE_START,
          RULES.PICK_RANGE_END,
          RULES.TOTAL_PICK_COUNT,
        ),
      ),
    );
  }
  return lottoList;
}
