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
    const allLottoRandomNumbers = showRandomNumbers.printLottoNumbers(lottoQuantity);
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
    const winningComparisonResult = new LottoResultChecker();
    const initialRemainingNumbers = winningComparisonResult.compareWithWinningNumbers(allLottoRandomNumbers,lottoWinningNumbers);
    const remainingNumbers = initialRemainingNumbers.initialRemainingNumbers;
    Console.print(initialRemainingNumbers);
    const finalRemainingNumbers = winningComparisonResult.compareWithBonusNumber(remainingNumbers,lottoBonusNumber);
    const firstPlaceWinning = initialRemainingNumbers.firstPlaceWinning;
    const winningCounts = winningComparisonResult.calculateWinningRank(firstPlaceWinning,finalRemainingNumbers)
    Console.print(winningCounts);
    const lottoResultPrinter = new LottoResultPrinter();
    lottoResultPrinter.printLottoResult(lottoAmount, winningCounts);
    
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
    return (bonusNumber);
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
    const allWinningNumbers = [...winningNumbers,bonusNumber];
    const uniqueNumbers = new Set(allWinningNumbers);
    if (uniqueNumbers.size !== allWinningNumbers.length) {
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
    return allLottoNumbers;
  }

  pickLottoRandomNumbers() {
    const randomNum = Random.pickUniqueNumbersInRange(LOTTO_NUM_RANGE.MIN,LOTTO_NUM_RANGE.MAX,NUMBER_OF_BALLS)
    return randomNum;
  }

}

class LottoResultChecker {
  compareWithWinningNumbers(randomNumbers, winningNumbers) {
    // chat GPT의 엄청난 도움(map, filter, includes(!winningNumbers로 false인 값들만 반환))
    // randomNumbers의 각 배열을 winningNumber와 비교하여 중복되는 값을 뺀 새로운 배열을 만듦
    // winningNumbers에서 5개가 중복되고 bonus와 일치하는 경우 ( ex) 2등 ) 를 확실히 하기 위해서! 반환되는 배열값을 다시 받아서 bonus와 비교
    const initialRemainingNumbers = randomNumbers.map(array => {
      return array.filter(num => !winningNumbers.includes(num));
    }).filter(array => array.length > 0 );
    // 한참 골먹었는데,, 앞에 조건문을 달고 빈 배열을 반환한다는 것 자체가 좀 이상했다. 그래서 !winningNumbers 대신 winningNumbers해서 
    // 6자리를 반환하고 밑에도 똑같이 반환하는 방식으로.
    const firstPlaceWinning = randomNumbers.map(array => {
      return array.filter(num => winningNumbers.includes(num));
    }).filter(array => array.length === 6);
    return {
      initialRemainingNumbers, 
      firstPlaceWinning
    };
  }
  compareWithBonusNumber (initialRemainingNumbers, bonusNumber) {
    const finalRemainingNumbers = initialRemainingNumbers.map(array =>{
      return array.filter(num => num !== bonusNumber);
    })
    return finalRemainingNumbers;
  }
  calculateWinningRank (firstPlaceWinning, finalRemainingNumbers) {
    const firstPlaceWinningCount = firstPlaceWinning.map(array => array.length);
    const WinningCount = finalRemainingNumbers.map(array => array.length);
    const firstPlace = firstPlaceWinningCount.filter(num => num === 6).length;
    const secondPlace = WinningCount.filter(num => num === 0).length;
    const thirdPlace = WinningCount.filter(num => num === 1).length;
    const fourthPlace = WinningCount.filter(num => num === 2).length;
    const fifthPlace = WinningCount.filter(num => num === 3).length;
    return {
      firstPlace,
      secondPlace,
      thirdPlace,
      fourthPlace,
      fifthPlace
    };
  }
}

class LottoResultPrinter {
  printLottoResult ( amount,winningCounts) {
    Console.print('당첨 통계/n')
    Console.print('---')
    Console.print(`3개 일치 (5,000원) - ${winningCounts.fifthPlace}개`)
    Console.print(`4개 일치 (50,000원) - ${winningCounts.fourthPlace}개`)
    Console.print(`5개 일치 (1,500,000원) - ${winningCounts.thirdPlace}개`)
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCounts.secondPlace}개`)
    Console.print(`6개 일치 (2,000,000,000원) - ${winningCounts.firstPlace}개`)
    Console.print(`총 수익률은 ${(
      (Number(((winningCounts.fifthPlace * 5000 + winningCounts.fourthPlace * 50000 + winningCounts.thirdPlace * 1500000 + winningCounts.secondPlace * 30000000 + winningCounts.firstPlace * 2000000000) / amount).toFixed(1)))).toLocaleString()}%입니다.`);
    
  }
}

export default App;
