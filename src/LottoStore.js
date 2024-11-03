export default class LottoStore {
    #countLotto;

    getLottoTicketCount(input) {
        const inputNumber = Number(input);
        this.#countLotto = Math.floor(inputNumber / 1000);
        return this.#countLotto;
    }

}