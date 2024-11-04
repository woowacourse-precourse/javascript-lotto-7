import { Console } from '@woowacourse/mission-utils';
import { LottoInputHandler } from './LottoInputHandler.js';
import { LottoHandler } from './LottoHandler.js';
import { LottoInputValidator } from './utils/LottoInputValidator.js';

class App {
	async run() {
		const inputHandler = new LottoInputHandler();
		const validator = new LottoInputValidator();
		const lottoHandler = new LottoHandler();

		const inputAmount = await Console.readLineAsync(
			'구입금액을 입력해 주세요.\n'
		);
		const lottoCount = validator.getLottoPrice(inputAmount);
		const lottos = lottoHandler.buyLotto(lottoCount);

		const winNumber = await Console.readLineAsync(
			`\n당첨 번호를 입력해 주세요.\n`
		);
		inputHandler.getWinningNumbers(winNumber);

		const bonusNumber = await Console.readLineAsync(
			`\n보너스 번호를 입력해 주세요.\n`
		);
		inputHandler.getBonusNumber(bonusNumber, winNumber);

		Console.print('\n당첨 통계\n---');
		const winMoney = lottoHandler.checkLottoWin(lottos, winNumber, bonusNumber);
		lottoHandler.checkProfitRate(winMoney, lottoCount);
	}
}

export default App;
