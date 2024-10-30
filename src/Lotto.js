const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  constructor(ticketPrice = 1000) {
    this.ticketPrice = ticketPrice;
    this.lottoTickets = [];
  }

  purchaseTickets(amount) {
    if (amount % this.ticketPrice !== 0) {
      throw new Error("[ERROR] The purchase amount must be a multiple of 1,000.");
    }
    const numOfTickets = amount / this.ticketPrice;
    this.lottoTickets = Array.from({ length: numOfTickets }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
    return this.lottoTickets;
  }
}

module.exports = Lotto;
