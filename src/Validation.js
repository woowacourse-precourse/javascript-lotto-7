export const validatePrice = (try_num) => {
  if (!Number.isInteger(try_num)) {
    throw Error("[ERROR] 입력 금액이 1,000원 단위가 아닙니다.");
  }
};
