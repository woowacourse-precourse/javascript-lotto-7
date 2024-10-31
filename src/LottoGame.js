import { getPurchaseAmount, getWinningNumbers, getBonusNumber } from "./InputHandler.js";
import { displayPurchasedLottoCount, displayGeneratedLottos, displayWinningDetails } from "./OutputHandler.js";
import { calculateWinningCounts } from "./Calculator.js";
import { Console, Random } from "@woowacourse/mission-utils";

const LOTTO_NUMBER_COUNT = 6;
const LOTTO_MIN = 1;
const LOTTO_MAX = 45;

export const start = async () => {
    const purchaseAmount = await getPurchaseAmount();
    const quantity = displayPurchasedLottoCount(purchaseAmount);
    const lottos = generateLottos(quantity);

    displayGeneratedLottos(lottos);

    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber(winningNumbers);

    displayWinningDetails(calculateWinningCounts(lottos, winningNumbers, bonusNumber));
}

const generateLottos = quantity => {
    const generatedLottos = Array.from({ length: quantity }, () => 
        Random.pickUniqueNumbersInRange(LOTTO_MIN, LOTTO_MAX, LOTTO_NUMBER_COUNT).map(Number).sort((a, b) => a - b)
    );

    return generatedLottos;
}