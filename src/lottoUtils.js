import Lotto from "./Lotto.js";

/** 로또 amount 만큼 구입하기 */
export const generateLotto = (amount) => {
  const tickets = [];
  for (let i = 0; i < amount; i++) {
    tickets.push(Lotto.generateRandomNumber());
  }
  return tickets;
};
