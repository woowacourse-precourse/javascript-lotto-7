class BuyLotto {
  async buylottonumbers(totalPrize) {
    const purchaseAmount = totalPrize / 1000;
    return purchaseAmount;
  }
}

export default BuyLotto;
