import Lotto from '../model/Lotto.js';
import { LOTTO } from '../constant/constants.js';
import { getUniqueNumbers } from './getUniqueNumbers.js';

export const getLottos = (paidMoney) => {
  const lottoCount = paidMoney / LOTTO.LOTTO_PRICE;
  const lottos = generateLottos(lottoCount);

  return lottos.map((lotto) => lotto.getNumbers().sort((a, b) => a - b));
};

const generateLottos = (lottoCount) => {
  return Array.from({ length: lottoCount }, () => createLotto());
};

const createLotto = () => {
  const lottoNumbers = getUniqueNumbers();

  return new Lotto(lottoNumbers);
};
