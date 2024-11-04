class CalculatingMachine {
    #purchaseAmount;
    #drawResult;

    constructor(purchaseAmount, drawResult) {
        this.#purchaseAmount = purchaseAmount;
        this.#drawResult = drawResult;
    }

    calculate() {
        const totalWinningAmount = this.#calculateTotalPrizeMoney();
        const totalReturn = (totalWinningAmount / this.#purchaseAmount) * 100;
        return this.#formatReturn(totalReturn);
    }

    #calculateTotalPrizeMoney() {
        const winningAmounts = [
            this.#drawResult.getFirstPlaceMoney(),
            this.#drawResult.getSecondPlaceMoney(),
            this.#drawResult.getThirdPlaceMoney(),
            this.#drawResult.getFourthPlaceMoney(),
            this.#drawResult.getFifthPlaceMoney(),
        ];

        const totalWinningAmount = winningAmounts.reduce((acc, amount) => acc + amount, 0);
        return totalWinningAmount;
    }

    #formatReturn(totalReturn) {
        const roundedReturn = Math.round(totalReturn * 10) / 10;

        const formattedReturn = roundedReturn.toLocaleString('en-AU', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
        });

        return formattedReturn;
    }
}

export default CalculatingMachine;
