const lotteryStatistics = [
  {
    matches: Object.freeze(3),
    price: Object.freeze(5),
    amount: 0,
  },
  {
    matches: Object.freeze(4),
    price: Object.freeze(50),
    amount: 0,
  },
  {
    matches: Object.freeze(5),
    price: Object.freeze(1500),
    amount: 0,
  },
  {
    matches: Object.freeze(7),
    price: Object.freeze(30000),
    amount: 0,
  },
  {
    matches: Object.freeze(6),
    price: Object.freeze(2000000),
    amount: 0,
  },
];

const PROMPTS = {
  PURCHASE_PROMPT: "구입금액을 입력해 주세요.( '원'과 ,는 생략해주세요) : ",
  PURCAHSE_INFO_PROMPT: "개를 구매했습니다.",
  LOTTERY_NUM_PROMPT: "당첨 번호를 입력해 주세요. : ",
  LOTTERY_BONUS_PROMPT: "보너스 번호를 입력해 주세요. : ",
};

const LOTTERY_NUM_RANGE = {
  START: 1,
  END: 45,
};

const ERROR_MESSAGES = {
  LOTTERY_NUM_INPUT_COMMA: ",로 입력값들을 구분해주세요.",
  LOTTERY_NUM_INPUT_LENGTH: "로또 번호 6개를 입력해주세요.",
  LOTTERY_NUM_INPUT_RANGE: "로또 번호의 숫자 범위는 1~45까지입니다.",
  LOTTERY_NUM_INPUT_NaN: "입력값을 확인해주세요.",
  LOTTERY_BONUS_NUM: "보너스 번호는 기존 입력 번호들과 겹치면 안됩니다.",
  PURCHASE_STRING: "로또 구입 금액은 1,000원 단위로 입력해주세요.",
};

export { PROMPTS, ERROR_MESSAGES, LOTTERY_NUM_RANGE, lotteryStatistics };
