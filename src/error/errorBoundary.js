import { print } from '../util/console.js';

export default async function errorBoundary(func) {
  while (true) {
    try {
      return await func();
    } catch (e) {
      print(e.message);
    }
  }
}
