import { ERROR_MESSAGE } from '../constants/messages.js';
import {
	BONUS_WINNING_PLACE,
	MIN_WINNING_PLACE,
} from '../constants/numbers.js';
import { formattedError } from '../utils/error.js';

// 당첨 번호 매칭 담당
class NumberMatcher {
	constructor(winningNumbers) {
		this.winningNumbers = winningNumbers;
	}

	countMatchingNumbers(lotto) {
		return lotto.reduce(
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

// 당첨 통계 관리 담당
class WinningStatistics {
	constructor() {
		this.winningCount = new Array(4).fill(0);
		this.bonusCount = 0;
	}

	updateStatistics(matchCount, hasBonus) {
		if (this.isWinningTicket(matchCount)) {
			this.winningCount[matchCount - MIN_WINNING_PLACE] += 1;
		}

		if (matchCount === BONUS_WINNING_PLACE && hasBonus) {
			this.bonusCount += 1;
		}
	}

	isWinningTicket(matchCount) {
		return matchCount >= MIN_WINNING_PLACE;
	}
}

// 메인 클래스
export class LottoMatcher {
	constructor(lottos, winningNumbers, bonusNumber) {
		this.lottos = lottos;
		this.numberMatcher = new NumberMatcher(winningNumbers);
		this.bonusMatcher = new BonusMatcher(bonusNumber);
		this.statistics = new WinningStatistics();
	}

	matchLottos() {
		this.bonusMatcher.isDuplicatedWithWinningNumbers(
			this.numberMatcher.winningNumbers
		);

		this.lottos.forEach((lotto) => {
			const matchCount = this.numberMatcher.countMatchingNumbers(lotto);
			const hasBonus = this.bonusMatcher.checkBonusNumber(lotto);
			this.statistics.updateStatistics(matchCount, hasBonus);
		});
	}
}
