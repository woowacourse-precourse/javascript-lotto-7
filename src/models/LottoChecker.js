class LottoChecker {
  #lottos;
  #winnigNumbers;
  #bonusNumber;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winnigNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  // 당첨 결과 확인
  checkLottos() {
    const results = { 3: 0, 4: 0, 5: 0, "5B": 0, 6: 0 };
    let totalPrize = 0;

    this.#lottos.forEach((lotto) => {
      const matchResult = this.#checkLotto(lotto);
      this.#updateResult(results, matchResult);
      totalPrize += this.#calculatePrize(matchResult);
    });

    return { results, totalPrize };
  }

  // 개별 로또 당첨 결과 확인
  #checkLotto(lotto) {
    const matchCount = this.#countMatchNumbers(lotto);
    const hasBonus = this.#checkBonusNumber(lotto, matchCount);

    return { matchCount, hasBonus };
  }

  // 일치 번호 개수 확인
  #countMatchNumbers(lotto) {
    return lotto
      .getNumbers()
      .filter((number) => this.#winnigNumbers.includes(number)).length;
  }

  // 보너스 번호와 일치 여부 확인
  #checkBonusNumber(lotto, matchCount) {
    if (matchCount !== 5) return false;
    return lotto.getNumbers().includes(this.#bonusNumber);
  }

  // 당첨 결과 업데이트
  #updateResult(results, { matchCount, hasBonus }) {
    if (matchCount === 5 && hasBonus) {
      results["5B"]++;
    } else if (matchCount >= 3) {
      results[matchCount]++;
    }
  }

  // 당첨금 계산
  #calculatePrize({ matchCount, hasBonus }) {
    const prizeMap = {
      3: 5_000,
      4: 50_000,
      5: 1_500_000,
      "5B": 30_000_000,
      6: 2_000_000_000,
    };

    if (matchCount === 5 && hasBonus) return prizeMap["5B"];
    return prizeMap[matchCount] || 0;
  }
}

export default LottoChecker;
