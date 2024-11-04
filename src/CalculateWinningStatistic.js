function calculateWinningStatistics(ticketList, winningNumbers, bonusNumber) {
  const winningCounts = [0, 0, 0, 0, 0];

  ticketList.forEach((ticket) => {
    const matchedNumbersCount = ticket.filter((num) =>
      winningNumbers.includes(num)
    ).length;

    switch (matchedNumbersCount) {
      case 6:
        winningCounts[0] += 1;
        break;
      case 5:
        winningCounts[ticket.includes(bonusNumber) ? 1 : 2] += 1;
        break;
      case 4:
        winningCounts[3] += 1;
        break;
      case 3:
        winningCounts[4] += 1;
        break;
      default:
        break;
    }
  });

  return winningCounts;
}

export default calculateWinningStatistics;
