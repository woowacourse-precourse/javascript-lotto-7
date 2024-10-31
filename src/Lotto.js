import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers, winLottoNumbers) {
    this.#numbers = numbers;
    this.winLottoNumbers = winLottoNumbers;
  }

  // TODO: 추가 기능 구현
  async winLotto() {
    this.winLottoNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
  }
}

export default Lotto;
