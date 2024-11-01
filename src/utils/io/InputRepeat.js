import Input from './Input.js';

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

async function handleRecursion(result, fn) {
  if (result.success) {
    return result.input;
  }
  const newResult = await inputRecursion(`${result.message}\n`, fn);
  return handleRecursion(newResult, fn);
}

export default async function InputRepeat(message, fn) {
  const inputs = await inputRecursion(message, fn);

  return handleRecursion(inputs, fn);
}
