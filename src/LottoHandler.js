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
			Console.print(`[ ${lottoNumbers.join(', ')} ]`);
			lottos.push(new Lotto(lottoNumbers));
		}
		return lottos;
	}
}
