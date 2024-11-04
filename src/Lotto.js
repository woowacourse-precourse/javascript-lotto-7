import { Random as MissionUtilsRandom, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  
  constructor(numbers = MissionUtilsRandom.pickUniqueNumbersInRange(1, 45, 6)) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateUnique(numbers);
  }

  #validateLength(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateRange(numbers) {
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      Console.print("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
    }
  }

  #validateUnique(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      Console.print("[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.");
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomLotto() {
    const numbers = MissionUtilsRandom.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  async getInputMoney() {
    const inputMoney = await Console.readLineAsync("로또 구입 금액을 입력해주세요.(천원 단위로 입력해주세요)\n");
    const amount = parseInt(inputMoney, 10);
    if (isNaN(amount) || amount % 1000 !== 0) {
      Console.print("[ERROR] 금액은 천 원 단위로 입력해야 합니다.");
      throw new Error("[ERROR] 금액은 천 원 단위로 입력해야 합니다.");
    }
    return amount;
  }

  purchaseLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = Lotto.generateRandomLotto();
      lottos.push(lotto);
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
    return lottos;
  }
