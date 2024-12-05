import { MissionUtils } from "@woowacourse/mission-utils";

export const createLottoNumberArray = (colunmNumber) => {
  let lottoNumbersArray = [];
  for (let i = 0; i < colunmNumber; i++) {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumbersArray = [...lottoNumbersArray, randomNumber];
  }
  return lottoNumbersArray;
};