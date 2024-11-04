// 빈 값이 들어온 경우
export const isInputEmpty = (input) => {
  if (input.trim === "") throw "[ERROR] 빈 값은 입력할 수 없습니다.";
};

// 구매 금액이 0원인 경우
export const isInputNotZero = (input) => {
  if (Number(input) === 0) throw "[ERROR] 로또를 구매하지 않으셨습니다.";
};

// 입력값이 숫자가 아닌 경우 - 금액, 보너스
export const isNotNumber = (input) => {
  if (Number(input) !== 0 && !Number(input))
    throw "[ERROR] 입력값은 숫자여야 합니다.";
};

// 입력값이 숫자가 아닌 경우 - 당첨
export const isNotNumberPrize = (prizeNumber) => {
  const notPrizeNumber = prizeNumber.filter(
    (e) => Number(e) !== 0 && !Number(e)
  );
  if (notPrizeNumber.length > 0)
    throw "[ERROR] 당첨 번호는 모두 숫자여야 합니다.";
};

// 범위 밖의 숫자가 들어온 경우 - 당첨
export const isOutOfRangeInput = (prizeNumber) => {
  prizeNumber.forEach((e) => {
    if (e < 1 || e > 45) throw "[ERROR] 1-45 사이의 숫자를 입력해주세요.";
  });
};

// 범위 밖의 숫자가 들어온 경우 - 보너스
export const isOutOfRangeBounsInput = (bounsNumber) => {
  if (bounsNumber < 1 || bounsNumber > 45)
    throw "[ERROR] 1-45 사이의 숫자를 입력해주세요.";
};

// 사용자가 입력한 금액이 1000원 단위가 아닌 경우
export const isNotUnitThousand = (amount) => {
  if (amount % 1000 !== 0) throw "[ERROR] 구매 금액은 1000원 단위 입니다.";
};

// 당첩 번호가 6개가 아닌 경우
export const isMorePrize = (prizeNumber) => {
  if (prizeNumber.length !== 6)
    throw "[ERROR] 당첨 번호는 6개를 입력해야 합니다.";
};

// 보너스 번호가 한개가 아닌 경우
export const isMoreBouns = (bounsNumber) => {
  if (bounsNumber.length !== 1)
    throw "[ERROR] 보너스 번호는 한 개만 입력 가능합니다.";
};

// 당첨 번호가 중복되는 경우
export const isDuplicatePrize = (prizeNumber) => {
  const ckeckPrizeNumber = new Set(prizeNumber);
  if (prizeNumber.length !== ckeckPrizeNumber.size)
    throw "[ERROR] 당첨 번호는 중복될 수 없습니다.";
};

// 보너스 번호가 당첨 번호와 중복된 경우
export const isDuplicateBouns = (prizeNumber, bounsNumber) => {
  const prizeArray = prizeNumber.filter((e) => e === bounsNumber);
  if (prizeArray.length !== 0)
    throw "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.";
};
