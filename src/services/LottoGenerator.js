import { Random } from "@woowacourse/mission-utils";

export const getLottoCount = (lottoPrice) => {
  const lottoNums = lottoPrice / 1000;
  return lottoNums;
};

export const getLottoNums = (lottoNums) => {
  const lottoArrs = [];
  for (let i = 0; i < lottoNums; i++) {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoArrs.push(lottoNum);
  }
  return lottoArrs;
};

export const getWinningNumbers = (winningNums) => {
  const numbers = winningNums.split(",").map((num) => Number(num.trim()));
  return numbers;
};
