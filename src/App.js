import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Purchase from "./Purchase.js";


class App {
  async run() {
   
    //1. 로또 구매
    const purchase = await this.purchaseLotto();
    purchase.printTickets();
    //2. 로또 리스트 생성
    const lottoList = await this.generateLotto(purchase.getTickets());
    //3. 로또 리스트 출력
    this.printLottoList(lottoList);
    //4. 당첨 번호 입력
    const winningLotto = await this.inputWinningLotto();
    //5. 보너스 번호 입력 및 검증
    const bonusNumber = await this.inputBonusNumber();
    await this.validateBonusNumber(bonusNumber, winningLotto);
  
    // 6. 당첨 결과 계산
    const results = this.calculateResults(lottoList, winningLotto, bonusNumber);

    // 7. 당첨 통계 출력
    this.printResults(results);

    // 8. 수익률 계산 및 출력
    const profitRate = this.calculateProfitRate(results, purchase.getMoney());
    this.printProfitRate(profitRate);

    
   

  }


  //로또 번호를 입력받아 구매 객체를 생성
  async purchaseLotto() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const money = Number(input);
        return new Purchase(money);
      }
      catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    
  }


  //로또 티켓만큼의 로또를 생성
  //@param {number} tickets (구매할 로또 티켓 개수)
  async generateLotto(tickets) {
    const lottoList = []; 
    for (let i = 0; i < tickets; i++) {
      const RANDOM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);;
      const lotto = new Lotto(RANDOM_NUMBER);
      lottoList.push(lotto);
    }
    return lottoList;
  }

  //구매한 로또 리스트를 출력
  //@param {Lotto[]} lottoList
  async printLottoList(lottoList) {
    lottoList.forEach((lotto => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }));
  }


  //당첨 번호 입력 
  async inputWinningLotto() {
    while (true) {
      try {

        const input = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      
        return new Lotto(input.split(",").map((number) => Number(number)));
      }
      catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }


  //보너스 숫자 입력
  async inputBonusNumber() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        return Number(input.trim());
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }


  //보너스 숫자에 대한 유효성 검증
  //@param {number} bonusNumber
  //@param {Lotto} winningLotto
  async validateBonusNumber(bonusNumber, winningLotto) {
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningLotto.getNumbers().includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.");
    }
    return bonusNumber;
  }

  // 두 로또의 일치하는 번호 개수 계산
  // calcuateResults 메서드에서 사용
  matchLottos(lotto, winningLotto) {
    const lottoNumbers = lotto.getNumbers();
    const winningNumbers = winningLotto.getNumbers();
    return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
  }
  //로또 당첨 등수 계산(기존 calculateResults 메서드 분리)
  getRank(lotto, winningLotto, bonusNumber) {
    const matchedNumbers = this.matchLottos(lotto, winningLotto);
    const hasBonusNumber = lotto.getNumbers().includes(bonusNumber);
  
    if (matchedNumbers === 6) {
      return 'FIRST';
    }
    if (matchedNumbers === 5 && hasBonusNumber) {
      return 'SECOND';
    }
    if (matchedNumbers === 5) {
      return 'THIRD';
    }
    if (matchedNumbers === 4) {
      return 'FOURTH';
    }
    if (matchedNumbers === 3) {
      return 'FIFTH';
    }
    return null;
  }

  //당첨 통계 계산
  //@param {Lotto[]} lottoList
  calculateResults(lottoList, winningLotto, bonusNumber) {

    const results = {
      FIFTH: 0,  // 5등
      FOURTH: 0, // 4등
      THIRD: 0,  // 3등
      SECOND: 0, // 2등
      FIRST: 0,  // 1등
    };

    lottoList.forEach((lotto) => {
      const rank = this.getRank(lotto, winningLotto, bonusNumber);
      if (rank) {
        results[rank] += 1;
      }
    });
    return results;
  }


  // 당첨 결과 출력
  printResults(results) {
    MissionUtils.Console.print("\n당첨 통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results.FIFTH}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results.FOURTH}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results.THIRD}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.SECOND}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results.FIRST}개`);
  }

  // 수익률 계산
  calculateProfitRate(results, purchaseAmount) {
    const PRIZE_MONEY = {
      FIFTH: 5000,
      FOURTH: 50000,
      THIRD: 1500000,
      SECOND: 30000000,
      FIRST: 2000000000,
    };

    let totalPrize = 0;
    //results 객체의 key값을 이용해 수익률 계산
    for (const key in results) {
      totalPrize += results[key] * PRIZE_MONEY[key];
    }

    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return profitRate;
  }

  // 수익률 출력
  printProfitRate(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

}


export default App;
