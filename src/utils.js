export const checkValidation = (number, numberSet) => {
    if(number < 1 || number > 45){
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if(numberSet.has(number)){
      throw new Error("[ERROR] 보너스 숫자는 로또 번호와 중복되지 않습니다.");
    }
}