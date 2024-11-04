import Rank from "../Rank.js";

class Winning {
  numbers;
  bonus;
  tickets;
  ranks;

  constructor(numbers, bonus, tickets) {
    this.numbers = numbers;
    this.bonus = bonus;
    this.tickets = tickets;
    this.ranks = this.createRanks();
  }
  
  createRanks() {
    const PRIZES = [5000, 50000, 1500000, 30000000, 2000000000];

    return PRIZES.map((prize) => new Rank(prize));
  }

  applyTickets(answer, bonus, tickets, ranks) {
    tickets.forEach(ticket => {
      const { MATCHING_COUNT, HAS_BONUS } = this.checkMatch(ticket, answer, bonus);
      const INDEX = this.findIndex(MATCHING_COUNT, HAS_BONUS);

      this.updateCount(ranks, INDEX);
    })
  }

  checkMatch(element, answer, bonus) {
    const MATCHING_COUNT = this.countMatches(element, answer);
    const HAS_BONUS = this.hasBonus(element, bonus);
  
    return { MATCHING_COUNT, HAS_BONUS };
  }

  findIndex(value, hasVal) {
    if (value === 3) return 0;
  
    if (value === 4) return 1;
  
    if (value === 5) {
      if (!hasVal) return 2;
  
      return 3;
    }
  
    if (value === 6) return 4;
  }

  updateCount(array, index) {
    if (!isNaN(index)) {
      array[index].count += 1;
    }
  }

  countMatches(target, answer) {
    let matchingCount = 0;
  
    for (let i = 0; i < answer.length; i++) {
      matchingCount += this.includeNumber(target, answer[i]);
    }
  
    return matchingCount;
  }

  hasBonus(target, bonus) {
    if (this.includeNumber(target, bonus) === 1) return true;
  
    return false;
  }

  includeNumber(target, number) {
    if (target.includes(number)) {
      return 1;
    }
  
    return 0;
  }
}

export default Winning;