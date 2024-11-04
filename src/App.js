import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const userPay = await this.getUserPay(); // await 추가
      const lottoCount = this.calculateLottoCount(userPay);

      Console.print(`${lottoCount}개를 구매했습니다.`);
      const lottoTickets = this.generateLottoTickets(lottoCount);
      lottoTickets.forEach(ticket => Console.print(`[${ticket.join(", ")}]`));

      const winningNumbers = await this.getWinningNumbers();
      const bonusNumber = await this.getBonusNumber(winningNumbers);

      const results = this.calculateResults(lottoTickets, winningNumbers, bonusNumber);
      this.displayResults(results);

      const profitRate = this.calculateProfitRate(results, userPay);
      this.displayProfitRate(profitRate);
    } catch (error) {
      Console.print(error.message);
    }
  }

  /**
   * @description 사용자로부터 구매 금액을 입력받는다.
   * @returns {number} - 검증된 구입 금액
   */
  async getUserPay() {
    const amountInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n"); // await 추가
    const amount = parseInt(amountInput, 10);

    this.validatePurchaseAmount(amount);
    return amount;
  }

  /**
   * @description 구입 금액을 검증하는 함수
   * @param {number} amount - 구입 금액
   * @throws {Error} 1,000원 단위가 아닐 경우 오류 발생
   */
  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양수여야 합니다.");
    }
  }

  /**
   * @description 로또 개수를 계산하는 함수
   * @param {number} amount - 유효한 구입 금액
   * @returns {number} 구입 금액에 따른 로또 개수
   */
  calculateLottoCount(amount) {
    return Math.floor(amount / 1000);
  }

  /**
   * @description 로또 티켓을 생성하는 함수
   * @param {number} count - 생성할 로또 수량
   * @returns {number[][]} 로또 번호 배열
   */
  generateLottoTickets(count) {
    const tickets = [];
    for (let i = 0; i < count; i++) {
      tickets.push(this.generateLottoNumbers());
    }
    return tickets;
  }

  /**
   * @description 로또 번호를 생성하는 함수
   * @returns {number[]} 1에서 45 사이의 중복되지 않는 숫자 6개로 구성된 배열
   */
  generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b); // 오름차순 정렬
  }


  async getWinningNumbers() {
    const winningInput = await Console.readLineAsync("당첨 번호를 입력해 주세요. (쉼표로 구분)\n");
    const winningNumbers = winningInput.split(",").map(num => parseInt(num.trim(), 10));
    this.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonusNumber = parseInt(bonusInput, 10);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자 중 당첨 번호와 중복되지 않도록 입력해 주세요.");
    }
    return bonusNumber;
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6 || numbers.some(num => isNaN(num) || num < 1 || num > 45)) {
      throw new Error("[ERROR] 당첨 번호는 1~45 사이의 숫자 6개여야 합니다.");
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }
  }

  /**
   * @description 각 로또와 당첨 번호를 비교해 결과를 계산하는 함수
   * @param {number[][]} tickets - 구매한 로또 티켓 배열
   * @param {number[]} winningNumbers - 당첨 번호 배열
   * @param {number} bonusNumber - 보너스 번호
   * @returns {Object} 당첨 결과
   */
  calculateResults(tickets, winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

    tickets.forEach(ticket => {
      const matchCount = this.getMatchCount(ticket, winningNumbers);
      const isBonusMatch = ticket.includes(bonusNumber);
      const resultKey = this.getResultKey(matchCount, isBonusMatch);

      if (resultKey) results[resultKey] += 1;
    });

    return results;
  }

  /**
   * @description 로또 티켓의 번호와 당첨 번호를 비교하여 일치하는 개수를 계산하는 함수
   * @param {number[]} ticket - 단일 로또 티켓 번호 배열
   * @param {number[]} winningNumbers - 당첨 번호 배열
   * @returns {number} 일치하는 번호의 개수
   */
  getMatchCount(ticket, winningNumbers) {
    return ticket.filter(num => winningNumbers.includes(num)).length;
  }

  /**
   * @description 일치하는 번호의 개수와 보너스 번호 여부에 따라 당첨 등수를 판별하는 함수
   * @param {number} matchCount - 당첨 번호와 일치하는 번호의 개수
   * @param {boolean} isBonusMatch - 보너스 번호와의 일치 여부
   * @returns {number|null} 등수에 해당하는 결과 키 (3, 4, 5, 5.5, 6) 또는 null
   */
  getResultKey(matchCount, isBonusMatch) {
    if (matchCount === 6) return 6;
    if (matchCount === 5 && isBonusMatch) return 5.5;
    if (matchCount === 5) return 5;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 3;
    return null;
  }

  /**
   * @description 당첨 결과를 출력하는 함수
   * @param {Object} results - 당첨 결과
   */
  displayResults(results) {
    Console.print("당첨 통계\n---");
    Object.keys(results).forEach(match => {
      this.printResult(match, results[match]);
    });
  }

  /**
   * @description 당첨 결과를 바탕으로 총 당첨 금액을 계산하는 함수
   * @param {Object} results - 당첨 결과 객체
   * @returns {number} 총 당첨 금액
   */
  calculateTotalPrize(results) {
    const prizeTable = { 3: 5000, 4: 50000, 5: 1500000, 5.5: 30000000, 6: 2000000000 };
    return Object.entries(results).reduce(
        (acc, [key, count]) => acc + (prizeTable[key] || 0) * count,
        0
    );
  }

  /**
   * @description 당첨 결과를 바탕으로 수익률을 계산하는 함수
   * @param {Object} results - 당첨 결과
   * @param {number} userPay - 사용자가 입력한 구입 금액
   * @returns {number} 수익률 (소수점 둘째 자리까지 반올림)
   */
  calculateProfitRate(results, userPay) {
    const totalPrize = this.calculateTotalPrize(results);
    const profitRate = (totalPrize / userPay) * 100;
    return this.roundToSecondDecimal(profitRate);
  }

  /**
   * @description 입력값을 소수점 둘째 자리에서 반올림하여 반환하는 함수
   * @param {number} value - 반올림할 값
   * @returns {number} 소수점 둘째 자리에서 반올림된 값
   */
  roundToSecondDecimal(value) {
    return Math.round(value * 10) / 10;
  }


  /**
   * @description 수익률을 출력하는 함수
   * @param {number} profitRate - 수익률
   */
  displayProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  /**
   * @description 각 등수에 따른 당첨 결과를 출력하는 함수
   * @param {number|string} match - 당첨 일치 개수 또는 보너스 포함 여부 (3, 4, 5, 5.5, 6)
   * @param {number} count - 해당 등수의 당첨 티켓 수
   */
  printResult(match, count) {
    const messages = {
      3: "3개 일치 (5,000원)",
      4: "4개 일치 (50,000원)",
      5: "5개 일치 (1,500,000원)",
      5.5: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      6: "6개 일치 (2,000,000,000원)",
    };
    Console.print(`${messages[match]} - ${count}개`);
  }
}

export default App;