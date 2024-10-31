import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../services/index.js';

class ConsoleIO {
  constructor() {
    this.validator = new Validator();
  }

  async processMoneyInput(query) {
    const moneyString = await this.readInput(query);
    this.validator.validateMoneyString(moneyString);
    return Number(moneyString);
  }

  async processMainInput(query) {
    const mainNumberString = await this.readInput(query);
    const mainNumbers = mainNumberString.split(',');
    return mainNumbers;
  }

  async processBonusInput(query) {
    const BonusNumberString = await this.readInput(query);
    return Number(BonusNumberString);
  }

  async readInput(query) {
    return await Console.readLineAsync(query);
  }

  print(query) {
    Console.print(query);
  }
}

export default ConsoleIO;
