import HandleIo from "./HandleIo.js";


// 당첨번호 입력란
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numArr = numbers.flatMap((num)=>num);
    if (numbers[0].length !== 6) {
      throw new Error("[ERROR] : 로또 번호는 6개여야 합니다.");
    };
    if(this.checkDuplication(numArr)){
      throw new Error("[ERROR] : 로또 번호에 중복이 있습니다.");
    };
  };

  // TODO: 추가 기능 구현
  checkDuplication(numbers){
    const setArr = new Set(numbers);
    return setArr.size !== numbers.length;
  }
}

export default Lotto;
