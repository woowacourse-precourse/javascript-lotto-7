import LOTTO_MESSAGE from '../constants/LottoMessage.js';
import LOTTO from '../constants/Lotto.js';

const RANK_TO_COUNT = {
  1: 6,
  2: 5,
  3: 5,
  4: 4,
  5: 3,
  0: 0,
};

function generateSummaryLine(key, result) {
  const count = RANK_TO_COUNT[key]; // 몇개 일치 하는지
  const matchCount = result[key]; // n등수가 몇개 존재 하는지
  let isBonus = false;
  if (key === '2') isBonus = true;

  return (
    LOTTO_MESSAGE.RESULT_MATCH(count, isBonus) +
    LOTTO_MESSAGE.RESULT_PRIZE(LOTTO[key]) +
    LOTTO_MESSAGE.RESULT_MATCH_COUNT(matchCount)
  );
}

function generateSummary(result) {
  let summary = '';
  const keys = Object.keys(result).reverse();
  keys.forEach((key) => {
    if (key !== '0') {
      const line = generateSummaryLine(key, result);
      summary += `${line}`;
    }
    if (key !== '0' && key !== '1') {
      summary += '\n';
    }
  });
  return summary;
}

export default generateSummary;
