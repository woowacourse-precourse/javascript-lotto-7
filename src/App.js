import {Console} from '@woowacourse/mission-utils'

class App {
  async run() {
    const userPurchaseAmount = await this.getPurchaseAmount();
    const userWinningNumber = await this.getUserWinningNumber();
    const userBonusNumber = await this.getWinningBonus();

    const userLottoAmount = this.computeLottoForPurchase();
    const winningNumbers = this.separateString(userWinningNumber, ',');

    // this.validatePayDecimalNumber(userPurchaseAmount);
    // this.validateNotNumber(userPurchaseAmount);
    // this.validateNotThousandUnits(userPurchaseAmount);
    // this.validateWinningNumberForm(userWinningNumber);
    // this.validateWinningNumberOutOfBounds(winningNumbers);
    // this.validateWinningNumberAmount(winningNumbers);
    // this.validateWinningNumberDecimal(winningNumbers);
    // this.validateBonusNumberOutOfBounds(userBonusNumber);
    this.validateBonusNumberDecimal(userBonusNumber)
  }

  async getPurchaseAmount(){
    return Console.readLineAsync('구입금액을 입력해 주세요.');
  }

  async getUserWinningNumber(){
    return Console.readLineAsync('당첨 번호를 입력해 주세요.');
  }

  async getWinningBonus(){
    return Console.readLineAsync('보너스 번호를 입력해 주세요.');
  }

  computeLottoForPurchase(purchaseAmount){
    return purchaseAmount / 1000;
  }

  separateString(string, separator){
    return string.split(separator);
  }

  validateNotNumber(inputValue){
    const notNumber = new RegExp('[^0-9]+');
    if(notNumber.test(inputValue)){
      throw new Error('[ERROR]입력 에러, 금액 및 번호 입력 시 숫자만 입력해주세요.');
    }
  }
  validatePayDecimalNumber(inputValue){
    const decimalNumber = new RegExp('[.]+');
    if(decimalNumber.test(inputValue)){
      throw new Error('[ERROR]입력 에러, 금액 입력 시 정수의 숫자만 입력해주세요.');
    }
  }
  validateNotThousandUnits(inputValue){
    if(inputValue%1000 !== 0){
      throw new Error('[ERROR]구입 금액 에러, 1000원 단위 금액을 입력해주세요.')
    }
  }
  validateWinningNumberForm(inputValue){
    const matchWinningNumberFormat = new RegExp('/[^\d],{1,1}|[a-zA-Z]|[\s]/g');
    if(matchWinningNumberFormat.test(inputValue)){
      throw new Error('[ERROR]당첨 번호 에러, 입력한 당첨번호의 형식이 맞지 않습니다.');
    }
  }
  validateWinningNumberOutOfBounds(inputValue){
    inputValue.forEach((element) => {
      if(element > 45 || element < 1){
        throw new Error('[ERROR]당첨 번호 에러, 로또 번호는 1에서 45사이의 숫자입니다.');
      }
    });
  }
  validateWinningNumberAmount(inputValue){
    if(inputValue.length > 6 || inputValue.length < 6){
      throw new Error('[ERROR]당첨 번호 에러, 로또 번호는 6개의 숫자를 입력해야합니다.');
    }
  }
  validateWinningNumberDecimal(inputValue){
    const decimalNumber = new RegExp('[.]+');
    inputValue.forEach((element) =>{
      if(decimalNumber.test(element)){
        throw new Error('[ERROR]당첨 번호 에러, 당첨 번호는 정수의 숫자만 입력해주세요.');
      }
    });
  }
  validateBonusNumberOutOfBounds(inputValue){
    if(inputValue > 45 || inputValue < 1){
      throw new Error('[ERROR]보너스 번호 에러, 보너스 번호는 1에서 45사이의 숫자입니다.');
    }
  }
  validateBonusNumberDecimal(inputValue){
    const decimalNumber = new RegExp('[.]+');
    if(decimalNumber.test(inputValue)){
      throw new Error('[ERROR]보너스 번호 에러, 보너스 번호는 정수의 숫자만 입력해주세요.');
    }
  }
} 

export default App;