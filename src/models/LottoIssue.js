class LottoIssue {
  totalIssues;
  currentIssue;

  constructor(issues) {
    this.totalIssues = Number(issues);
    this.currentIssue = 0;
  }

  getTotalIssues() {
    return this.totalIssues;
  }

  getCurrentIssue() {
    return this.currentIssue;
  }
}

export default LottoIssue;
