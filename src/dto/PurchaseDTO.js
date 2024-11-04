class PurchaseDTO {
  lottoCount;
  lottos;

  constructor(lottoCount, lottos) {
    this.lottoCount = lottoCount;
    this.lottos = lottos;
  }

  static from(purchaseHistory) {
    return new PurchaseDTO(
      purchaseHistory.lottoCount,
      purchaseHistory.lottos.map((lotto) => lotto.getNumbers())
    );
  }
}

export default PurchaseDTO;
