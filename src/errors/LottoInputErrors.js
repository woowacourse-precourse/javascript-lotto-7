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

export const isDuplicateNum = (bonusNum, winningNums) => {
  if (winningNums.includes(bonusNum))
    throw new Error(
      "`[ERROR] : 보너스 번호는 당첨 번호와 중복해서 입력할 수 없습니다.`"
    );
};

export const validateNumRange = (bonusNum) => {
  if (bonusNum < 1 || bonusNum > 45)
    throw new Error("[ERROR] : 번호는 1~45 사이로만 입력해주세요.");
};

export const validateBonusNumber = (bonusNum) => {
  if (typeof bonusNum !== "number" || isNaN(bonusNum)) {
    throw new Error("[ERROR] : 보너스 번호는 1개만 입력할 수 있습니다.");
  }
};
