import { MissionUtils } from "@woowacourse/mission-utils";

function generateLottoNumbers(min, max, number) {
  return MissionUtils.Random.pickUniqueNumbersInRange(min, max, number);
};

function formatPercentage(input, amount) {
  const percentage = (amount / input) * 100;
  if (percentage % 100 === 0) {
    return Number(percentage);
  }

  return percentage.toFixed(1);
}

export {
  generateLottoNumbers,
  formatPercentage,
};