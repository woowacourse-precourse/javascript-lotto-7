class Generator {
  createLotto(amount) {
    try {
      const times = this.calculateTimes(amount);
      const lottos = [];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  calculateTimes(amount) {
    return amount / 1000;
  }
}

export default Generator;
