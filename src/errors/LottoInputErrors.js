export const isValidPrice = (lottoPrice) => {
  if (lottoPrice % 1000)
    throw new Error(
      `[ERROR] : 구입 금액은 1,000원 단위로 입력해 주세요 (예: 1000, 2000)`
    );
};

export const isZeroPrice = (lottoPrice) => {
  if (!lottoPrice || +lottoPrice === 0) {
    throw new Error(`[ERROR] : 금액을 입력해주세요`);
  }
};
