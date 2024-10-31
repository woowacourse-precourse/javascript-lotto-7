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

export default async function InputRepeat(message, fn) {
  const inputs = await inputRecursion(message, fn);

  if (inputs.success) {
    return inputs.input;
  }

  InputRepeat(`${inputs.message}\n`, fn);
}
