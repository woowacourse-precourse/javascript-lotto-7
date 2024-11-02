import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async run() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    const count = money / 1000;
    Console.print('\n');
    Console.print(`${count}개를 구매했습니다.`);

    for (let i = 1; i <= count; i++) {
      const lottoNumber = await Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumberList = lottoNumber.sort((a, b) => a - b);
      Console.print(sortedNumberList);
    }

    Console.print('\n');
    const winningNumberInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNumberList = winningNumberInput.split(',').map((number) => parseInt(number));

    Console.print('\n');
    const bonusNumberInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const bonusNumber = parseInt(bonusNumberInput);
  }
}
export default App;
