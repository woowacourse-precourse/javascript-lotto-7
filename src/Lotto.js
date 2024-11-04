// 로또 티켓을 생성하고 번호를 관리하는 클래스
class Lotto {
  #numbers; // 프라이빗 필드로 선언

  constructor(numbers) {
    this.#validate(numbers); // 유효성 검사
    this.#numbers = numbers; //인스턴스 변수에 저장
  }

  #validate(numbers) {
    if (numbers.length !== 6 || !numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자 6개여야 합니다.");
    }
  }
  
  // 프라이빗 필드에 접근할 수 있는 안전한 인터페이스를 제공
  getNumbers(){
    return this.#numbers; // #numbers 를 외부에 반환하여, 클래스 외부에서 로또 번호 목록을 읽을 수 있도록 한다.
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
