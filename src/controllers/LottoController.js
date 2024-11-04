import Lotto from "../models/Lotto";

export class LottoController {
	// 실행 함수
	run() {}

	issueLotto(price) {
		const lottoList = [];
		const lottoCount = price / 1000;

		for (let i = 0; i < lottoCount; i++) {
			const randomNumbers = this.createLottoNumbers();
			lottoList.push(new Lotto(randomNumbers));
		}

		return lottoList;
	}

	createLottoNumbers() {
		return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
	}

	getLottoResult(userLottoList, winningNumbers, bonusNumber) {
		const lottoResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
		userLottoList.forEach((lotto) => {
			const matchCount = lotto.getNumbers().filter((number) => winningNumbers.includes(number)).length;
			const hasBonus = lotto.getNumbers.includes(bonusNumber);
			this.checkLottoResult(lottoResult, matchCount, hasBonus);
		});

		return lottoResult;
	}

	checkLottoResult(lottoResult, matchCount, hasBonus) {
		switch (matchCount) {
			case 6:
				lottoResult.first++;
				break;
			case 5: {
				if (hasBonus) {
					lottoResult.second++;
					break;
				}

				lottoResult.third++;
				break;
			}
			case 4:
				lottoResult.fourth++;
				break;
			case 3:
				lottoResult.fifth++;
				break;
		}
	}

	calculateProfitRate(lottoResult, price) {
		const prizeMoney = {
			first: 2000000000,
			second: 30000000,
			third: 1500000,
			fourth: 50000,
			fifth: 5000,
		};

		let totalPrize = 0;
		for (const [key, count] of Object.entries(lottoResult)) {
			totalPrize += count * prizeMoney[key];
		}

		const profitRate = ((totalPrize / price) * 100).toFixed(1);
		return profitRate;
	}
}
