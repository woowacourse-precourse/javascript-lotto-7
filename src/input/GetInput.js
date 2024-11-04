import { Console } from '@woowacourse/mission-utils';

class GetInput {
  static async print() {
    const budget = await Console.readLineAsync("구입금액을 입력해 주세요. \n");
    const money = parseInt(budget);
    const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요. \n");
    const winningNumbers = numbers.split(",").map((number) => parseInt(number));
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요. \n");
    const bonus = parseInt(bonusNumber);
    return { money, winningNumbers, bonus };
  }
}

export default GetInput;
