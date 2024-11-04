import { Console } from '@woowacourse/mission-utils';
import PurchaseLotto from './PurchaseLotto.js';
import { validatePurchaseMoney } from './validators/validatePurchaseMoney.js';
import {
  validateLottoNumbers,
  validateBonusNumber,
} from './validators/validateLottoNumbers.js';
import { parseToNumber, parseWinningNumbers } from './utils/Parser.js';
import { promptUserInput } from './utils/Prompt.js';
import LottoList from './LottoList.js';

class App {
  async run() {
    const purchaseMoney = await promptUserInput(
      '구입금액을 입력해 주세요.\n',
      parseToNumber,
      validatePurchaseMoney,
    );

    const purchaseLotto = new PurchaseLotto(purchaseMoney);
    purchaseLotto.printQuantity();
    const lottoList = new LottoList(purchaseLotto.getQuantity());
    lottoList.printTickets();

    const winningNumbers = await promptUserInput(
      '\n당첨 번호를 입력해 주세요.\n',
      parseWinningNumbers,
      validateLottoNumbers,
    );
    Console.print(winningNumbers);

    const bonusNumber = await promptUserInput(
      '\n보너스 번호를 입력해 주세요.\n',
      parseToNumber,
      number => validateBonusNumber(number, winningNumbers),
    );
    Console.print(bonusNumber);
  }
}

export default App;
