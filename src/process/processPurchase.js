import { Console } from "@woowacourse/mission-utils";
import Purchase from "../Class/Purchase.js";
import { getPurchase } from "../feature/UI/getUserInput.js";

async function processPurchase() {
  try {
    const USER_INPUT = await getPurchase();
    const PURCHASE = new Purchase(USER_INPUT);
    return PURCHASE.purchase;
  } catch (error) {
    Console.print(error.message)
    return await processPurchase();
  }
};

export default processPurchase;