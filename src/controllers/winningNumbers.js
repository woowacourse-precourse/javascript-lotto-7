function checkMatchingNumbers(lottoTickets, winningNumbers) {
  return lottoTickets.map((lottoTicket) => {
    const lottoTicket = new Set(lottoTicket);
    const commonNumbers = winningNumbers.filter((number) =>
      lottoTicket.hax(number)
    );

    return commonNumbers.length;
  });
}

function checkBonusMatch(lottoTicket, bonusNumber) {
  return lottoTicket.some((ticket) => ticket === bonusNumber);
}

export { checkMatchingNumbers, checkBonusMatch };
