import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../constants/helperMessages.js";
import { printOneLine } from "./console.js";

const printLottoCount = (userLotto) => {
  printOneLine(`\n${userLotto.lottoCount}${PRINT_MESSAGE.lotto.Count}`);
};

const printLottoList = (userLotto) => {
  const lottoList = userLotto.lottos;
  lottoList.forEach((lotto) => {
    printOneLine(lotto.printNumbers());
  });
};

export { printLottoCount, printLottoList };
