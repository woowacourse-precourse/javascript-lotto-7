export const LOTTO_RESULT = new Map([
  [3, 5000],
  [4, 50000],
  [5, 1500000],
  [5.5, 30000000],
  [6, 2000000000],
]);

export let resultNums = new Map([
  [3, 0],
  [4, 0],
  [5, 0],
  [5.5, 0],
  [6, 0],
]);

export let purchase = [];

export let inputBuyCashValue = null;
export const setInputBuyCashValue = (value) => {
  inputBuyCashValue = value;
};
export const getInputBuyCashValue = () => inputBuyCashValue;

export let inputBuyNumValue = null;
export const setInputBuyNumValue = (value) => {
  inputBuyNumValue = value;
};
export const getInputBuyNumValue = () => inputBuyNumValue;

export let inputWiinningNumsValue = null;
export const setInputWiinningNumsValue = (value) => {
  inputWiinningNumsValue = value;
};
export const getInputWiinningNumsValue = () => inputWiinningNumsValue;

export let inputBonusNumValue = null;
export const setInputBonusNumValue = (value) => {
  inputBonusNumValue = value;
};
export const getInputBonusNumValue = () => inputBonusNumValue;
