import Validator from '../src/Validator';

describe('Validator 클래스 테스트', () => {
   test('checkAmount 메서드 테스트', () => {
      const amount = '1000';
      expect(() => Validator.checkAmount(amount)).not.toThrow();
   });

   test('checkAmount 메서드 예외 테스트', () => {
      const amount = '10010';
      expect(() => Validator.checkAmount(amount)).toThrow('[ERROR]');
   });

   test('checkLottoNumber 메서드 테스트', () => {
      const lottoNumber = '1,2,3,4,5,6';
      expect(() => Validator.checkLottoNumber(lottoNumber)).not.toThrow();
   });

   test('checkLottoNumber 메서드 예외 테스트', () => {
      const lottoNumber = '1,2,3,4,5,6,7';
      expect(() => Validator.checkLottoNumber(lottoNumber)).toThrow('[ERROR]');
   });

   test('checkBonusNumber 메서드 테스트', () => {
      const bonusNumber = '7';
      const lottoNumber = '1,2,3,4,5,6';
      expect(() =>
         Validator.checkBonusNumber(bonusNumber, lottoNumber),
      ).not.toThrow();
   });

   test('checkBonusNumber 메서드 예외 테스트', () => {
      const bonusNumber = '46';
      const lottoNumber = '1,2,3,4,5,6';
      expect(() =>
         Validator.checkBonusNumber(bonusNumber, lottoNumber),
      ).toThrow('[ERROR]');
   });
});
