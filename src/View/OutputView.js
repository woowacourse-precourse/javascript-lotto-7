import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';
import { BONUS_WINNING_PLACE, PRIZE_MONEY } from '../constants/numbers.js';
import { formatCurrency, formatRate } from '../utils/number.js';

export class OutputView {
	printLottoNumbers(lottos) {
		Console.print(`${lottos.length}개를 구매했습니다.`);
		lottos.forEach((lotto) => {
			Console.print(`[${lotto.lottoNumbers.join(', ')}]`);
		});
	}

	printStatistics(winningCount, bonusCount) {
		const prizeMap = {
			0: 'THREE_MATCHED',
			1: 'FOUR_MATCHED',
			2: 'FIVE_MATCHED',
			3: 'SIX_MATCHED',
		};

		Console.print(MESSAGE.STATISTIC_MESSAGE);

		const bonusMessage = `${BONUS_WINNING_PLACE}개 일치, 보너스 볼 일치 (${formatCurrency(
			PRIZE_MONEY.BONUS_MATCHED
		)}원) - ${bonusCount}개`;

		for (let i = 0; i < winningCount.length; i++) {
			if (i == 3) {
				Console.print(bonusMessage);
			}
			Console.print(
				`${i + 3}개 일치 (${formatCurrency(PRIZE_MONEY[prizeMap[i]])}원) - ${
					winningCount[i]
				}개`
			);
		}
	}

	printBenefitRate(benefitRate) {
		Console.print(`총 수익률은 ${formatRate(benefitRate)}%입니다.`);
	}
}
