import { EQUAL_FIVE, EQUAL_FIVE_BONUS, ZERO } from "../Constant.js";

const calculateEqual = (lotto, winningLotto, bonusNumber) => {
  const equalCount = winningLotto.equalWinning(lotto);
  const bonus = false;

  if (equalCount == EQUAL_FIVE) {
    bonus = lotto.checkCheck(bonusNumber);
  }
  if (bonus == true) {
    equalCount = EQUAL_FIVE_BONUS;
  }

  return equalCount;
};

export const calculateEquals = (lottos, winningLotto, bonusNumber) => {
  const equalCounts = new Array(EQUAL_FIVE_BONUS + 1).fill(ZERO);

  for (let i = 0; i < lottos.length; i++) {
    const equalCount = calculateEqual(lottos[i], winningLotto, bonusNumber);

    equalCounts[equalCount] += 1;
  }

  return equalCounts;
};
