import { countMatchedNums } from './countMatchedNums.js';

export function matchLottoNums(purchasedLotto, winningNum, bonusNum) {
  const winningNumSet = new Set(winningNum);
  const bonusNumber = bonusNum.getNumber();
  return purchasedLotto.reduce(
    (results, lotto) => {
      const matchedCount = lotto.filter(num => winningNumSet.has(num)).length;
      const hasBonusNum = lotto.includes(bonusNumber);
      countMatchedNums(results, matchedCount, hasBonusNum);
      return results;
    },
    { MATCH_3: 0, MATCH_4: 0, MATCH_5: 0, MATCH_5_BONUS: 0, MATCH_6: 0 },
  );
}
