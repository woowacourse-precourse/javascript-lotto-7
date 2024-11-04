import { Console } from '@woowacourse/mission-utils';

class GetInput {
  static async print() {
    const budget = await Console.readLineAsync("구입금액을 입력해 주세요. \n");

    if (isNaN(budget) || budget % 1000 !== 0 || budget < 1000) {
      throw new Error("[ERROR] 구매 금액이 1000원 이상의 1000원 단위여야 합니다.");
    }
    
    const money = parseInt(budget);
    const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요. \n");
    const winningNumbers = numbers.split(",").map((number) => parseInt(number));
    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요. \n");
    const bonus = parseInt(bonusNumber);
    return { money, winningNumbers, bonus };
  }
}

export default GetInput;
