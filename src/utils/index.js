import { UNIT_LOTTO_PRICE } from "../constants/index.js";

const calculateQuatity = (purchaseAmount) =>
  parseInt(purchaseAmount, 10) / UNIT_LOTTO_PRICE;
export { calculateQuatity };
