import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../constants/helperMessages.js";
import { printOneLine } from "./console.js";
import { LOTTO_RESULT_INFO, WINNER_PRICE } from "../constants/lotto.js";

const formatWithCommas = (input) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatRateOfReturn = (rateOfReturn) => {
  const roundedRate = Math.round(rateOfReturn * 10) / 10;
  return roundedRate.toFixed(1);
};

const printLottoCount = (userLotto) => {
  printOneLine(`${userLotto.lottoCount}${PRINT_MESSAGE.lotto.Count}`);
};

const printLottoList = (userLotto) => {
  const lottoList = userLotto.lottos;
  lottoList.forEach((lotto) => {
    printOneLine(lotto.printNumbers());
  });
};

const printMatchInfo = (userLotto) => {
  const matchInfo = userLotto.matchInfo;
  printOneLine(PRINT_MESSAGE.lotto.Match);
  for (let i = 5; i > 0; i--) {
    printOneLine(
      `${LOTTO_RESULT_INFO[i]} 일치 (${formatWithCommas(
        WINNER_PRICE[i]
      )}원) - ${matchInfo[i]}개`
    );
  }
};

const printRateOfReturn = (rate) => {
  const formattedRate = formatRateOfReturn(rate);
  printOneLine(
    ` ${PRINT_MESSAGE.lotto.rateOfReturn(formatWithCommas(formattedRate))}`
  );
};

export {
  printLottoCount,
  printLottoList,
  printMatchInfo,
  formatRateOfReturn,
  printRateOfReturn,
};
