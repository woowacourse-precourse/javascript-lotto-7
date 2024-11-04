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

    // 0, -1000 이런 경우에는 위에서 걸러지지 않는다.
    if (price < 1000) {
      throw new Error("[ERROR] 1000원 이상의 금액을 입력해주세요");
    }

    return input;
  }
}

export default UserInput;
