import { PRINT_MESSAGE } from "../constants/helperMessages.js";
import { printOneLine } from "./console.js";

const printLottoCount = (userLotto) => {
  printOneLine(`\n${userLotto.lottoCount}${PRINT_MESSAGE.lotto.Count}`);
};

export { printLottoCount };
