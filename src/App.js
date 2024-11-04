import processPurchase from "./process/processPurchase.js";
import processLottoList from "./process/processLottoList.js";
import processWinNumber from "./process/processWinNumber.js";
import processBonusNumber from "./process/processBonusNumber.js";
import processLottoResult from "./process/processLottoResult.js";

class App {
  async run() {
  const PURCHASE = await processPurchase();
  const LOTTO_LIST = processLottoList(PURCHASE);
  const WIN_NUMBERS = await processWinNumber();
  const BONUS_NUMBER = await processBonusNumber(WIN_NUMBERS);
  processLottoResult(LOTTO_LIST, WIN_NUMBERS, BONUS_NUMBER, PURCHASE);
  };
}

export default App;
