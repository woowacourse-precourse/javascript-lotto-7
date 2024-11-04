import { Console } from "@woowacourse/mission-utils";

export default async function getWinningNumber() {
  const winningNumber = await Console.readLineAsync(
    "당첨 번호를 입력해 주세요.\n"
  );
  const winningNumberArr = winningNumber
    .split(",")
    .map((number) => Number(number));

  return winningNumberArr;
}
