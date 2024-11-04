import { Console } from '@woowacourse/mission-utils';

class StatisticsCalculator {
	static calculateWinningStatistics(lottoTickets, winningNumbers, bonusNumber) {
		const statistics = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
		lottoTickets.forEach((ticket) => {
			const category = this.getMatchCategory(ticket, winningNumbers, bonusNumber);
			if (category) statistics[category]++;
		});
		return statistics;
	}

	static getMatchCategory(ticket, winningNumbers, bonusNumber) {
		const matchCount = ticket.getNumbers().filter((num) => winningNumbers.includes(num)).length;
		const hasBonus = ticket.getNumbers().includes(bonusNumber);

		if (matchCount === 6) return 6;
		if (matchCount === 5 && hasBonus) return 5.5;
		if (matchCount === 5) return 5;
		if (matchCount === 4) return 4;
		if (matchCount === 3) return 3;
		return null;
	}

	static printWinningStatistics(statistics) {
		Console.print("\n당첨 통계\n---");
		[3, 4, 5, 5.5, 6].forEach((match) => {
			Console.print(this.getStatisticsMessage(match, statistics[match]));
		});
	}

	static getStatisticsMessage(match, count) {
		const prizeMoney = {
			3: "5,000원",
			4: "50,000원",
			5: "1,500,000원",
			5.5: "30,000,000원",
			6: "2,000,000,000원",
		};
		const label = match === 5.5 ? "5개 일치, 보너스 볼 일치" : `${match}개 일치`;
		return `${label} (${prizeMoney[match]}) - ${count}개`;
	}

	static calculateProfitRate(statistics, purchaseAmount) {
		const totalPrize = this.calculateTotalPrize(statistics);
		return parseFloat(((totalPrize / purchaseAmount) * 100).toFixed(2));
	}

	static calculateTotalPrize(statistics) {
		const prizeMoney = {
			3: 5000,
			4: 50000,
			5: 1500000,
			5.5: 30000000,
			6: 2000000000,
		};
		return Object.entries(statistics).reduce(
			(total, [match, count]) => total + count * prizeMoney[parseFloat(match)],
			0
		);
	}

	static printProfitRate(profitRate) {
		Console.print(`\n총 수익률은 ${profitRate}%입니다.`);
	}
}

export default StatisticsCalculator;
