import {
  LOTTO_PRICE,
  LOTTO_NUM_LENGTH,
  RANDOM_RANGE,
  PRICE_RANGE,
} from "./constants.js";
import {
  PRICE_ERROR,
  LOTTO_NUM_ERROR,
  BONUS_NUM_ERROR,
  ONLY_NUM_ERROR,
} from "./error.js";

import { print } from "./utils.js";

export const handlePrice = (input) => {
  const parsedInput = Number(input);

  if (parsedInput < LOTTO_PRICE) {
    print(PRICE_ERROR.less);
    return false;
  }
  if (parsedInput > PRICE_RANGE.max) {
    print(PRICE_ERROR.over);
    return false;
  }
  if (isNaN(parsedInput)) {
    print(ONLY_NUM_ERROR);
    return false;
  }

  return true;
};

export const handleLottoNumbers = (input) => {
  let parsedInputArray = input
    .split(",")
    .filter(Boolean)
    .map((num) => Number(num));

  if (parsedInputArray.length !== LOTTO_NUM_LENGTH) {
    print(LOTTO_NUM_ERROR.length);
    return false;
  }

  if (parsedInputArray.length !== new Set(parsedInputArray).size) {
    print(LOTTO_NUM_ERROR.duplicated);
    return false;
  }

  if (
    parsedInputArray.some(
      (num) => num > RANDOM_RANGE.max || num < RANDOM_RANGE.min
    )
  ) {
    print(LOTTO_NUM_ERROR.range);
    return false;
  }

  if (parsedInputArray.some((num) => isNaN(num))) {
    print(ONLY_NUM_ERROR);
    return false;
  }
  return true;
};

export const handleBonusNumber = (lottoNumbers, input) => {
  const parsedInput = Number(input);

  if (isNaN(parsedInput) || !Number.isInteger(parsedInput)) {
    print(ONLY_NUM_ERROR);
    return false;
  }

  if (parsedInput > RANDOM_RANGE.max || parsedInput < RANDOM_RANGE.min) {
    print(LOTTO_NUM_ERROR.range);
    return false;
  }

  if (lottoNumbers.includes(input)) {
    print(BONUS_NUM_ERROR.duplicated);
    return false;
  }
  return true;
};
