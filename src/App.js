import { Console, Random } from "@woowacourse/mission-utils";

class App {
  PurchaseLottoNumbersArray = [];
  // 1~45까지의 숫자를 인덱스로 사용하기 위해 46개의 배열 생성 (효율성)
  WinningLottoNumbersArray = Array(46).fill(0);

  // 당첨 순위
  winningRanks = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    this.printLottoNumbers(this.processLottoCount(purchaseAmount));

    const winningNumber = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    this.processWinningNumber(winningNumber);

    const bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    this.processBonusgNumber(bonusNumber);

    this.compareLottoNumbers();

    this.printResult();
  }

  //로또 갯수 가공
  processLottoCount(purchaseAmount) {
    if (purchaseAmount > 0 && purchaseAmount % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");

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
      throw new Error("[ERROR] 당첨 번호를 6개 입력해주세요.");
    if (winningNumbers.some((number) => isNaN(number)))
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (winningNumbers.some((number) => number < 1 || number > 45))
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해주세요.");
    if (winningNumbers.length !== new Set(winningNumbers).size)
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");

    winningNumbers.forEach((number) => {
      this.WinningLottoNumbersArray[number] = 1; // 해당 인덱스 === 당첨 번호를 1로 변경
    });
  }

  // 보너스 번호 가공
  processBonusgNumber(bonusNumber) {
    bonusNumber = Number(bonusNumber);
    if (isNaN(bonusNumber)) throw new Error("[ERROR] 숫자만 입력해주세요.");
    if (bonusNumber < 1 || bonusNumber > 45)
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해주세요.");
    if (this.WinningLottoNumbersArray[bonusNumber] === 1)
      throw new Error("[ERROR] 당첨 번호와 중복됩니다.");

    this.WinningLottoNumbersArray[bonusNumber] = 2; // 보너스 번호는 2로 표시
  }

  // 내가 산 로또 번호와 당첨 번호 비교
  compareLottoNumbers() {
    this.PurchaseLottoNumbersArray.forEach((lottoNumber) => {
      let { count, isBonusMatched } = this.countWinningNumber(lottoNumber);
      this.updateWinningRanks(count, isBonusMatched);
    });
  }

  // 당첨 번호와 비교 후 맞는 갯수 리턴
  countWinningNumber(lottoNumber) {
    let count = 0;
    let isBonusMatched = false;
    lottoNumber.forEach((number) => {
      if (this.WinningLottoNumbersArray[number] === 1) {
        count++;
      } else if (this.WinningLottoNumbersArray[number] === 2) {
        isBonusMatched = true;
      }
    });
    return { count, isBonusMatched };
  }
  //winningRanks 업데이트
  updateWinningRanks(count, isBonusMatched) {
    switch (count) {
      case 6:
        this.winningRanks[1]++;
        break;
      case 5:
        if (isBonusMatched) this.winningRanks[2]++;
        else this.winningRanks[3]++;
        break;
      case 4:
        this.winningRanks[4]++;
        break;
      case 3:
        this.winningRanks[5]++;
        break;
      default:
        break;
    }
  }

  // 수익률 계산
  calculateRateOfReturn() {
    const prize = [0, 2000000000, 30000000, 1500000, 50000, 5000];
    const totalPrize = Object.keys(this.winningRanks).reduce(
      (acc, rank) => acc + this.winningRanks[rank] * prize[rank],
      0
    );
    const rate =
      (totalPrize / (this.PurchaseLottoNumbersArray.length * 1000)) * 100;

    if (rate % 1 === 0) {
      return rate;
    } else if ((rate * 10) % 1 === 0) {
      return rate.toFixed(1);
    }
    return rate.toFixed(2);
  }

  printResult() {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.winningRanks[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.winningRanks[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningRanks[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningRanks[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.winningRanks[1]}개`);
    Console.print(`총 수익률은 ${this.calculateRateOfReturn()}%입니다.`);
  }
}

export default App;
