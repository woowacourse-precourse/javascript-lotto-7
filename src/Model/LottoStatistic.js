import {
	BONUS_WINNING_PLACE,
	MIN_WINNING_PLACE,
	PRIZE_MONEY,
} from '../constants/numbers.js';

export class LottoStatistics {
	#winningCount;
	#bonusCount;
	#benefitRate;
	constructor() {
		this.#winningCount = new Array(4).fill(0);
		this.#bonusCount = 0;
		this.#benefitRate = 0;
	}

	updateStatistics(matchCount, hasBonus) {
		if (this.isWinningTicket(matchCount)) {
			this.#winningCount[matchCount - MIN_WINNING_PLACE] += 1;
		}

		if (matchCount === BONUS_WINNING_PLACE && hasBonus) {
			this.#bonusCount += 1;
		}
	}

	isWinningTicket(matchCount) {
		return matchCount >= MIN_WINNING_PLACE;
	}

	updateBenefit(purchaseMoney) {
		const totalPrizeMoney = this.#calculateTotalPrizeMoney();
		this.#benefitRate = this.#calculateBenefitRate(
			totalPrizeMoney,
			purchaseMoney
		);
	}

	#calculateTotalPrizeMoney() {
		const normalPrizeMoney = this.#calculateNormalPrizeMoney();
		const bonusPrizeMoney = this.#calculateBonusPrizeMoney();

		return normalPrizeMoney + bonusPrizeMoney;
	}

	#calculateNormalPrizeMoney() {
		return this.#winningCount.reduce((total, count, index) => {
			return total + this.#getPrizeMoneyByRank(index) * count;
		}, 0);
	}

	#calculateBonusPrizeMoney() {
		return PRIZE_MONEY.BONUS_MATCHED * this.#bonusCount;
	}

	#getPrizeMoneyByRank(index) {
		const prizeMap = {
			0: PRIZE_MONEY.THREE_MATCHED,
			1: PRIZE_MONEY.FOUR_MATCHED,
			2: PRIZE_MONEY.FIVE_MATCHED,
			3: PRIZE_MONEY.SIX_MATCHED,
		};
		return prizeMap[index];
	}

	#calculateBenefitRate(totalPrizeMoney, purchaseMoney) {
		return (totalPrizeMoney / purchaseMoney) * 100;
	}

	get benefitRate() {
		return this.#benefitRate;
	}
}
