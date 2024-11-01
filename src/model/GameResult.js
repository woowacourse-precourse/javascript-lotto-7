import { PRIZE_NAME, PRIZE_CHECK, PRIZE_MONEY } from "../constant/Data.js";

class GameResult {
  #prizeStat;
  #prizeTotalMoney;
  #benefitRate;

  constructor() {
    this.#prizeStat = {
      [PRIZE_NAME.first]: 0,
      [PRIZE_NAME.second]: 0,
      [PRIZE_NAME.third]: 0,
      [PRIZE_NAME.fourth]: 0,
      [PRIZE_NAME.fifth]: 0,
    };
    this.#prizeTotalMoney = 0;
    this.#benefitRate = "";
  }

  addPrizeStat(new_lotto, winning_lotto, bonus) {
    new_lotto.forEach((player_lotto) => {
      const same_lotto_count = this.sameLottoCheck(player_lotto, winning_lotto);
      const same_bonus = this.sameBonusCheck(player_lotto, bonus);
      this.prizeStatCheck(same_lotto_count, same_bonus);
    });
  }

  sameLottoCheck(player_lotto, winning_lotto) {
    return player_lotto.filter((number) => winning_lotto.includes(number)).length;
  }

  sameBonusCheck(player_lotto, bonus) {
    return player_lotto.includes(bonus);
  }

  prizeStatCheck(same_lotto_count, same_bonus) {
    if (same_lotto_count === PRIZE_CHECK.prizeFirst) ++this.#prizeStat[PRIZE_NAME.first];
    if (same_lotto_count === PRIZE_CHECK.prizeSecond && same_bonus) ++this.#prizeStat[PRIZE_NAME.second];
    if (same_lotto_count === PRIZE_CHECK.prizeThird && !same_bonus) ++this.#prizeStat[PRIZE_NAME.third];
    if (same_lotto_count === PRIZE_CHECK.prizeFourth) ++this.#prizeStat[PRIZE_NAME.fourth];
    if (same_lotto_count === PRIZE_CHECK.prizeFifth) ++this.#prizeStat[PRIZE_NAME.fifth];
  }

  addTotalMoney() {
    this.#prizeTotalMoney +=
      PRIZE_MONEY.prizeFirst * this.#prizeStat[PRIZE_NAME.first] +
      PRIZE_MONEY.prizeSecond * this.#prizeStat[PRIZE_NAME.second] +
      PRIZE_MONEY.prizeThird * this.#prizeStat[PRIZE_NAME.third] +
      PRIZE_MONEY.prizeFourth * this.#prizeStat[PRIZE_NAME.fourth] +
      PRIZE_MONEY.prizeFifth * this.#prizeStat[PRIZE_NAME.fifth];
  }

  addBenefitRate(money) {
    this.#benefitRate = ((this.#prizeTotalMoney / money) * 100).toFixed(1) + "%";
  }

  gameResult(money, new_lotto, winning_lotto, bonus) {
    this.addPrizeStat(new_lotto, winning_lotto, bonus);
    this.addTotalMoney();
    this.addBenefitRate(money);
    return { prizeStat: this.#prizeStat, benefitRate: this.#benefitRate };
  }
}

export default GameResult;
