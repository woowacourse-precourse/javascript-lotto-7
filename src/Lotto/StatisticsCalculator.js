import { Console } from '@woowacourse/mission-utils';

class StatisticsCalculator {
	static calculateWinningStatistics(lottoTickets, winningNumbers, bonusNumber) {
		const statistics = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

		lottoTickets.forEach((ticket) => {
			const matchCount = ticket.getNumbers().filter((num) => winningNumbers.includes(num)).length;
			const hasBonus = ticket.getNumbers().includes(bonusNumber);

			if (matchCount === 6) statistics[6]++;
			else if (matchCount === 5 && hasBonus) statistics[5.5]++;
			else if (matchCount === 5) statistics[5]++;
			else if (matchCount === 4) statistics[4]++;
			else if (matchCount === 3) statistics[3]++;
		});

		return statistics;
	}

	static printWinningStatistics(statistics) {
		Console.print("\n당첨 통계\n---");
		Console.print(`3개 일치 (5,000원) - ${statistics[3]}개`);
		Console.print(`4개 일치 (50,000원) - ${statistics[4]}개`);
		Console.print(`5개 일치 (1,500,000원) - ${statistics[5]}개`);
		Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics[5.5]}개`);
		Console.print(`6개 일치 (2,000,000,000원) - ${statistics[6]}개`);
	}

	static calculateProfitRate(statistics, purchaseAmount) {
		const prizeMoney = {
			3: 5000,
			4: 50000,
			5: 1500000,
			5.5: 30000000,
			6: 2000000000,
		};

		let totalPrize = 0;
		for (const [match, count] of Object.entries(statistics)) {
			totalPrize += count * prizeMoney[parseFloat(match)];
		}

		return parseFloat(((totalPrize / purchaseAmount) * 100).toFixed(2));
	}

	static printProfitRate(profitRate) {
		Console.print(`\n총 수익률은 ${profitRate}%입니다.`);
	}
}

export default StatisticsCalculator;
