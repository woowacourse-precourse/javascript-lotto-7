import { Console } from '@woowacourse/mission-utils';
import Lotto from './classes/Lotto.js';
import LottoGenerator from './classes/LottoGenerator.js';
import LottoGame from './classes/LottoGame.js';
import InputView from './views/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const purchasePrice = await inputView.inputPurchaseAmount();

    // 구입 금액으로 로또 생성
    const lottoManager = new LottoGenerator(purchasePrice);

    // 로또 개수 출력
    Console.print(`\n${lottoManager.lottoCount}개를 구매했습니다.`);

    // 로또 개수로 무작위 번호 추첨하여 로또 생성
    lottoManager.generateLottos();

    // 생성된 로또 가져오기
    const myLottos = lottoManager.getLottos();

    // 생성된 로또 형식에 맞게 출력
    myLottos.forEach((myLotto) =>
      Console.print(`[${myLotto.toString().split(',').join(', ')}]`)
    );

    // 로또 당첨 번호 입력
    const winningNumbersInput = await inputView.inputWinningNumbers();

    // 입력된 당첨 번호 숫자로 파싱
    const winningNumbers = winningNumbersInput
      .split(',')
      .map((lottoNumber) => parseInt(lottoNumber));

    // 당첨 번호 객체 생성 및 검증
    const winningLotto = new Lotto(winningNumbers);

    // 보너스 번호 입력
    const bonusNumber = await inputView.inputBonusNumber();

    // 로또 추첨 시작(내가 구매한 로또, 로또 당첨 번호, 보너스 번호)
    const lottoGame = new LottoGame(myLottos, winningLotto, bonusNumber);

    // 로또 추첨
    const results = lottoGame.drawLotto();
    Console.print('\n당첨 통계\n---');
    // 로또 결과 출력
    lottoGame.displayResults(results);

    // 로또 수익률 계산 출력
    lottoGame.calculateLottoPrize(purchasePrice, results);
  }
}

export default App;
