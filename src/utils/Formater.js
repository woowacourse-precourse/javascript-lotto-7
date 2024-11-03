class Formatter {
  static formatResult(rankAndCount) {
    let outputString = '';
    rankAndCount.forEach((rankNcount) => {
      const money = this.setOutputMoney(rankNcount.rank);
      const count = this.setOutputCount(rankNcount.rank);
      if (money && count)
        outputString += `${count} (${money}) - ${rankNcount.count}개\n`;
    });
    return outputString;
  }

  static formatProfile(profit) {
    return `총 수익률은 ${profit}%입니다.`;
  }

  static setOutputMoney(rank) {
    switch (rank) {
      case 1:
        return '2,000,000,000원';
      case 2:
        return '30,000,000원';
      case 3:
        return '1,500,000원';
      case 4:
        return '50,000원';
      case 5:
        return '5,000원';
      default:
        return false;
    }
  }

  static setOutputCount(rank) {
    switch (rank) {
      case 1:
        return '6개 일치';
      case 2:
        return '5개 일치, 보너스 볼 일치';
      case 3:
        return '5개 일치';
      case 4:
        return '4개 일치';
      case 5:
        return '3개 일치';
      default:
        return false;
    }
  }
}

export default Formatter;
