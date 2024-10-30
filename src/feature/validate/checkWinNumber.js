function checkWinNumber(numbers) {
  /** TODO : 
   * 1. 매개변수로 숫자로 변환된 배열을 받는다
   * 2. 유효셩을 체크한다
   *    - NaN, decimal, 1 ~ 45 사이의 값인지
   * 3. 유효성을 통과하지 못했을 경우 에러 메시지를 생성
   * 4. 에러를 반환
   */
  numbers.forEach(number => {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 당첨 번호는 숫자로 이루어져야 합니다.')
    }
    if (number <= 0 && number >= 46) {
      throw new Error('[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자여야 합니다.')
    }
    if (Math.floor(number) !== number && Math.ceil(number) !== number) {
      throw new Error('[ERROR] 소수는 당첨 번호로 지정할 수 없습니다.')
    }
  });
}