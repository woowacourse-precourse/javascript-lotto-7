export class Calculation {
  getLottoTicketCount(purchasePrice) {
    return purchasePrice / 1000;
  }

  getRateOfReturn(rankCounts, purchasePrice) {
    const totalPrize = Object.values(rankCounts).reduce(
      (acc, rank) => acc + rank.count * rank.prize,
      0,
    );

    const rateOfReturn = ((totalPrize / purchasePrice) * 100).toFixed(1);

    return rateOfReturn;
  }
}
