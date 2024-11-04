class WinningLotto {
  async winningnumbers(winningNumbersString) {
    const winningNumbers = winningNumbersString
      .split(",")
      .map((num) => Number(num.trim())); // 문자열을 숫자 배열로 변환
    return winningNumbers;
  }
}

export default WinningLotto;
