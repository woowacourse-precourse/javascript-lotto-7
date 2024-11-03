import { printMessage } from "./console.js";

async function retryOnError(func) {
  while (true) {
    try {
      return await func();
    } catch (error) {
      printMessage(error.message); 
    }
  }
}

export default retryOnError;
