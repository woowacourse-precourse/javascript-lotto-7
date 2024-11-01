const { Console } = require("@woowacourse/mission-utils");

function resultOutPut(winningResult, marginResult) {
  const MARGIN_RESULT_TEXT = `${winningResult}\n총 수익률은 ${marginResult}%입니다.`;
  Console.print(MARGIN_RESULT_TEXT);
};

export default resultOutPut