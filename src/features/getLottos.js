import { getLotto } from "./getLotto.js";
import { createLottoMsg } from "./createLottoMsg.js";

export const getLottos = (lottoCount) => {
  const lottoList = [];
  let lottoStrings = "";
  for (let i = 0; i < lottoCount; i++) {
    const lotto = getLotto();
    lottoList.push(lotto);
    lottoStrings += createLottoMsg(lotto);
  }
  return [lottoList, lottoStrings];
};
