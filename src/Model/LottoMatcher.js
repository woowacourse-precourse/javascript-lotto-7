import { ERROR_MESSAGE } from '../constants/messages.js';
import { formattedError } from '../utils/error.js';
import { LottoStatistics } from './LottoStatistic.js';

// 당첨 번호 매칭 담당
class NumberMatcher {
	constructor(winningNumbers) {
		this.winningNumbers = winningNumbers;
	}

	countMatchingNumbers(lotto) {
		return lotto.lottoNumbers.reduce(
			(count, number) => count + this.isMatchingNumber(number),
			0
		);
	}

	isMatchingNumber(number) {
		if (this.winningNumbers.includes(number)) {
			return 1;
		}
		return 0;
	}
}

// 보너스 번호 처리 담당
class BonusMatcher {
	constructor(bonusNumber) {
		this.bonusNumber = bonusNumber;
	}

	checkBonusNumber(lotto) {
		return lotto.includes(this.bonusNumber);
	}

	isDuplicatedWithWinningNumbers(winningNumbers) {
		if (winningNumbers.includes(this.bonusNumber)) {
			formattedError(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
		}
	}
}

// 메인 클래스
export class LottoMatcher {
	#lottos;
	#numberMatcher;
	#bonusMatcher;
	#statistics;
	#money;

	constructor(lottos, winningNumbers, bonusNumber, money) {
		this.#lottos = lottos;
		this.#numberMatcher = new NumberMatcher(winningNumbers);
		this.#bonusMatcher = new BonusMatcher(bonusNumber);
		this.#statistics = new LottoStatistics();
		this.#money = money;
	}

	matchLottos() {
		this.#bonusMatcher.isDuplicatedWithWinningNumbers(
			this.#numberMatcher.winningNumbers
		);

		this.#lottos.forEach((lotto) => {
			const matchCount = this.#numberMatcher.countMatchingNumbers(lotto);
			const hasBonus = this.#bonusMatcher.checkBonusNumber(lotto.lottoNumbers);
			this.#statistics.updateStatistics(matchCount, hasBonus);
			this.#statistics.updateBenefit(this.#money);
		});
	}

	get statistics() {
		return this.#statistics;
	}
}
