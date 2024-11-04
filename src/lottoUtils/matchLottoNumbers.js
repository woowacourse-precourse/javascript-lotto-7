export default function matchLottoNumbers(lottoNumber, winningNumber) {
  const matchedNumbers = lottoNumber.filter((number) =>
    winningNumber.includes(number)
  );
  return matchedNumbers.length;
}
