import { PRIZE_NAME, PRIZE_CHECK, PRIZE_AMOUNT } from "../constant/Data.js";

class GameResult {
  #prizeStat;
  #prizeTotalMoney;
  #benefitRate;

  constructor() {
    this.#prizeStat = Object.values(PRIZE_NAME).reduce((acc, name) => {
      acc[name] = 0;
      return acc;
    }, {});
    this.#prizeTotalMoney = 0;
    this.#benefitRate = "";
  }

  gameResult(amount, generate_lottos, winning_lotto, bonus_number) {
    this.calculatePrizeStat(generate_lottos, winning_lotto, bonus_number);
    this.calculateTotalMoney();
    this.calculateBenefitRate(amount);
    return { prizeStat: this.#prizeStat, benefitRate: this.#benefitRate };
  }

  calculatePrizeStat(generate_lottos, winning_lotto, bonus_number) {
    generate_lottos.forEach((player_lotto) => {
      const matching_count = this.matchingLottoCheck(player_lotto, winning_lotto);
      const matching_bonus = this.matchingBonusCheck(player_lotto, bonus_number);
      this.prizeStatCheck(matching_count, matching_bonus);
    });
  }

  matchingLottoCheck(player_lotto, winning_lotto) {
    return player_lotto.filter((number) => winning_lotto.includes(number)).length;
  }

  matchingBonusCheck(player_lotto, bonus_number) {
    return player_lotto.includes(parseInt(bonus_number));
  }

  prizeStatCheck(matching_count, matching_bonus) {
    if (matching_count === PRIZE_CHECK.prizeFirst) ++this.#prizeStat[PRIZE_NAME.first];
    if (matching_count === PRIZE_CHECK.prizeSecond && matching_bonus) ++this.#prizeStat[PRIZE_NAME.second];
    if (matching_count === PRIZE_CHECK.prizeThird && !matching_bonus) ++this.#prizeStat[PRIZE_NAME.third];
    if (matching_count === PRIZE_CHECK.prizeFourth) ++this.#prizeStat[PRIZE_NAME.fourth];
    if (matching_count === PRIZE_CHECK.prizeFifth) ++this.#prizeStat[PRIZE_NAME.fifth];
  }

  calculateTotalMoney() {
    this.#prizeTotalMoney = Object.keys(this.#prizeStat).reduce((total, prize) => {
      return total + PRIZE_AMOUNT[prize] * this.#prizeStat[prize];
    }, 0);
  }

  calculateBenefitRate(amount) {
    this.#benefitRate = ((this.#prizeTotalMoney / amount) * 100).toFixed(1);
  }
}

export default GameResult;
