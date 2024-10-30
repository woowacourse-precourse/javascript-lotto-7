import { getPurchaseAmount, getWinningNumbers } from "./InputHandler.js";
import { displayPurchasedLottoCount, displayGeneratedLottos } from "./OutputHandler.js";
import { Console, Random } from "@woowacourse/mission-utils";

const LOTTO_NUMBER_COUNT = 6;
const LOTTO_MIN = 1;
const LOTTO_MAX = 45;

export const start = async () => {
    const purchaseAmount = await getPurchaseAmount();
    const quantity = displayPurchasedLottoCount(purchaseAmount);

    displayGeneratedLottos(generateLottos(quantity));

    const winningNumbers = await getWinningNumbers();
}

const generateLottos = quantity => {
    const generatedLottos = Array.from({ length: quantity }, () => 
        Random.pickUniqueNumbersInRange(LOTTO_MIN, LOTTO_MAX, LOTTO_NUMBER_COUNT).map(Number).sort((a, b) => a - b)
    );

    return generatedLottos;
}