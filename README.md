## 🏁 과제 진행 요구 사항

<details>
<summary>자세히 보기</summary>

- 미션은 과제를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 `README.md` 에 구현 할 기능 목록을 정리하여 추가한다.
- Git의 커밋 단위는 앞 단계에서 `README.md`에 정리한 기능 목록 단위로 추가한다.

</details>

## ⚙️ 기능 요구 사항

<details>
<summary>자세히 보기</summary>

> 간단한 로또 발매기를 구현한다.

- 로또 번호의 숫자 범위는 `1 ~ 45`이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 다음과 같다.

```tsx
1등: 6개 번호 일치 - 2,000,000,000원
2등: 5개 번호 일치 + 보너스 번호 일치 - 30,000,000원
3등: 5개 번호 일치 - 1,500,000원
4등: 4개 번호 일치 - 50,000원
5등: 3개 번호 일치 - 5,000원
```

- 로또 구입 금액을 입력하면 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 `1,000원`이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 `[ERROR]` 로 시작되는 메세지와 함께 `Error` 를 발생시키고, 해당 메세지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

### 📸 입출력 요구 사항

**[입력]**

- 로또 구입 금액을 입력받는다.(단위는 `1,000원` 단위로 입력 받고, `1,000원으로 나누어 떨어지지 않으면 예외 처리한다`)
- 당첨 번호를 입력받는다. 번호는 `쉼표(,)`를 기준으로 구분한다.
- 보너스 번호를 입력받는다.

**[출력]**

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
- 당첨 내역을 출력한다.
- 수익률은 소수점 둘째 자리에서 반올림한다.
- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 `[ERROR]` 로 시작해야 한다.

실행 결과 예시

```tsx
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

</details>

## 💻 프로그래밍 요구 사항 1

<details>
<summary>자세히 보기</summary>

- Node.js 20.17.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 `App.js` 의 `run()` 이다.
- `package.json` 은 변경할 수 없으며, 제공된 라이브러리만 사용해야 한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 코드를 작성한다.

</details>

## 💻 프로그래밍 요구 사항 2

<details>
<summary>자세히 보기</summary>

- depth는 2까지만 허용한다.
  - while문안에 if문이 있다면 depth는 2이다.
  - 조건과 분기를 위한 인덴트가 2depth가 넘지 않는 것을 의미한다.
  - 단순히 가독성을 위해 depth가 깊어지는 경우는 작성 가능하다.
- 삼항 연산자는 사용하지 않는다.
- 함수가 한 가지 일만 하도록 최대한 작게 만들기
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트한다.

</details>

## 💻 프로그래밍 요구 사항 3

<details>
<summary>자세히 보기</summary>

- 함수 또는 메서드의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수 또는 메서드가 한 가지 일만 하도록 구현한다.
- else를 지양한다.
- 구현한 기능에 대한 유닛 테스트를 작성한다. 단 UI로직은 제외한다.

</details>

## `Lotto` 클래스

<details>
<summary>자세히 보기</summary>

- 제공된 `Lotto` 클래스를 사용하여 구현해야 한다.
- `Lotto` 에 `numbers` 이외의 필드를 추가할 수 없다.
- `Numbers` 의 접근 제어자인 `#` 은 변경할 수 없다.
- `Lotto` 의 패키지를 변경할 수 있다.

</details>

## 🤔 생각해보기

<details>
<summary>자세히 보기</summary>

### 가설 1. 당첨 번호에 소수를 입력한 경우

→ 로또 번호의 숫자 범위는 `1 ~ 45` 이지만 정수만 처리, 소수는 예외 처리

### 가설 2. 당첨 번호와 보너스 번호가 겹치는 경우

→ 겹치면 예외 처리

### 가설 3. 당첨 번호 6개를 입력하지 않은 경우

→ 당첨 번호의 개수는 무조건 6개, 이외의 입력은 예외 처리

</details>

## 📝 코드 설계

<details>
<summary>자세히 보기</summary>

1. 구입 금액 입력 받기(`Number` 타입으로 변환)
   1. 아무것도 입력하지 않은 경우 예외 처리
   2. 1,000원으로 나누어 떨어지지 않는 경우 예외 처리
