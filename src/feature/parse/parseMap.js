function addComma(winningAmount) {
  const REGEX = /\B(?=(\d{3})+(?!\d))/g;

  const PARSED_STRING = String(winningAmount).replace(REGEX, ',');
  const RESULT_STRING = `(${PARSED_STRING}원)`;
  return RESULT_STRING;
}

export { addComma };

























const reg = /\B(?<!.\d*)(?=()+())/g