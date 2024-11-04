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
	createLottoNumbers() {}

	// 당첨 결과 반환하는 함수
	getLottoResult() {}

	// 수익율 계산하는 함수
	calculateProfitRate() {}
}
