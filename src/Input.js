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

  static async getJackpotNumber() {
    try {
      const jackpotNumber = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      Input.validateJackpotNumber(jackpotNumber);
      return jackpotNumber;
    } catch (error) {
      console.log(error.message);
      return Input.getJackpotNumber();
    }
  }

  static validateJackpotNumber(jackpotNumber){
    const checkSplit = jackpotNumber;
    if(!checkSplit.includes(",")) throw new Error("[ERROR] 번호는 쉼표(,)로 구분되어야 합니다.");

    const checkNumber = jackpotNumber.split(",").map((num) => num.trim());
    checkNumber.forEach((num) => {
      if(isNaN(num)) throw new Error("[ERROR] 로또 번호는 숫자들로 구성되야 합니다.");
      if(num < 1 || num > 45) throw new Error("[ERROR] 번호는 1에서 45 사이의 숫자여야 합니다.");
    })

    if(checkNumber.length !== 6) throw new Error("[ERROR] 번호는 6개 입력해야 합니다.");
  }
}

export default Input;