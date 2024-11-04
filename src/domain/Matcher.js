
class Matcher {
    #lottos;
    #matcher;

    constructor(lottos, winningNumbers, bonusNumber) {
        this.#lottos = lottos;
        this.#matcher = this.#generateMatcher(
            this.#lottos, winningNumbers, bonusNumber
        );
    }

    #generateMatcher(lottos, winningNumbers, bonusNumber) {
        const matchResult = new Array(7).fill(0);
        let matchFiveNumbersWithBonusNumber = 0;

        lottos.forEach(lotto => {
            const lottoNumbers = lotto.getNumbers();
            const matchCount = this.#getIntersectionCounts(lottoNumbers, winningNumbers);
            matchResult[matchCount] += 1;

            if (this.#isContainsBonusNumber(matchCount, lottoNumbers, bonusNumber)) {
                matchFiveNumbersWithBonusNumber += 1;
            }
        });
        return { matchResult, matchFiveNumbersWithBonusNumber };
    }

    #getIntersectionCounts(lottoNumbers, winningNumbers) {
        return winningNumbers.filter(number => lottoNumbers.includes(number)).length;
    }

    #isContainsBonusNumber(matchCount, lotto, bonusNumber) {
        if (matchCount === 5 && lotto.includes(bonusNumber)) {
            return true;
        }
    }

    getResults() {
        return this.#matcher;
    }
}

export default Matcher;