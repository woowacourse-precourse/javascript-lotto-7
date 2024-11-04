import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
  async inputPrice() {
    const input = await MissionUtils.Console.readLineAsync(
      "로또를 얼마어치 구매하시겠습니까? \n"
    );
    const price = parseInt(input, 10);

    if (isNaN(price)) {
      throw new Error("[ERROR] 구매금액은 숫자로 입력해주세요");
    }

    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해주세요");
    }

    return input;
  }
}

export default UserInput;
