import { getLotto } from "./getLotto.js";
import { createLottoMsg } from "./createLottoMsg.js";
import { ERROR } from "../config/config.js";

export const getLottos = (lottoCount) => {
  if (lottoCount === "" || Number.isNaN(lottoCount)) {
    throw new Error(ERROR.INPUT_EMPTY);
  }
  const lottoList = [];
  let lottoStrings = "";
  for (let i = 0; i < lottoCount; i++) {
    const lotto = getLotto();
    lottoList.push(lotto);
    lottoStrings += createLottoMsg(lotto);
  }
  return [lottoList, lottoStrings];
};
