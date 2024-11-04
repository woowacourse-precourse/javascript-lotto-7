import { Console } from "@woowacourse/mission-utils";
export default async function getBonusNumber() {
  const bonusNumber = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요.\n"
  );
  return Number(bonusNumber);
}
