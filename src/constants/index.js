import FrozenMap from "../FrozenMap.js";

export const LOTTO_MESSAGES = Object.freeze({
  INVALID_PRICE: "구입금액은 1000원 단위로 입력해 주세요.",
  INVALID_MAX_PRICE: "구입금액은 10만원을 넘을 수 없습니다.",
  INVALID_NUMBER_COUNT: "쉼표를 기준으로 6개의 숫자만 입력 가능합니다.",
  INVALID_DUPLICATE_NUMBER: "중복된 숫자가 있습니다.",
  INVALID_NON_POSITIVE_INTEGER: "양의 정수만 입력 가능합니다.",
  INVALID_RANGE_NUMBER: "1부터 45까지의 숫자만 입력 가능합니다.",
  DUPLICATE_BONUS_NUMBER: "보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  INPUT_LOTTO_PRICE: "구입금액을 입력해 주세요.\n",
  BUY_LOTTO: "개를 구매했습니다.",
  INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호을 입력해 주세요.\n",
  RESULT_LOTTO: "\n당첨 통계\n---",
});

export const LOTTO_RULES = Object.freeze({
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  NUMBERS_SIZE: 6,
  PRICE: 1000,
});

export const LOTTO_PRIZE_MONEY_MAP = new FrozenMap([
  [3, 5000],
  [4, 50000],
  [5, 1500000],
  ["5B", 30000000], // 5개 일치 + 보너스 볼 일치
  [6, 2000000000],
]);

export const LOTTO_RESULT_MESSAGES_MAP = Array.from(LOTTO_PRIZE_MONEY_MAP).reduce((messages, [key, value]) => {
  const prizeMoney = value.toLocaleString();
  if (key === "5B") {
    messages.set(key, `5개 일치, 보너스 볼 일치 (${prizeMoney}원) - `);
    return messages;
  }

  messages.set(key, `${key}개 일치 (${prizeMoney}원) - `);
  return messages;
}, new FrozenMap());

LOTTO_RESULT_MESSAGES_MAP.freeze(); // LOTTO_RESULT_MESSAGES 객체 동결
