import { Console, Random } from "@woowacourse/mission-utils";

class App {
  PurchaseLottoNumbersArray = [];
  // 1~45까지의 숫자를 인덱스로 사용하기 위해 46개의 배열 생성 (효율성)
  WinningLottoNumbersArray = Array(46).fill(0);

  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    this.printLottoNumbers(this.processLottoCount(purchaseAmount));

    const winningNumber = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    this.processWinningNumber(winningNumber);

    Console.print(this.WinningLottoNumbersArray);
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
      this.PurchaseLottoNumbersArray.push(lottoNumbers);
      lottoCount--;
    }
  }

  // random 로또 번호 생성 + 오름차순 정렬
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  // 당첨 번호 가공
  processWinningNumber(winningNumber) {
    const winningNumbers = winningNumber.split(",").map(Number);
    if (winningNumbers.length !== 6)
      return "[ERROR] 당첨 번호를 6개 입력해주세요.";
    if (winningNumbers.some((number) => isNaN(number)))
      return "[ERROR] 숫자만 입력해주세요.";
    if (winningNumbers.some((number) => number < 1 || number > 45))
      return "[ERROR] 1~45 사이의 숫자만 입력해주세요.";
    if (winningNumbers.length !== new Set(winningNumbers).size)
      return "[ERROR] 중복된 숫자가 있습니다.";

    winningNumbers.forEach((number) => {
      this.WinningLottoNumbersArray[number] = 1; // 해당 인덱스 === 당첨 번호를 1로 변경
    });
  }
}

export default App;
