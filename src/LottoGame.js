import { LOTTO } from "./constants.js";
import { getPurchaseAmount, getWinningNumbers, getBonusNumber } from "./InputHandler.js";
import { displayPurchasedLottoCount, displayGeneratedLottos, displayWinningDetails } from "./OutputHandler.js";
import { calculateWinningCounts } from "./Calculator.js";
import { Random } from "@woowacourse/mission-utils";

export const start = async () => {
    const purchaseAmount = await getPurchaseAmount();
    const quantity = displayPurchasedLottoCount(purchaseAmount);
    const lottos = generateLottos(quantity);

    displayGeneratedLottos(lottos);

    const winningNumbers = await getWinningNumbers();
    const bonusNumber = await getBonusNumber(winningNumbers);

    displayWinningDetails(calculateWinningCounts(lottos, winningNumbers, bonusNumber), purchaseAmount);
}

const generateLottos = quantity => {
    const generatedLottos = Array.from({ length: quantity }, () => 
        Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.NUMBER_COUNT).map(Number).sort((a, b) => a - b)
    );

    return generatedLottos;
}