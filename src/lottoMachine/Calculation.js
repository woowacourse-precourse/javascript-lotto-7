export class Calculation {
  getLottoTicketCount(purchasePrice) {
    return purchasePrice / 1000;
  }

  getRateOfReturn(rankCounts, purchasePrice) {
    const totalPrize = Object.values(rankCounts).reduce(
      (acc, rank) => acc + rank.count * rank.prize,
      0,
    );
    const calculateRateOfReturn = ((totalPrize / purchasePrice) * 100).toFixed(1);
    const rateOfReturn = new Intl.NumberFormat().format(calculateRateOfReturn);

    return rateOfReturn;
  }
}
