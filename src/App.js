import Controller from "./Controller/Controller.js";

class App {
  async run() {
    const controller = new Controller();
    await controller.run();
  }
}

export default App;
