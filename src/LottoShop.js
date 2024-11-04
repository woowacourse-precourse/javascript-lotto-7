import Validate from './Validate.js';
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

const LottoShop = {
  buyLottos(money) {
    Validate.validateMoney(money);
    const lottoCount = parseInt(money / 1000, 10);

    return Array.from({ length: lottoCount }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(randomNumbers);
    });
  },
  getBuyLottosInfo(lottos) {
    let result = `${lottos.length}개를 구매했습니다\n`;
    result += lottos
      .map((boughtLotto) => boughtLotto.getNumbersWithSquareBrackets())
      .join('\n');
    return result;
  },
};
export default LottoShop;
