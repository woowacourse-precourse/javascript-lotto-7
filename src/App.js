import { Console } from '@woowacourse/mission-utils';
import { LottoInputHandler } from './LottoInputHandler.js';
import { LottoHandler } from './LottoHandler.js';

class App {
	async run() {
		const inputHandler = new LottoInputHandler();
		const lottoHandler = new LottoHandler();

		const lottoCount = await inputHandler.getLottoCount();

		const lottos = lottoHandler.buyLotto(lottoCount);

		const winNumber = await inputHandler.getWinningNumbers();
		const bonusNumber = await inputHandler.getBonusNumber(winNumber);

		Console.print('\n당첨 통계\n---');
		const winMoney = lottoHandler.checkLottoWin(lottos, winNumber, bonusNumber);
		lottoHandler.checkProfitRate(winMoney, lottoCount);
	}
}

export default App;
