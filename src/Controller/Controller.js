class Controller {
  async run() {
    const price = await getInput("구입금액을 입력해 주세요.");
    const validatedPrice = validatePrice(price);

    const lottoTickets = generateLottoTickets(validatedPrice);
    printLottoTickets(lottoTickets);

    const winningNumber = await getInput("당첨 번호를 입력해 주세요.");
    const validatedWinningNumber = validateWinnigNumber(winningNumber);

    const bonusNumber = await getInput("보너스 번호를 입력해 주세요.");
    const validatedBonusNumber = validateBonusNumber(bonusNumber);

    const winningResult = calculateWinningResult(
      lottoTickets,
      validatedWinningNumber,
      validatedBonusNumber
    );
    printWinningResult(winningResult);

    const lottoYield = calculateLottoYield(winningResult);
    printLottoYield(lottoYield);
  }
}

export default Controller();
