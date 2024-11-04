export default function getMatchedCount(lottoNumbers, winningNumbers) {
  return lottoNumbers.filter((number) => winningNumbers.includes(number))
    .length;
}
