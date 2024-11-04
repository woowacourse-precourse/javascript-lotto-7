import { Console } from '@woowacourse/mission-utils';

class GetInput {
  static async print() {
    const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요. \n");
    const winningNumbers = numbers.split(",").map((number) => parseInt(number));
    const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요. \n");
    const bonus = parseInt(bonusNumber);
    return { winningNumbers, bonus };
  }
}

export default GetInput;
