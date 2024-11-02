import { Console } from '@woowacourse/mission-utils';

class Handler {
  static async input(input) {
    await Console.readLineAsync(input);
  }

  static output(output) {
    Console.print(output);
  }

  static setResultOutPut(moneyAndCount) {
    moneyAndCount.forEach((moneyNcount) => {
      const money = this.setOutputMoney(moneyNcount.money);
      const count = this.setOutputCount(moneyNcount.money);
    });
  }

  setOutputMoney(rank) {
    switch (rank) {
      case 1:
        return '2,000,000,000원';
      case 2:
        return '30,000,000원';
      case 3:
        return '1,500,000원';
      case 4:
        return '50,000원';
      case 5:
        return '5,000원';
      default:
        return 0;
    }
  }

  setOutputCount(rank) {
    switch (rank) {
      case 1:
        return '6개 일치';
      case 2:
        return '5개 일치 , 보너스 볼 일치';
      case 3:
        return '5개 일치';
      case 4:
        return '4개 일치';
      case 5:
        return '3개 일치';
      default:
        return 0;
    }
  }

  async validateInputHandler(message, validator) {
    while (true) {
      try {
        const input = this.input(message);
        validator(input);
        return input;
      } catch (error) {
        this.print(error.message);
      }
    }
  }
}
export default Handler;
