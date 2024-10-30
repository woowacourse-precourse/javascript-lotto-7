import { MissionUtils } from '@woowacourse/mission-utils';
import {
	LOTTO_COUNT,
	MAX_LOTTO_NUMBER,
	MIN_LOTTO_NUMBER,
} from '../constants/numbers';

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
}
