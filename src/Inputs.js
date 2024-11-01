import { Console } from "@woowacourse/mission-utils";

class Input {
  async inputMoney() {
    while (true) {
      const input = String(
        await Console.readLineAsync("구매할 금액을 입력해주세요.\n")
      );
      const isInvalid = this.#getIsInValid(input);
      if (!isInvalid){
        return input;
      }

    }
  }
  #getIsInValid(money) {
    if (money === "") {
      Console.print("[ERROR] 공백은 입력될 수 없습니다.");
      return true;
    }
    if (isNaN(money)) {
      Console.print("[ERROR] 숫자를 입력해주세요.");
      return true;
    }
    if (money % 1000 !== 0) {
      Console.print("[ERROR] 1000단위의 숫자를 입력해주세요.");
      return true;
    }
    return false;
  }

  async InputLotto(){
    const input = await Console.readLineAsync("구매할 금액을 입력해주세요.\n")
    // todo : indent 줄이기
    return input.trim().split(",").map((e) => {
        e.replace(" ","");
        if (e === "") throw new Error("[ERROR] 공백은 입력될 수 없습니다.");
        if (isNaN(e)) throw new Error("[ERROR] 숫자를 입력될 수 없습니다.");
        return Number(e);
    });
  }
}

export default Input;