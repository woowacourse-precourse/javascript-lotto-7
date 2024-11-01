import ERROR_MESSAGES from './Error/Error.js';
import { isNumber } from './Util/Regex.js';

class Notes {
  #notes;

  constructor(paidAmount) {
    const parsedNotes = Number.parseInt(paidAmount / 1000, 10);
    this.#validateNotesNumber(parsedNotes);
    this.#validatePositiveNotes(parsedNotes);
    this.#notes = parsedNotes;
  }

  #validateNotesNumber(notes) {
    if (!isNumber.test(notes)) {
      throw new Error(ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT);
    }
  }

  #validatePositiveNotes(notes) {
    if (notes <= 0) {
      throw new Error(ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT);
    }
  }

  getNotes() {
    return this.#notes;
  }
}

export default Notes;
