import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../constants/helperMessages.js";
import { printOneLine } from "./console.js";
import { LOTTO_RESULT_INFO, WINNER_PRICE } from "../constants/lotto.js";

const printLottoCount = (userLotto) => {
  printOneLine(`\n${userLotto.lottoCount}${PRINT_MESSAGE.lotto.Count}`);
};

const printLottoList = (userLotto) => {
  const lottoList = userLotto.lottos;
  lottoList.forEach((lotto) => {
    printOneLine(lotto.printNumbers());
  });
};

const formatWithCommas = (input) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const printMatchInfo = (userLotto) => {
  const matchInfo = userLotto.matchInfo;
  for (let i = 5; i > 0; i--) {
    printOneLine(
      `${LOTTO_RESULT_INFO[i]} 일치 (${formatWithCommas(
        WINNER_PRICE[i]
      )}원) - ${matchInfo[i]}개`
    );
  }
};

export { printLottoCount, printLottoList, printMatchInfo };
