import { Console } from "@woowacourse/mission-utils";

function validateAnswerNum(answerNum) {
  if (!answerNum.every((num) => !isNaN(num))) {
    throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
  }
  if (answerNum.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
  const uniqueNumbers = new Set(answerNum);
  if (uniqueNumbers.size !== answerNum.length) {
    throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }
}

export async function setAnswerNum() {
  try {
    let answerNum = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    answerNum = answerNum.split(",").map((num) => Number(num.trim()));
    validateAnswerNum(answerNum);

    return answerNum;
  } catch (error) {
    Console.print(error.message);
    return setAnswerNum();
  }
}
