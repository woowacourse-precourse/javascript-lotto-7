export default class {
  #prizeResults = new Map();

  save(matchedCount, hasBonusNumber) {
    if (matchedCount === 5) {
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
    const result = this.#prizeResults.get(matchedCount) || {
      withBonus: 0,
      withoutBonus: 0,
    };
    if (hasBonusNumber) {
      result.withBonus += 1;
      return;
    }
    result.withoutBonus += 1;
  }

  get() {
    return this.#prizeResults;
  }
}
