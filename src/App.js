import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 구입 금액 입력
    const payment = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    // 로또 수량 출력
    const quantity = Number(payment) / 1000;
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);

    // 로또 번호 발행
    const makeLottoNumber = () => {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    // 로또 번호 정렬
    const asc = (a, b) => { a - b; }

    // 로또 번호 출력
    const printList = (list) => {
      MissionUtils.Console.print(`[${list.join(', ')}]`);
    }

    const myLottoList = []
    for (let i = 0; i < quantity; i++) {
      myLottoList.push(makeLottoNumber())
      myLottoList[i].sort(asc)
      printList(myLottoList[i])
    }

    // 당첨 번호 입력
    const winningString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n')
    const winningNumber = winningString.split(',').map((element) => {
      return Number(element);
    });

    // 보너스 번호 입력
    const bonusString = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n')
    const bonusNumber = Number(bonusString)
  }
}

export default App;
