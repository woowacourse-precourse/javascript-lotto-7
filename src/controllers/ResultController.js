import ResultView from "../views/ResultView.js";

class ResultController {
  constructor() {
    this.resultView = new ResultView();
  }

  run(winningNumbers, lottoNumbers, purchaseAmount) {
    this.resultView.displayResultMessage();
    this.resultView.displayResult(winningNumbers, lottoNumbers, purchaseAmount);
  }
}

export default ResultController;
