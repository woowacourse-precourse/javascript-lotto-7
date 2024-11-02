import { Console } from "@woowacourse/mission-utils";

function validateBonusNum(answerNum, bonusNum) {
  if (bonusNum.length == 0)
    throw new Error("[ERROR] 보너스 번호를 입력해주세요.");
  if (isNaN(bonusNum))
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  if (answerNum.includes(bonusNum))
    throw new Error(
      "[ERROR] 보너스 번호와 당첨 번호는 중복되지 않아야 합니다."
    );
}

export async function setBonusNum(answerNum) {
  try {
    let bonusNum = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    bonusNum = Number(bonusNum);
    validateBonusNum(answerNum, bonusNum);

    return bonusNum;
  } catch (error) {
    Console.print(error.message);
    return setBonusNum(answerNum);
  }
}
