import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export class LottoHandler {
	generateRandomNumbers() {
		const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
		return lottoNumbers.sort((a, b) => a - b);
	}

	buyLotto(lottoCount) {
		Console.print(`\n${lottoCount}개를 구매했습니다.`);
		const lottos = [];
		for (let i = 0; i < lottoCount; i++) {
			const lottoNumbers = this.generateRandomNumbers();
			Console.print(`[${lottoNumbers.join(', ')}]`);
			lottos.push(new Lotto(lottoNumbers));
		}
		return lottos;
	}

	checkLottoWin(lottos, winNumber, bonusNum) {
		let fifth = 0,
			fourth = 0,
			third = 0,
			second = 0,
			first = 0;
		let winMoney = 0;

		for (const lotto of lottos) {
			const numbers = new Set(
				[...lotto.getNumbers()].filter((num) => winNumber.includes(num))
			);
			const matchNumberCount = numbers.size;
			const isSecond = lotto.getNumbers().includes(bonusNum);

			if (matchNumberCount === 6) {
				first++;
				winMoney += 2000000000;
			} else if (matchNumberCount === 5 && isSecond) {
				second++;
				winMoney += 30000000;
			} else if (matchNumberCount === 5) {
				third++;
				winMoney += 1500000;
			} else if (matchNumberCount === 4) {
				fourth++;
				winMoney += 50000;
			} else if (matchNumberCount === 3) {
				fifth++;
				winMoney += 5000;
			}
		}
		Console.print(`3개 일치 (5,000원) - ${fifth}개`);
		Console.print(`4개 일치 (50,000원) - ${fourth}개`);
		Console.print(`5개 일치 (1,500,000원) - ${third}개`);
		Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`);
		Console.print(`6개 일치 (2,000,000,000원) - ${first}개`);

		return winMoney;
	}

	checkProfitRate(winMoney, lottoCount) {
		const purchaseMoney = lottoCount * 1000;
		const profitRate = ((winMoney / purchaseMoney) * 100).toFixed(1);
		Console.print(`총 수익률은 ${profitRate}%입니다.`);
	}
}
