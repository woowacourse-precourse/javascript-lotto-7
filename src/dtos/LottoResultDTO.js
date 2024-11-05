export default class LottoResultDTO {
  constructor(result, earningRate) {
    this.result = result;
    this.earningRate = earningRate;
  }

  static ofResultAndEarningRate(result, earningRate) {
    return new LottoResultDTO(result, earningRate);
  }

  getResult() {
    return this.result;
  }

  getEarningRate() {
    return this.earningRate;
  }
}