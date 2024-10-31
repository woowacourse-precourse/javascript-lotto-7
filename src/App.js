import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import { LOTTO_AMOUNT_UNIT,LOTTO_NUM_RANGE,NUMBER_OF_BALLS } from './constant/constant.js'

class App {
  async run(){

    let lottoAmount;
    let lottoWinningNumbers;
    let lottoBonusNumber;

    while (true) {
      try {
        lottoAmount = await this.promptLottoAmount();
        break
      } catch (error) {
        Console.print(error.message);
      }
    }
    const lottoQuantity = lottoAmount / LOTTO_AMOUNT_UNIT;
    const showRandomNumbers = new LottoNumberPrinter();
    showRandomNumbers.printLottoNumbers(lottoQuantity);

    while (true) {
      try {
        lottoWinningNumbers = await this.promptWinningNumbers();
        break
      } catch (error) {
        Console.print(error.message);
      }
    }
    while (true) {
      try {
        lottoBonusNumber = await this.promptBonusNumber(lottoWinningNumbers);
        break
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async promptLottoAmount() {
    const lottoAmount = Number(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
    const validator = new LottoAmountValidator();
    validator.validateMinAmount(lottoAmount);
    validator.validateUnitAmount(lottoAmount);
    return lottoAmount;
  }

  async promptWinningNumbers() {
    const winningNumberInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbers = this.splitWinningNumbers(winningNumberInput);
    const validator = new LottoWinningValidator();
    validator.validateNumberOfWinningBalls(winningNumbers);
    validator.validateNumbersRange(winningNumbers);
    validator.validateDuplicateNumbers(winningNumbers);
    return winningNumbers;
  }

  async promptBonusNumber(winningNumbers) {
    const bonusNumber = Number(await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));
    const validator = new LottoBonusNumberValidator();
    validator.validateDuplicateWithWinningNumbers(bonusNumber,winningNumbers);
    validator.validateNumbersRange(bonusNumber); // validator 당첨 번호 validator 조건문 중복 : 수정 필요!
    return bonusNumber;
  }
  
  splitWinningNumbers(numbers) {
    return numbers.split(',').map(num => Number(num.trim()));
  }
}

class LottoAmountValidator {
  validateMinAmount(amount) {
    if (amount < LOTTO_AMOUNT_UNIT) {
      throw new Error('\n[ERROR] 1,000원부터 입력할 수 있습니다.');
    }
  }
  validateUnitAmount(amount) {
    if (!Number.isInteger(amount / LOTTO_AMOUNT_UNIT)) {
      throw new Error('\n[ERROR] 1,000원 단위만 입력할 수 있습니다.');
    }
  }
}

class LottoWinningValidator {
  validateNumberOfWinningBalls(numbers) {
    if ( numbers.length !== NUMBER_OF_BALLS ) {
      throw new Error('\n[ERROR] 6개의 당첨 번호를 입력해야 합니다.')
    }
  }
  validateNumbersRange(numbers) {
    numbers.forEach(num => {
      if ( LOTTO_NUM_RANGE.MIN > num || LOTTO_NUM_RANGE.MAX < num) {
        throw new Error('\n[ERROR] 당첨 번호는 1부터 45사이의 숫자만 입력할 수 있습니다.')
      }
    })
  }
  validateDuplicateNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('\n[ERROR] 당첨 번호에 중복된 숫자가 포함되어 있습니다.')
    }
  }
}

class LottoBonusNumberValidator {
  validateNumbersRange(number) {
      if ( LOTTO_NUM_RANGE.MIN > number || LOTTO_NUM_RANGE.MAX < number) {
        throw new Error('\n[ERROR] 보너스 번호는 1부터 45사이의 숫자만 입력할 수 있습니다.')
      }
  }
  validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const allNumbers = [...winningNumbers,bonusNumber];
    const uniqueNumbers = new Set(allNumbers);
    if (uniqueNumbers.size !== allNumbers.length) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 다른 숫자를 입력해야 합니다.')
    }
  }
}

class LottoNumberPrinter {
  printLottoNumbers(quantity) {
    Console.print(`\n${quantity}개를 구매했습니다.`)
    const allLottoNumbers = [];
    for (let i = 0; i < quantity; i++) {
      const numbers = this.pickLottoRandomNumbers();
      allLottoNumbers.push(numbers.sort((a,b) => {
        return a-b
      }));
    }
    allLottoNumbers.forEach(numbers => Console.print(`[${numbers.join(', ')}]`));
  }

  pickLottoRandomNumbers() {
    const randomNum = Random.pickUniqueNumbersInRange(LOTTO_NUM_RANGE.MIN,LOTTO_NUM_RANGE.MAX,NUMBER_OF_BALLS)
    return randomNum;
  }

}

export default App;
