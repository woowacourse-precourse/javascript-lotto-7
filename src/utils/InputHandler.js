import { Console } from "@woowacourse/mission-utils";

export async function getLottoCount() {
  const budget = await Console.readLineAsync(
    "구입금액을 입력해 주세요.\n"
  );

  const lottoCount = budget / 1000
  return lottoCount;
}