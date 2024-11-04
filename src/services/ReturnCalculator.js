// services/ReturnCalculator.js
import { magicNumber } from '../constants/index.js';

class ReturnCalculator {
  calculate(sumMoney, purchaseAmount) {
    let resultNum =
      (sumMoney / purchaseAmount.getPurchaseAmount()) * magicNumber.HUNDRED;
    resultNum =
      Math.round(resultNum * magicNumber.TEN).toPrecision(
        magicNumber.FLOATING_POINT,
      ) / magicNumber.TEN;
    return resultNum;
  }

  calculateSumMoney(moneyArr, winningAmounts) {
    return moneyArr.reduce((acc, cnt, idx) => {
      let newAcc = acc;
      if (cnt >= magicNumber.ONE) {
        newAcc += cnt * winningAmounts[idx];
      }
      return newAcc;
    }, magicNumber.ZERO);
  }
}

export default ReturnCalculator;
