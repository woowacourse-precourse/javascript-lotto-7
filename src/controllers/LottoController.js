import Lotto from "../models/Lotto";

export class LottoController {
	// 실행 함수
	run() {}

	// 로또 발행 함수
	issueLotto(price) {
		const lottoList = [];
		const lottoCount = price / 1000;

		for (let i = 0; i < lottoCount; i++) {
			const randomNumbers = this.createLottoNumbers();
			lottoList.push(new Lotto(randomNumbers));
		}

		return lottoList;
	}

	// 로또 번호 생성 함수
	createLottoNumbers() {
		return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
	}

	// 당첨 결과 반환하는 함수
	getLottoResult(userLottoList, winningNumbers, bonusNumber) {
		const lottoResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
		userLottoList.forEach((lotto) => {
			const matchCount = lotto.getNumbers().filter((number) => winningNumbers.includes(number)).length;
			const hasBonus = lotto.getNumbers.includes(bonusNumber);
			this.checkLottoResult(lottoResult, matchCount, hasBonus);
		});

		return lottoResult;
	}

	// 당첨 결과를 확인하는 함수
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

	// 수익율 계산하는 함수
	calculateProfitRate() {}
}
