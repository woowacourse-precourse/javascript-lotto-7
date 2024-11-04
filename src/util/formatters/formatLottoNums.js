export default function formatLottoNumbers(lottoNumbers) {
  return lottoNumbers.map(numbers => `[${numbers.sort((a, b) => a - b).join(', ')}]`).join('\n');
}
