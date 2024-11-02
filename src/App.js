import InputHandler from "./InputHandler.js";

class App {
    async run() {
        const inputHandler = new InputHandler();

        await inputHandler.getLottoTryCount();
        await inputHandler.getJackpotNumbers();
    }
}

export default App;
