import Lotto from "./Lotto.js"
import InputHandler from "./InputHandler.js";

class App {
    async run() {
        const inputHandler = new InputHandler();
            
        const userMoney =  await inputHandler.askUserMoney();
    }
}

export default App;