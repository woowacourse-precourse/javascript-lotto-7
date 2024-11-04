import { MissionUtils } from '@woowacourse/mission-utils';
import {
	LOTTO_COUNT,
	LOTTO_PRICE,
	MAX_LOTTO_NUMBER,
	MIN_LOTTO_NUMBER,
} from '../constants/numbers.js';
import Lotto from './Lotto.js';

export class LottoMachine {
	#lottos;

	constructor() {
		this.#lottos = [];
	}

	#generateLottoNumber() {
		const randomLottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
			MIN_LOTTO_NUMBER,
			MAX_LOTTO_NUMBER,
			LOTTO_COUNT
		);
		return randomLottoNumber;
	}

	#sortLottoNumber(lottoNumber) {
		return lottoNumber.sort((a, b) => a - b);
	}

	buyLotto(money) {
		const buyCount = money / LOTTO_PRICE;
		for (let i = 0; i < buyCount; i++) {
			const generatedLottoNumber = this.#generateLottoNumber();
			const sortedLottoNumber = this.#sortLottoNumber(generatedLottoNumber);
			this.#lottos.push(new Lotto(sortedLottoNumber));
		}
	}

	get lottos() {
		return this.#lottos;
	}
}
