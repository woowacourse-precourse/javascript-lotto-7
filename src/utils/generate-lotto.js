import { Random } from '@woowacourse/mission-utils';
import { LOTTO_TICKET_PRICE } from '../constants/constants.js';
import Lotto from '../Lotto.js';

const calculateLottoCount = (amount) => amount / LOTTO_TICKET_PRICE;

const generateUniqueLottoNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

const sortLottoNumbers = (lottoNumbers) => lottoNumbers.sort((a, b) => a - b);

const generateLotto = () => {
  const lottoNumbers = generateUniqueLottoNumbers();
  const sortedLottoNumbers = sortLottoNumbers(lottoNumbers);

  return new Lotto(sortedLottoNumbers);
};

const generateLottoList = (amount) => {
  const lottoCount = calculateLottoCount(amount);
  const lottos = [];

  for (let i = 0; i < lottoCount; i++) {
    lottos.push(generateLotto());
  }

  return lottos;
};

export default generateLottoList;
