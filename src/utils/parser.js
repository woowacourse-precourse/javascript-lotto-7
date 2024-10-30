
const parseStringToNumber = (price) => {
  return Number(price);
}

const parseMoneyToLottoCount = (price) => {
  return price / 1_000;
}

const parser = {
  parseStringToNumber,
  parseMoneyToLottoCount,

}

export default parser;
