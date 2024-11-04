import { LOTTO_SPLITTER } from "../../constant/LottoConfig.js";

const parse = (rawNumbers) => {
  const numbers = rawNumbers.split(LOTTO_SPLITTER);
  return numbers.map((number) => Number(number.trim()));
};

export default parse;
