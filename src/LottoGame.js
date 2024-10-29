import { getPurchaseAmount } from "./InputHandler.js";
import { displayPurchasedLottoCount } from "./OutputHandler.js";

export const start = async () => {
    const purchaseAmount = await getPurchaseAmount();
    displayPurchasedLottoCount(purchaseAmount);
}