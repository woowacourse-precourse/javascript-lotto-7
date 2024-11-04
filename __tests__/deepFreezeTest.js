import deepFreeze from '../src/utils/deepFreeze.js';

describe('deepFreeze 함수 테스트', () => {
  test('객체를 동결시킨다.', () => {
    const student = { 1: 'jaeyoon' };
    const frozenStudent = deepFreeze(student);

    expect(Object.isFrozen(frozenStudent)).toBe(true);
  });

  test('배열을 동결시킨다.', () => {
    const numbers = [1, 2, 3, 4, 5];
    const frozenNumbers = deepFreeze(numbers);

    expect(Object.isFrozen(frozenNumbers)).toBe(true);
  });

  test('속성의 값이 객체인 경우에도 객체를 동결시킨다.', () => {
    const student = { info: { jaeyoon: 26 } };
    const frozenStudent = deepFreeze(student);

    expect(Object.isFrozen(frozenStudent.info)).toBe(true);
  });

  test('속성의 값이 객체인 경우 해당 객체를 수정하면 예외가 발생한다.', () => {
    const student = { info: { jaeyoon: 26 } };
    const frozenStudent = deepFreeze(student);

    expect(() => {
      frozenStudent.info = { jaeyoon: 25 };
    }).toThrow();
    expect(() => {
      frozenStudent.info.jaeyoon = 25;
    }).toThrow();
  });
});
