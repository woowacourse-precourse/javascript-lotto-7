import {Console} from '@woowacourse/mission-utils'

class App {
  async run() {
    const userPurchaseAmount = await this.getPurchaseAmount();
    const userWinningNumber = await this.getUserWinningNumber();
    const userWinningBonus = await this.getWinningBonus();

    const userLottoAmount = this.computeLottoForPurchase();
    const winningNumbers = this.separateString(userWinningNumber, ',');
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

}

export default App;