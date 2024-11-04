// factories/ServiceFactory.js
import PurchaseService from '../services/PurchaseService.js'
import RandomNumberService from '../services/RandomNumberService.js';
import LottoService from '../services/LottoService.js';
import PrintService from '../services/PrintService.js';
import ReturnCalculator from '../services/ReturnCalculator.js';

class ServiceFactory {
  static createPurchaseService() {
    return new PurchaseService();
  }

  static createRandomNumberService() {
    return new RandomNumberService();
  }

  static createLottoService() {
    return new LottoService();
  }

  static createPrintService() {
    return new PrintService();
  }

  static createReturnCalculator() {
    return new ReturnCalculator();
  }
}

export default ServiceFactory;
