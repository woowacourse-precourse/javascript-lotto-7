function addComma(winningAmount) {
  const REGEX = /\B(?=(\d{3})+(?!\d))/g;

  const PARSED_STRING = String(winningAmount).replace(REGEX, ',');
  const RESULT_STRING = `(${PARSED_STRING}원)`;
  return RESULT_STRING;
}

function getWinningResultText(winningStats) {
  const KEYS = [...winningStats.keys()];
  const VALUES = [...winningStats.values()];

  let resultText = `\n당첨 통계\n---`;

  VALUES.forEach((args, index) => { 
    const MATCH_COUNT = KEYS[index];
    const PARSED_AMOUNT = addComma(args.winningAmount);
    const SINGLE_RESULT_STRING = `\n${MATCH_COUNT} ${PARSED_AMOUNT} - ${args.count}개`;
    resultText += SINGLE_RESULT_STRING;
  });

  return resultText;
}

export { addComma, getWinningResultText };

























const reg = /\B(?<!.\d*)(?=()+())/g