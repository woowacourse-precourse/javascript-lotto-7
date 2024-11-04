import { MissionUtils } from "@woowacourse/mission-utils";

const INPUT_MESSAGE = {
  purchaseAmount: "구입금액을 입력해 주세요.\n",
  winningNumber: "당첨 번호를 입력해 주세요.\n",
  bonusNummber: "보너스 번호를 입력해 주세요.\n",
};

class UserInput {
  async getUserInput(messageType) {
    if (!INPUT_MESSAGE[messageType])
      throw new Error("[Error] 존재하지 않는 입력 메세지 입니다.");
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE[messageType]
    );
    return input;
  }
}

export default UserInput;
