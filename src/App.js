import { MainController } from "./controllers/MainContoller.js";

class App {
  async run() {
    const controllers = new MainController();
    await controllers.run()
  }
}

export default App;
