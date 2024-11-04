import ResultView from "../views/ResultView.js";

class ResultController {
  constructor() {
    this.resultView = new ResultView();
  }

  run(winningNumbers, lottoNumbers) {
    this.resultView.displayResultMessage();
    this.resultView.displayResult(winningNumbers, lottoNumbers);
  }
}

export default ResultController;
