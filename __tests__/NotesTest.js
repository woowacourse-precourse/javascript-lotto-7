import Notes from '../src/Notes.js';
import ERROR_MESSAGES from '../src/Error/Error.js';

describe('Notes 클래스 테스트', () => {
  test('유효한 금액이 주어졌을 때, 올바른 노트 수를 반환한다.', () => {
    const notes = new Notes(5000);
    expect(notes.getNotes()).toBe(5);
  });

  test('금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => new Notes('abc')).toThrow(
      ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
    );
    expect(() => new Notes(null)).toThrow(
      ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
    );
  });

  test('금액이 0 이하이면 예외가 발생한다.', () => {
    expect(() => new Notes(0)).toThrow(
      ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
    );
    expect(() => new Notes(-1000)).toThrow(
      ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
    );
  });

  test('1,000원 미만의 금액은 유효하지 않아 예외가 발생한다.', () => {
    expect(() => new Notes(500)).toThrow(
      ERROR_MESSAGES.note.INVALID_LOTTERY_NOTE_COUNT,
    );
  });
});
