const FIND_NOT_NUMBER = /[^\d+]/g;

const userInputEmpty = (input, message = '') => {
  if (!input) {
    throw new Error(`${message} 입력해 주세요.`);
  }
};

const moneyValidation = (money) => {
  userInputEmpty(money, '구입 금액을');

  if (FIND_NOT_NUMBER.test(money)) {
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

const lottoNumbersValidation = (numbers) => {
  userInputEmpty(numbers, '로또 번호를');

  if (numbers.length !== 6) {
    throw new Error('로또 번호는 6개여야 합니다.');
  }

  if (numbers.length !== new Set([...numbers]).size) {
    throw new Error('로또 번호는 중복되면 안됩니다.');
  }

  if (numbers.some((number) => number > 45 || number < 1)) {
    throw new Error('로또 번호는 최소 1이상 최대 45이하로 구성되어야 합니다.');
  }

  if (numbers.some((number) => FIND_NOT_NUMBER.test(number))) {
    throw new Error('로또 번호는 숫자외 다른 문자열이 포함될 수 없습니다.');
  }
};

const bonusNumberValidation = (number) => {
  userInputEmpty(number, '보너스 번호를');

  if (FIND_NOT_NUMBER.test(number)) {
    throw new Error('보너스 번호는 양수로만 구성되어야 합니다.');
  }

  const parseNumber = parseInt(number, 10);
  if (parseNumber > 45 || parseNumber < 1) {
    throw new Error(
      '보너스 번호는 숫자는 최소 1이상 최대 45이하로만 구성되어야 합니다.',
    );
  }
};

export { moneyValidation, lottoNumbersValidation, bonusNumberValidation };
