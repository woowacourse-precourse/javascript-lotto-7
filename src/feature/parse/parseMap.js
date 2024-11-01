function addComma(winningAmount) {
  const REGEX = /\B(?=(\d{3})+(?!\d))/g;

  const COMMA_WINNING_AMOUNT = winningAmount.map(amount => {
    const AMOUNT = String(amount);
    const PARSED_AMOUNT = AMOUNT.replace(REGEX, ',');
    return PARSED_AMOUNT;
  });
  return COMMA_WINNING_AMOUNT;
}

export { addComma };

























const reg = /\B(?<!.\d*)(?=()+())/g