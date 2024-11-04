// __tests__/ServiceFactory.test.js

import ServiceFactory from '../src/factories/ServiceFactory.js';
import PurchaseService from '../src/services/PurchaseService.js';
import RandomNumberService from '../src/services/RandomNumberService.js';
import LottoService from '../src/services/LottoService.js';
import PrintService from '../src/services/PrintService.js';
import ReturnCalculator from '../src/services/ReturnCalculator.js';

describe('ServiceFactory 클래스 테스트', () => {
  test('createPurchaseService 메서드는 PurchaseService 인스턴스를 반환해야 한다', () => {
    const purchaseService = ServiceFactory.createPurchaseService();
    expect(purchaseService).toBeInstanceOf(PurchaseService);
  });

  test('createRandomNumberService 메서드는 RandomNumberService 인스턴스를 반환해야 한다', () => {
    const randomNumberService = ServiceFactory.createRandomNumberService();
    expect(randomNumberService).toBeInstanceOf(RandomNumberService);
  });

  test('createLottoService 메서드는 LottoService 인스턴스를 반환해야 한다', () => {
    const lottoService = ServiceFactory.createLottoService();
    expect(lottoService).toBeInstanceOf(LottoService);
  });

  test('createPrintService 메서드는 PrintService 인스턴스를 반환해야 한다', () => {
    const printService = ServiceFactory.createPrintService();
    expect(printService).toBeInstanceOf(PrintService);
  });

  test('createReturnCalculator 메서드는 ReturnCalculator 인스턴스를 반환해야 한다', () => {
    const returnCalculator = ServiceFactory.createReturnCalculator();
    expect(returnCalculator).toBeInstanceOf(ReturnCalculator);
  });
});
