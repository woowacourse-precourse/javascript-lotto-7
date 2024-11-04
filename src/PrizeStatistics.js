class PrizeStatistics {
    #prizeData = {
        firstPlace: { matchCount: 6, winCount: 0, prizeMoney: 2000000000 },
        secondPlace: { matchCount: 5, winCount: 0, prizeMoney: 30000000 },
        thirdPlace: { matchCount: 5, winCount: 0, prizeMoney: 1500000 },
        fourthPlace: { matchCount: 4, winCount: 0, prizeMoney: 50000 },
        fifthPlace: { matchCount: 3, winCount: 0, prizeMoney: 5000 }
    };

    update(matchCount, hasBonus) {
        if (matchCount === 6) return this.#updateFirstPlace();
        if (matchCount === 5 && hasBonus) return this.#updateSecondPlace();
        if (matchCount === 5) return this.#updateThirdPlace();
        if (matchCount === 4) return this.#updateFourthPlace();
        if (matchCount === 3) return this.#updateFifthPlace();
        return 0;
    }

    #updateFirstPlace() {
        this.#prizeData.firstPlace.winCount += 1;
        return this.#prizeData.firstPlace.prizeMoney;
    }

    #updateSecondPlace() {
        this.#prizeData.secondPlace.winCount += 1;
        return this.#prizeData.secondPlace.prizeMoney;
    }

    #updateThirdPlace() {
        this.#prizeData.thirdPlace.winCount += 1;
        return this.#prizeData.thirdPlace.prizeMoney;
    }

    #updateFourthPlace() {
        this.#prizeData.fourthPlace.winCount += 1;
        return this.#prizeData.fourthPlace.prizeMoney;
    }

    #updateFifthPlace() {
        this.#prizeData.fifthPlace.winCount += 1;
        return this.#prizeData.fifthPlace.prizeMoney;
    }

    getPrizeData() {
        return this.#prizeData;
    }
}

export default PrizeStatistics;