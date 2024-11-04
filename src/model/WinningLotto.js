class WinningLotto {
  async winningnumbers(winningNumbersString) {
    const winningNumbers = winningNumbersString
      .split(",")
      .map((num) => Number(num.trim()));
    return winningNumbers;
  }
}

export default WinningLotto;
