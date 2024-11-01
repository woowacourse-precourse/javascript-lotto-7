class Validate {
  validatePrice(price) {}

  validateLottoNumbers(lottoNumbers) {}

  validateBonusNumber(bonusNumber) {}

  #PriceEmpty(price) {}
  #PriceType(price) {}
  #PriceRange(price) {}
  #PriceDivide(price) {}

  #LottoNumbersEmpty(lottoNumbers) {}
  #LottoNumbersLength(lottoNumbers) {}
  #LottoNumbersType(lottoNumbers) {}
  #LottoNumbersOutOfRange(lottoNumbers) {}
  #LottoNumbersDuplicate(lottoNumbers) {}
  #LottoNumbersDelimiterAtStartOrEnd(lottoNumbers) {}
  #LottoNumbersDelimiterTwice(lottoNumbers) {}

  #BonusNumberEmpty(bonusNumber) {}
  #BonusNumberType(bonusNumber) {}
  #BonusNumberOutOfRange(bonusNumber) {}
  #BonusNumberDuplicate(bonusNumber, lottoNumbers) {}
}

export default Validate;
