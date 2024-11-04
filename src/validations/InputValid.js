
export default class InputValid {
  static isDupNums(winningNums) {
    const winningNumsToSet = new Set(winningNums);
    if (winningNums.length > winningNumsToSet.size) {
      throw new Error("[ERROR] 중복된 당첨 번호가 존재합니다.");
    }
  }
  static isNumsInRange(winningNums){
    if (winningNums.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
  static isExtraNums(winningNums) {
    if (winningNums.length != 6) {
      throw new Error("[ERROR] 당첨번호가 6개 이어야 합니다.");
    }
  }

  static isBonusNumValid(winningNums, bonusNum) {
    if (winningNums.includes(bonusNum)) {
      throw new Error("[ERROR] 보너스 번호가 중복된 숫자입니다.");
    }
  }

  static isBonusNumInRange(bonusNum){
    if (bonusNum < 1 || bonusNum > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
    }
  }

  static isThousandUnit(purchaseAmount){
    if((purchaseAmount)%1000 !== 0){
        throw new Error("[ERROR] 구매금액을 1000원 단위로 입력해주세요.")
    }
  }
}