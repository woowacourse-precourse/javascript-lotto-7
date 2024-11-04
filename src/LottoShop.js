import Validate from './utils/Validate.js';
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';
import outputMessages from './constants/outputMessages.js';
import lottoConstants from './constants/lottoConstants.js';

const LottoShop = {
  buyLottos(money) {
    Validate.validateMoney(money);
    const lottoCount = parseInt(money / 1000, 10);

    return Array.from({ length: lottoCount }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(
        lottoConstants.MIN_NUM,
        lottoConstants.MAX_NUM,
        lottoConstants.LENGHT
      );
      return new Lotto(randomNumbers);
    });
  },
  getBuyLottosInfo(lottos) {
    let result = outputMessages.INFO_PREFIX(lottos.length);
    result += lottos
      .map((boughtLotto) => boughtLotto.getNumbersWithSquareBrackets())
      .join('\n');
    return result;
  },
};
export default LottoShop;
