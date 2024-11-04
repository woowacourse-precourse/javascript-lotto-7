import { Console } from "@woowacourse/mission-utils";

function purchaseOutput(lottoList, lottoCount) {
  let OUTPUT_TEXT = `\n${lottoCount}개를 구매했습니다.\n`;

  lottoList.forEach(lotto => {
    const LOTTO_TEXT = lotto.join(', ');
    OUTPUT_TEXT += `[${LOTTO_TEXT}]\n`;
  });

  Console.print(OUTPUT_TEXT);
};

export default purchaseOutput;