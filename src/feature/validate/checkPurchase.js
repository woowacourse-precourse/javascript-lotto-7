function checkPurchase(userInput) {
  if (Number.isNaN(userInput)) {
    throw new Error('[ERROR] 입력하신 값이 숫자가 아닙니다.');
  }
    
  if (userInput < 1000) {
    throw new Error('[ERROR] 구매액이 너무 작습니다.')
  }

  if (userInput % 1000 !== 0) {
    throw new Error('[ERROR] 구매액은 1,000원으로 나누어 떨어져야 합니다.');
  }
}

export default checkPurchase;