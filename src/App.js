import { Console } from '@woowacourse/mission-utils';
import { LottoInputHandler } from './LottoInputHandler.js';
import { LottoHandler } from './LottoHandler.js';
import { LottoInputValidator } from './utils/LottoInputValidator.js';

class App {
	async run() {
		const inputHandler = new LottoInputHandler();
		const validator = new LottoInputValidator();
		const lottoHandler = new LottoHandler();

		// 구입금액 입력 및 검증
		let lottoCount;
		while (true) {
			const inputAmount = await Console.readLineAsync(
				'구입금액을 입력해 주세요.\n'
			);

			try {
				lottoCount = validator.getLottoPrice(inputAmount); // 유효성 검사 호출
				break; // 유효한 입력을 받으면 루프 종료
			} catch (error) {
				// 에러 메시지를 Console에 출력하고 루프를 계속하여 재입력 요청
				Console.print(error.message);
				// 다시 입력을 요청하므로 아무 동작도 하지 않고 while 루프가 반복됨
			}
		}

		const lottos = lottoHandler.buyLotto(lottoCount);

		// 당첨 번호 입력 및 검증
		let winNumber;
		while (true) {
			winNumber = await Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`);

			try {
				inputHandler.getWinningNumbers(winNumber);
				break;
			} catch (error) {
				Console.print(error.message);
			}
		}

		// 보너스 번호 입력 및 검증
		let bonusNumber;
		while (true) {
			bonusNumber = await Console.readLineAsync(
				`\n보너스 번호를 입력해 주세요.\n`
			);

			try {
				inputHandler.getBonusNumber(bonusNumber, winNumber);
				break;
			} catch (error) {
				Console.print(error.message);
			}
		}

		Console.print('\n당첨 통계\n---');
		const winMoney = lottoHandler.checkLottoWin(lottos, winNumber, bonusNumber);
		lottoHandler.checkProfitRate(winMoney, lottoCount);
	}
}

export default App;
