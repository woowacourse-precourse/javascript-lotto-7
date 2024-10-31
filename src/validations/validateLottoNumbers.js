const validateLottoNumberCount = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error('[ERROR] 로또 당첨 번호는 6개여야 합니다. 다시 입력해주세요.');
  }
};

const validateNumber = (numbers) => {
  const isNumber = (number) => isNaN(number);
  if (numbers.some(isNumber)) {
    throw new Error('[ERROR] 로또 당첨 번호가 숫자가 아닙니다. 다시 입력해주세요.');
  }
};

const validateInteger = (numbers) => {
  const isInteger = (number) => !Number.isInteger(number);
  if (numbers.some(isInteger)) {
    throw new Error('[ERROR] 로또 당첨 번호가 정수가 아닙니다. 다시 입력해주세요.');
  }
};

const validateLottoRange = (numbers) => {
  const checkRange = (number) => number < 1 || number > 45;
  if (numbers.some(checkRange)) {
    throw new Error('[ERROR] 로또 당첨 번호는 1 이상 45 이하의 숫자로 입력해 주세요.');
  }
};

const validateDuplicate = (numbers) => {
  const numbersSet = new Set(numbers);
  if (numbersSet.size !== numbers.length) {
    throw new Error('[ERROR] 로또 당첨 번호에 중복된 숫자가 있습니다. 다시 입력해주세요.');
  }
};

const validateLottoNumbers = (numbers) => {
  validateLottoNumberCount(numbers);
  validateNumber(numbers);
  validateInteger(numbers);
  validateLottoRange(numbers);
  validateDuplicate(numbers);
};

export default validateLottoNumbers;
