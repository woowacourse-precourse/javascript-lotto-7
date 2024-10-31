import { Console, Random } from "@woowacourse/mission-utils";

class App {
  PurchaseLottoNumbers = [];
  // 1~45까지의 숫자를 인덱스로 사용하기 위해 46개의 배열 생성 (효율성)
  WinningLottoNumbersArray = Array(46).fill(0);

  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    this.printLottoNumbers(this.processLottoCount(purchaseAmount));
  }

  //로또 갯수 가공
  processLottoCount(purchaseAmount) {
    if (purchaseAmount > 0 && purchaseAmount % 1000 !== 0)
      return "[ERROR] 1000원 단위로 입력해 주세요.";

    return purchaseAmount / 1000;
  }

  //로또 번호 출력
  printLottoNumbers(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    while (lottoCount > 0) {
      let lottoNumbers = this.generateLottoNumbers();
      Console.print(lottoNumbers);
      this.PurchaseLottoNumbers.push(lottoNumbers);
      lottoCount--;
    }
  }

  // random 로또 번호 생성 + 오름차순 정렬
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default App;
