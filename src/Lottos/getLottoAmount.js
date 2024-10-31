export const getLottoAmount = (price) => {
  if (price % 1000 === 0) return price / 1000;
  throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
};