2. 구매한 로또 개수 출력하기
3. 구매한 로또 개수만큼 발급하고 출력하기
4. 당첨 번호 입력 받기(`,` 기준으로 `split` 하고 `Number` 타입으로 변환)
   1. 길이가 6이 아닌 경우 예외 처리
   2. 중복이 있는 경우 예외 처리
   3. 입력 번호가 정수가 아닌 경우 예외 처리
   4. 입력 번호가 로또 범위가 아닌 경우 예외 처리
5. 보너스 번호 입력 받기(`Number` 타입으로 변환)
   1. 보너스 번호가 정수가 아닌 경우 예외 처리
   2. 보너스 번호가 당첨 번호에 포함되는 경우 예외 처리
   3. 보너스 번호가 로또 범위가 아닌 경우 예외 처리
6. 당첨 통계 출력하기
7. 수익률 출력하기

</details>

## 📇 클래스 설계

<details open>
<summary>자세히 보기</summary>

기존에 생성되어 있는 `Lotto` 클래스에 필드와 기능 메서드를 추가하려고 했는데 요구 사항에 `Lotto` 에 필드를 추가할 수 없다고 되어 있고, 테스트 코드에 아래와 같은 조건이 있어서 `Lotto` 클래스는 유효성 검사용으로 써야할 것 같다.

```tsx
// TODO: 테스트가 통과하도록 프로덕션 코드 구현
test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
  expect(() => {
    new Lotto([1, 2, 3, 4, 5, 5]);
  }).toThrow("[ERROR]");
});
```

---

### `Price` 클래스

- 로또 구매 금액 유효성 검사

### `Lotto` 클래스

- 로또 당첨 번호 유효성 검사

### `BonusNumber` 클래스

- 보너스 번호 유효성 검사

### `LottoStore` 클래스(로또 구입처)

- 로또 가격을 받고, 몇 개의 로또를 살 수 있는지 확인
- 개수에 맞는 로또 발급

### `LottoCalculate` 클래스(로또 계산)

- 구매한 로또들과 당첨 번호 + 보너스 번호로 결과 계산
- 위에서 구한 결과와 구매 금액으로 수익률 결과 계산

### `IOHandler` 클래스(입출력)

- 로또 구매 금액 입력 받기
- 구매한 로또 개수 출력
- 구매한 로또들 출력
- 로또 당첨 번호 입력 받기
- 로또 보너스 번호 입력 받기
- 당첨 통계 출력
- 수익률 출력

</details>

## 🎯 구현 할 기능 목록

<details open>
<summary>자세히 보기</summary>

- [x] 구입 금액 입력 받기

  - [x] 아무것도 입력하지 않은 경우(0원 포함) 예외 처리

  - [x] 1,000원으로 나누어 떨어지지 않는 경우 예외 처리

  - [x] 구입 금액이 100,000원(10만원)을 넘는 경우 예외 처리

- [x] 구매한 로또 개수 출력하기
- [x] 구매한 로또 개수만큼 로또 발급받고 출력하기
- [x] 당첨 번호 입력 받기

  - [x] 길이가 6이 아닌 경우 예외 처리

  - [x] 중복이 있는 경우 예외 처리
  - [x] 당첨 번호가 정수가 아닌 경우 예외 처리
  - [x] 당첨 번호가 로또 범위가 아닌 경우 예외 처리

- [x] 보너스 번호 입력 받기

  - [x] 보너스 번호가 정수가 아닌 경우 예외 처리

  - [x] 보너스 번호가 당첨 번호에 포함되는 경우 예외 처리
  - [x] 보너스 번호가 로또 범위가 아닌 경우 예외 처리

- [x] 당첨 통계 출력하기
- [x] 수익률 출력하기

</details>

## 👀 미션 라이브러리 까보기

<details open>
<summary>자세히 보기</summary>

- `pickUniqueNumbersInRange` 관련 전체 코드

