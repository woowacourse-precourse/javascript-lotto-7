class ValidInput {
  AmountCheck(amount) {
    if (amount === "") {
      throw new Error("[ERROR] 금액이 유효하지 않습니다.");
    }
    if (Number.isNaN(Number(amount))) {
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    if (Number(amount) % 1000 !== 0 || Number(amount) === 0) {
      throw new Error("[ERROR] 1000원 단위로만 입력 가능합니다.");
    }
    
  }
  WinnerCheck(arr) {
    if (arr.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개 입니다.");
    }
    const set = new Set(arr);
    if (arr.length !== set.size) {
      throw new Error("[ERROR] 당첨 번호는 중복 되면 안됩니다.");
    }
    arr.forEach((num) => {
      if (num === "") {
        throw new Error("[ERROR] 당첨 번호 중 빈칸이 있습니다.");
      }
      const Numbernum = Number(num);
      if (Numbernum < 1 || Numbernum > 45) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45까지 입니다.");
      }
      if (Number.isNaN(Numbernum)) {
        throw new Error("[ERRROR] 당첨 번호 중 숫자가 아닌 것이 있습니다.");
      }
    });
  }
  BonusCheck(winnerArr, bonus) {
    if (bonus === "") {
      throw new Error("[ERROR] 보너스 번호가 유효하지 않습니다.");
    }
    const Numberbonus = Number(bonus);
    if (winnerArr.includes(Numberbonus)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않습니다.");
    }
    if (Numberbonus < 1 || Numberbonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45까지 입니다.");
    }
    if (Number.isNaN(Numberbonus)) {
      throw new Error("[ERRROR] 보너스 번호 중 숫자가 아닌 것이 있습니다.");
    }
  }
}

export default ValidInput;
