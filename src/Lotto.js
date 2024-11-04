class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 번호는 안됩니다.');
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getLottoResult(lottoAnswerNumbers, lottoBonusNumber) {
    const lotto = this.#numbers;
    const answerLotto = lottoAnswerNumbers;

    const matchCount = lotto.filter((number) =>
      answerLotto.includes(number),
    ).length;
    const isBonusMatch = lotto.includes(lottoBonusNumber);
    return { matchCount, isBonusMatch };
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
