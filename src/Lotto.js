class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.lottoNumberDuplicationCheckException(numbers);
  }

  // TODO: 추가 기능 구현
  getLotto(){
    return this.#numbers;
  }
  
  lottoNumberDuplicationCheckException(winningLotto) {
    const winnginLottoSet = new Set(winningLotto);
    if (winningLotto.length !== winnginLottoSet.size) {
      throw new Error("[ERROR] 같은 숫자를 입력할 수는 없습니다.");
    }
  }
}

export default Lotto;
