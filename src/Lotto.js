// 로또 번호 중복체크 함수
function check_lotto(i, j, numbers) {
  try {
    if (i !== j && numbers[i] === numbers[j]) {
      throw new Error("[ERROR]: 로또 번호에 중복이 있습니다.")
     };
    if (numbers[i] !== parseInt(numbers[i])) {
      throw new Error("[ERROR]: 로또 번호가 자연수가 아닙니다.")
    }
    if (numbers[i] > 45 || numbers[i] < 1) {
      throw new Error("[ERROR]: 로또 번호는 1에서 45 사이의 값을 입력해야 합니다.")
    }
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
