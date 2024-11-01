import LottoResult from "../Class/LottoResult";
import { getMarginRate, getMarginSum } from "../feature/calculate/getMargin";
import { getWinningResultText } from "../feature/parse/parseMap";
import resultOutPut from "../feature/UI/resultOutPut";

function processLottoResult(lottoList, winNumbers, bonusNumber, purchase) {
  const LOTTO_RESULT = new LottoResult(lottoList, winNumbers, bonusNumber).getResult;
  const RESULT_TEXT = getWinningResultText(LOTTO_RESULT);
  const MARGIN_SUM = getMarginSum(LOTTO_RESULT);
  const MARGIN_RATE = getMarginRate(MARGIN_SUM, purchase);
  resultOutPut(RESULT_TEXT, MARGIN_RATE);
};

export default processLottoResult;