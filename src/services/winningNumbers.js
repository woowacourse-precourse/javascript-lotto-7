function checkMatchingNumbers(lottoTickets, winningNumbers) {
  return lottoTickets.map((lottoTicket) => {
    const ticketSet = new Set(lottoTicket);
    const commonNumbers = winningNumbers.filter((number) =>
      ticketSet.has(number)
    );

    return commonNumbers.length;
  });
}

function checkBonusMatch(lottoTicket, bonusNumber) {
  return lottoTicket.some((ticket) => ticket === bonusNumber);
}

export { checkMatchingNumbers, checkBonusMatch };

// TODO: winningRank와 파일 하나로 관리 lottoResult
