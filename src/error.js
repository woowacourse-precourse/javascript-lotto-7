//에러처리

const validateLottoNumbers = (numbers) => {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const duplicateLottoNumbers = new Set(numbers).size !== numbers.length;
    if (duplicateLottoNumbers) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
  };
  
  const validatePurchaseAmount = (amount) => {
    if (isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1,000원 단위로 입력해야 합니다.");
    }
  };
  
  const validateWinningNumbers = (winningNumbers, bonusNumber) => {
    validateLottoNumbers(winningNumbers);
    if (bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 하며, 당첨 번호와 중복될 수 없습니다.");
    }
  };
  
  export { validateLottoNumbers, validatePurchaseAmount, validateWinningNumbers };
  