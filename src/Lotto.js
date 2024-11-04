// 로또 번호 중복체크 함수
function check_lotto(i, j, numbers) {
  try {
    if (i !== j && numbers[i] === numbers[j]) {
      throw new Error("[ERROR]: 로또 번호에 중복이 있습니다.")
     };
  } catch (error) {
    throw error
  }
};


class Lotto {
  #numbers; // 프라이빗 필드, 클래스 외부에서 접근이 불가

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        check_lotto(i, j, numbers);
      }
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