```tsx
// 시작 범위와 끝 범위 사이의 중복되지 않는 정수 n개 반환
static pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
  Random.#validateIntsRange(startInclusive, endInclusive, count);

  const result = [];

  for (let i = startInclusive; i <= endInclusive; i++) {
    result.push(i);
  }

  return Random.shuffle(result).slice(0, count);
}

static #validateIntsRange(startInclusive, endInclusive, count) {
  if (
    !Random.#isNumber(startInclusive) ||
    !Random.#isNumber(endInclusive) ||
    !Random.#isNumber(count)
  ) {
    throw new Error("arguments must be numbers.");
  }

  if (count < 0) {
    throw new Error("count cannot be less than zero.");
  }

  if (endInclusive - startInclusive + 1 < count) {
    throw new Error(
      `count: ${count} cannot be greater than the input range (endInclusive - startInclusive): ${
        endInclusive - startInclusive
      }.`
    );
  }
}

static shuffle(array) {
  Random.#validateEmptyArray(array);

  return array.sort(() => Math.random() - 0.5);
}
```

### `validateIntsRange` - 범위, 개수 유효성 검사

```tsx
static #validateIntsRange(startInclusive, endInclusive, count) {
  // 인자(시작 범위, 끝 범위, 개수)의 값들이 숫자가 아니라면 예외 처리
  if (
    !Random.#isNumber(startInclusive) ||
    !Random.#isNumber(endInclusive) ||
    !Random.#isNumber(count)
  ) {
    throw new Error("arguments must be numbers.");
  }

  // 개수가 0보다 적다면 예외 처리
  if (count < 0) {
    throw new Error("count cannot be less than zero.");
  }

  // 끝 범위 - 시작 범위 + 1 이 개수보다 작다면 예외 처리
  // 개수는 입력 범위(끝 - 시작)보다 클 수 없다.
  if (endInclusive - startInclusive + 1 < count) {
    throw new Error(
      `count: ${count} cannot be greater than the input range (endInclusive - startInclusive): ${
        endInclusive - startInclusive
      }.`
    );
  }
}
```

`개수는 입력 범위(끝 - 시작)보다 클 수 없다.` 이 부분이 핵심 로직인 것 같다.

- `pickUniqueNumbersInRange` 메서드는 시작 범위와 끝 범위 사이의 중복되지 않는 정수 n개를 반환하는 데 입력 범위가 개수보다 작다면 중복이 발생하기 때문에 예외 처리를 하는 것 같다.

### `shuffle` - 배열의 순서를 섞는다.

```tsx
static shuffle(array) {
Random.#validateEmptyArray(array);

return array.sort(() => Math.random() - 0.5);
}
```

- 인자로 들어온 배열이 비어있다면 예외 처리를 한다.
- 인자로 들어온 배열을 랜덤으로 섞는다.

### `pickUniqueNumbersInRange` - 시작 ~ 끝 범위 사이의 중복되지 않는 정수 n개 반환

```tsx
static pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
Random.#validateIntsRange(startInclusive, endInclusive, count);

const result = [];
for (let i = startInclusive; i <= endInclusive; i++) {
  result.push(i);
}

return Random.shuffle(result).slice(0, count);
}
```

- 시작 범위 ~ 끝 범위까지 배열에 추가
- `shuffle`을 통해 순서가 섞인 배열을 앞에서 count만큼 자르고 반환

</details>

## 🐱 Git 커밋 컨벤션

<details>
<summary>자세히 보기</summary>

| Type     | Description                                               |
| -------- | --------------------------------------------------------- |
| init     | 초기 설정                                                 |
| feat     | 새로운 기능 추가                                          |
| fix      | 버그 수정                                                 |
| refactor | 코드 리팩토링                                             |
| comment  | 필요한 주석 추가 및 변경                                  |
| chore    | 패키지 매니저 수정, 그 외 기타 수정 <br/> ex) .gitnore 등 |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우        |
| remove   | 파일을 삭제하는 작업만 수행한 경우                        |
| docs     | 문서 수정                                                 |
| test     | 테스트 코드 작성 및 수정                                  |

</details>

## 📂 폴더 구조

<details>
<summary>자세히 보기</summary>

