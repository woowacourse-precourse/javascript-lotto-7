# Jest

## 재귀 함수 테스트

Recursive function을 테스트 할때는 종료 시점을 지정해 줘야한다.
함수 자체에 종료하는 조건을 이용하던가
함수를 mock해서 그 안에서 종료하는 조건을 설정하던가
이렇게 하지 않으면 함수가 무한 반복되서 테스트를 통과하지 못한다.

## arrayContaining

expect.arrayContaining(array)은 예상 배열의 모든 요소를 포함하는 수신된 배열과 일치시킵니다. 즉, 예상 배열은 수신된 배열의 하위 집합입니다. 따라서 예상 배열에 없는 요소가 포함된 수신 배열을 일치시킵니다.

expect.arrayContaining(array) matches a received array which contains all of the elements in the expected array. That is, the expected array is a subset of the received array. Therefore, it matches a received array which contains elements that are not in the expected array.

You can use it instead of a literal value:

in toEqual or toHaveBeenCalledWith
to match a property in objectContaining or toMatchObject