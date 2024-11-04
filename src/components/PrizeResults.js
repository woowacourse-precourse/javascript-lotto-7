import RULES from '../resources/RULES.js';

export default class {
  #prizeResults = new Map();

  save(matchedCount, hasBonusNumber) {
    if (matchedCount === RULES.MATCH_COUNT_FOR_BONUS) {
      this.saveWithBonus(matchedCount, hasBonusNumber);
      return;
    }
    this.#prizeResults.set(
      matchedCount,
      (this.#prizeResults.get(matchedCount) || 0) + 1,
    );
  }

  // 당첨 번호 5개와 보너스 번호를 추가로 맞춘 경우
  saveWithBonus(matchedCount, hasBonusNumber) {
    const bonusResult = this.#prizeResults.get(matchedCount) || {
      withBonus: 0,
      withoutBonus: 0,
    };
    if (hasBonusNumber) {
      bonusResult.withBonus += 1;
    } else {
      bonusResult.withoutBonus += 1;
    }
    this.#prizeResults.set(matchedCount, bonusResult);
  }

  get() {
    return this.#prizeResults;
  }
}
