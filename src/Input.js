import { Console } from "@woowacourse/mission-utils";

class Input {
  static async getMoney() {
    try {
      const money = await Console.readLineAsync("구입금액을 입력해 주세요. \n");
      Input.validateMoney(money);
      return parseInt(money);
    } catch (error) {
      console.log(error.message);
      return Input.getMoney();
    }
  }

  static validateMoney(money){
    const checkMoney = parseInt(money);
    if(isNaN(checkMoney)) throw new Error("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
    if(checkMoney <= 0) throw new Error("[ERROR] 로또 구입 금액은 양수여야 합니다.");
    if(checkMoney % 1000 !== 0) throw new Error("[ERROR] 금액은 1,000원 단위로 입력해야 합니다.");
  }
}

export default Input;