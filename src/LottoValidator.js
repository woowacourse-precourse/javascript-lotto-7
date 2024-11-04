class LottoValidator {
  checkRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1에서 45사이 숫자를 입력해주세요.");
    }
  }

  checkPositive(number) {
    if (!Number.isInteger(number) || number < 1) {
      throw new Error("[ERROR] 양의 정수로 입력해주세요.");
    }
  }

  checkCount(numberCount) {
    if (numberCount !== 6) {
      throw new Error("[ERROR] 당첨번호는 6개 숫자를 입력해주세요");
    }
  }

  checkDuplicate(numbers) {
    if (new Set(numbers).size < numbers.length) {
      throw new Error("[ERROR] 서로 다른 숫자들을 입력해주세요.");
    }
  }

  checkBigger(lottoPrice, number) {
    if (number < lottoPrice) {
      throw new Error(`[ERROR] 로또 금액(${lottoPrice}원)보다 큰 값을 입력해주세요.`);
    }
  }

  checkDivisible(lottoPrice, number) {
    if (number % lottoPrice !== 0) {
      throw new Error(`[ERROR] 구입금액은 ${lottoPrice}원단위로 입력해 주세요.`);
    }
  }

  checkNumberIn(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(`[ERROR] 당첨번호에 없는 숫자를 입력해주세요.`);
    }
  }
}

export default LottoValidator;
