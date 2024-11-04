// 범위에 맞지 않는 로또 번호 입력시
export const lottoNumberOutOfRangeException = lottoNumber => {
  if (Number.isInteger(lottoNumber)) {
    if (lottoNumber < 1 || lottoNumber > 45) {
      throw new Error("[ERROR] 1~45사이의 숫자만 입력해주세요.");
    }
  } else {
    for (let number of lottoNumber) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1~45사이의 숫자만 입력해주세요.");
      }
    }
  }
};

export const lottoNumberDuplicationCheckException = winningLotto => {
  const winnginLottoSet = new Set(winningLotto);
  if (winningLotto.length !== winnginLottoSet.size) {
    throw new Error("[ERROR] 같은 숫자를 입력할 수는 없습니다.");
  }
};
