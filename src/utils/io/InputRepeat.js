import Input from './Input.js';
import Output from './Output.js';

async function inputRecursion(message, fn) {
  const inputs = await Input.get(message);
  try {
    fn(inputs);
    return {
      success: true,
      input: inputs,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

async function handleRecursion(result, fn, message) {
  if (result.success) {
    Output.print('');
    return result.input;
  }

  Output.print(`${result.message}\n`);
  const newResult = await inputRecursion(`${message}`, fn);
  return handleRecursion(newResult, fn, message);
}

export default async function InputRepeat(message, fn) {
  const inputs = await inputRecursion(message, fn);

  return handleRecursion(inputs, fn, message);
}
