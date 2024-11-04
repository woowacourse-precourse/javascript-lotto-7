import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
  async inputPrice() {
    const input = await MissionUtils.Console.readLineAsync(
      "로또를 얼마어치 구매하시겠습니까? \n"
    );

    return input;
  }
}

export default UserInput;
