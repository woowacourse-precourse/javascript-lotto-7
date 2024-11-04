class LottoChecker {
    static checkLotto(lottos, winningNumbers, bonusNumber) {
        return lottos.map((lotto) => {
            const matchedCount = lotto.getNumbers().filter(num => winningNumbers.includes(num)).length;
            const hasBonus = lotto.getNumbers().includes(bonusNumber);
            return { matchedCount, hasBonus };
        });
    }
}

export default LottoChecker;
