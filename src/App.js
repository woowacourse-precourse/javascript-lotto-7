import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async run() {
    /* TODO: 
    1) 1000원으로 안 떨어지는 경우 예외처리,
    2) 숫자가 아닌 금액을 입력했을 경우 예외처리 
    3) 1000원보다 적은 금액을 입력했을 경우 예외처리 
    4) 아무 것도 입력하지 않은 경우 예외 처리 
    */
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    const count = money / 1000;
    Console.print(`${count}개를 구매했습니다.`);
  }
}
export default App;
