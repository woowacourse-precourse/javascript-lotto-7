const moneyValidation = (money) => {
  if (!money) {
    throw new Error('구입 금액을 입력해 주세요.');
  }

  if (/[^\d+]/g.test(money)) {
    throw new Error('구입 금액은 정수 외 다른 문자열은 입력할 수 없어요.');
  }

  const moneyNumber = parseInt(money, 10);
  if (moneyNumber > 100000) {
    throw new Error('로또 최대 하루 구입 금액은 10만원입니다.');
  }

  if (moneyNumber < 1000 || money % 1000 !== 0) {
    throw new Error('구입 금액은 1000원 단위로 입력해주세요.');
  }
};

export { moneyValidation };
