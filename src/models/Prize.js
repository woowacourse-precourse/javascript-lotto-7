class Prize {
  static rank({ matchCount, isBonusMatch }) {
    switch (matchCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (isBonusMatch) return 2;
        return 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }
}

export default Prize;
