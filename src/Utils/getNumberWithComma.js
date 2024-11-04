// number => string
function getNumberWithComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default getNumberWithComma;
