import Lotto from '../Lotto.js';

import {
  calculateLottoCount,
  initializeResults,
  calculateResult,
  calculateTotalProfit,
  calculateProfitRate,
  createRandomLottoNumber,
} from '../model/model.js';

import {
  inputLottoBuy,
  inputLottoNumber,
  printRandomLottoNumber,
  printWinningStatistics,
  printTotalProfit,
  inputBonusNumber,
  printLottoCount,
} from '../view/view.js';

class Controller {
  async run() {
    let purchasePrice;
    while (true) {
      try {
        // 구입 금액 입력
        purchasePrice = await inputLottoBuy();

        // 입력값이 숫자인지 확인하고, 유효한 금액인지 검사
        if (isNaN(purchasePrice) || purchasePrice <= 0) {
          throw new Error('[ERROR] 유효한 금액을 입력해주세요.');
        }

        break;
      } catch (error) {
        console.error(error.message);
      }
    }

    const lottoCount = calculateLottoCount(purchasePrice);

    // 구입한 로또 수 출력
    printLottoCount(lottoCount);

    // 랜덤 로또 번호 생성
    const lottos = createRandomLottoNumber(lottoCount);
    printRandomLottoNumber(lottos);

    let winningNumbers;
    while (true) {
      try {
        // 당첨 번호 입력
        const winningNumberInput = await inputLottoNumber();
        winningNumbers = winningNumberInput.split(',').map(Number);

        // Lotto 객체 생성하여 번호 유효성 검사
        this.validateLottoNumbers(winningNumbers);
        const winningLotto = new Lotto(winningNumbers);
        break;
      } catch (error) {
        console.error(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        // 보너스 번호 입력
        bonusNumber = Number(await inputBonusNumber());
        if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
          throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
        }
        break;
      } catch (error) {
        console.error(error.message);
      }
    }

    // 당첨 통계 계산
    const results = initializeResults();
    const winningLotto = new Lotto(winningNumbers);
    calculateResult(lottos, results, winningLotto, bonusNumber);

    // 당첨 통계 출력
    await printWinningStatistics(results);

    // 총 수익률 계산 및 출력
    const totalProfit = await calculateTotalProfit(results);
    const profitRate = await calculateProfitRate(totalProfit, purchasePrice);
    await printTotalProfit(profitRate);
  }

  validateLottoNumbers(numbers) {
    if (numbers.length !== 6) {
      console.error('[ERROR] 로또 번호는 6개여야 합니다.');
      throw new Error('로또 번호는 6개여야 합니다.');
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      console.error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
      throw new Error('로또 번호에 중복된 숫자가 있습니다.');
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        console.error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
        throw new Error('로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });
  }
}

export default Controller;