```tsx
📦src
 ┣ 📂constants // 상수 폴더
 ┃ ┗ 📜index.js
 ┣ 📂lotto // 로또 클래스 폴더
 ┃ ┣ 📜BonusNumber.js // 보너스 번호(유효성 검사)
 ┃ ┣ 📜Lotto.js // 로또 당첨 번호(유효성 검사)
 ┃ ┣ 📜LottoCalculate.js // 로또 결과 계산(유틸)
 ┃ ┣ 📜LottoStore.js // 로또 구매 및 발급(유틸)
 ┃ ┣ 📜Price.js // 구입 금액(유효성 검사)
 ┃ ┗ 📜index.js // 로또 배럴 파일
 ┣ 📂utils // 유틸 폴더
 ┃ ┗ 📜validation.js // 유효성 검사
 ┣ 📜App.js // 애플리케이션 구현
 ┣ 📜CustomError.js // 커스텀 에러 클래스
 ┣ 📜FrozenMap.js // FrozenMap 클래스(Map 객체 확장)
 ┣ 📜IOHandler.js // 입출력 클래스
 ┗ 📜index.js // 실행 파일
```

</details>

## 🚨 트러블 슈팅

<details>
<summary>자세히 보기</summary>

### 정적 메서드 vs 인스턴스 메서드

```tsx
class LottoStore {
  getLottoPurchaseCount = (price) => {
    return price / LOTTO_RULES.PRICE;
  };

  static generateLottoNumbers = (count) => {
    const { MIN_RANGE, MAX_RANGE, NUMBERS_SIZE } = LOTTO_RULES;
    return Array.from({ length: count }, () => this.generateSingleLotto(MIN_RANGE, MAX_RANGE, NUMBERS_SIZE, "asc"));
  };

  static getLottoNumbers = (price) => {
    const purchaseCount = this.getLottoPurchaseCount(price);
    return this.generateLottoNumbers(purchaseCount);
  };
}
```

해당 코드를 실행하면 `TypeError: this.getLottoPurchaseCount is not a function`에러가 발생한다.

- `getLottoPurchaseCount` 는 인스턴스 메서드로 `LottoStore` 의 인스턴스를 생성한 후에만 사용할 수 있다.
- `getLottoNumbers` 는 정적(static) 메서드로 클래스 자체에 속하며, 인스턴스 생성 없이 직접 클래스에서 호출 할 수 있다.

정적 메서드 내에서 `this` 는 클래스 자체를 가리킨다. 그러나 클래스 자체에는 `getLottoPurchaseCount` 메서드가 존재하지 않는다.(이 메서드는 인스턴스에서만 존재한다)

→ `getLottoPurchaseCount` 를 정적 메서드로 선언하면 인스턴스 생성 없이 클래스에서 호출할 수 있기 때문에 문제를 해결 할 수 있다.

</details>

## 😮 배운 것들

<details>
<summary>자세히 보기</summary>

### constructor

> **클래스의 인스턴스를 생성하고 초기화하는 특별한 메서드이다.**

- 클래스로 객체를 생성할 때 자동으로 호출된다.
- 인스턴스의 초기 상태를 설정하는 데 사용된다.
- 클래스당 하나의 `constructor` 만 가질 수 있다.

사용 상황

- 객체 생성 시 필요한 초기 데이터를 설정할 때
- 인스턴스 변수를 초기화할 때

### #(Private 필드)

> **클래스 내부에서만 접근 가능한 Private 필드를 선언하는 데 사용된다.**

- 클래스 외부에서 직접 접근할 수 없다.
- 캡슐화를 강화하고 내부 구현을 숨길 수 있다.

사용 상황

- 클래스의 내부 상태를 보호하고 싶을 때
- 외부에서 직접 접근하면 안 되는 데이터를 숨기고 싶을 때

### static

> 클래스의 정적 메서드나 속성을 정의하는 데 사용된다.

- 클래스의 인스턴스가 아닌 클래스 자체에 속한다.
- 인스턴스를 생성하지 않고도 호출할 수 있다.

사용 상황

- 유틸리티 함수를 만들 때
- 인스턴스와 관계 없이 클래스 레벨에서 동작해야 하는 메서드를 정의할 때
- 여러 인스턴스 간에 공유되어야 하는 데이터나 동작을 정의할 때

</details>
