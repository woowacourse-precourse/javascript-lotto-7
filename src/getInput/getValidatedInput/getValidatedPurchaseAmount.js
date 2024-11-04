import getPurchaseAmount from "../getPurchaseAmount.js";
import validatePurchaseAmount from "../../validate/validatePurchaseAmount.js";
import { Console } from "@woowacourse/mission-utils";

export default async function getValidatedPurchaseAmount() {
  try {
    const purchaseAmount = await getPurchaseAmount();
    validatePurchaseAmount(purchaseAmount);
    Console.print("");
    return purchaseAmount;
  } catch (error) {
    Console.print(error.message);
    return await getValidatedPurchaseAmount();
  }
}
