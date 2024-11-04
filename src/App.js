import { getMoney } from "./View.js";

class App {
  async run() {
    const  lottoQuantity = await getMoney();
    console.log(lottoQuantity);
  }
}

export default App;
