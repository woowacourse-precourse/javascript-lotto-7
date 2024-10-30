import PurchaseController from './controllers/PurchaseController.js';

class App {
  async run() {
    const purchaseController = new PurchaseController();
    const amount = await purchaseController.getValidatedPurchaseAmount();
  }
}

export default App;
