import {
  LOTTO_COAST_UNIT,
  LOTTO_FIFTH_PRIZE,
  LOTTO_FIRST_PRIZE,
  LOTTO_FOURTH_PRIZE,
  LOTTO_SECOND_PRIZE,
  LOTTO_THIRD_PRIZE,
} from "../constant.js";

function calculateRate(results, quantity) {
  const sumResults = results.reduce((result, sum, index) => {
    const prize = [
      LOTTO_FIFTH_PRIZE,
      LOTTO_FOURTH_PRIZE,
      LOTTO_THIRD_PRIZE,
      LOTTO_SECOND_PRIZE,
      LOTTO_FIRST_PRIZE,
    ][index];
    return result + sum * prize;
  }, 0);

  const total = quantity * LOTTO_COAST_UNIT;

  return (sumResults / total) * 100;
}
