import LottoResult from "../Class/LottoResult";
import Margin from "../Class/Margin";
import { getWinningResultText } from "../feature/parse/parseMap";
import resultOutPut from "../feature/UI/resultOutPut";

function processLottoResult(lottoList, winNumbers, bonusNumber, purchase) {
  const LOTTO_RESULT = new LottoResult(lottoList, winNumbers, bonusNumber).getResult;
  const MARGIN = new Margin(LOTTO_RESULT, purchase).rate;
  
  const RESULT_TEXT = getWinningResultText(LOTTO_RESULT);
  

  resultOutPut(RESULT_TEXT, MARGIN)
};

export default processLottoResult;