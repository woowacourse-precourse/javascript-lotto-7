import AppController from "./Controller/AppController.js";
class App {
  async run() {
    const appController = new AppController();
    await appController.control();
  }
}

export default App;
