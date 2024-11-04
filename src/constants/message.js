export const INPUT = {
  PURCHASE_PRICE: "구입금액을 입력해 주세요.\n",
  LOTTO_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT = {
  PURCHASE: "개를 구매했습니다.",
};

export const WINNING_RANK = [
  { name: "FIFTH", count: 3, reward: 5000, description: "3개 일치" },
  { name: "FOURTH", count: 4, reward: 50000, description: "4개 일치" },
  { name: "THIRD", count: 5, reward: 1500000, description: "5개 일치" },
  {
    name: "SECOND",
    count: 5.5,
    reward: 30000000,
    description: "5개 일치, 보너스 볼 일치",
  },
  { name: "FIRST", count: 6, reward: 2000000000, description: "6개 일치" },
];

export const RATE = "당첨 통계";
export const SECTION = "---";
export const DELIMITER = ",";
