import { SYMBOLS } from './symbols.js';

export const SEPARATE_NUMBER = new RegExp(`^[0-9${SYMBOLS.comma}]*$`);
export const INVALID_VALUE = new RegExp(/[^0-9]/g);
