# javascript-lotto-precourse

## 미션간단설명

로또 발매기를 구현하는 미션입니다. 금액을 입력해 로또를 구매하고, 구매한 로또 번호와 당첨번호를 비교하여 수익률을 계산하는 프로그램입니다.

## 요구사항 및 제약조건 정리

### 입력 제약조건

- `@woowacourse/mission-utils` 에서 제공하는 `Console.readLineAsync()` 활용하기
- 잘못된 값 입력 시 "\[ERROR]" 로 시작하는 메시지와 함께 `Error` 를 발생시킨 후 종료
- 잘못된 입력
  - \[금액입력] 금액이 1000 으로 나누어떨어지지 않는 경우
  - \[당첨번호] 1~45 범위를 벗어나는 경우
  - \[당첨번호] 숫자 또는 `,` 를 제외한 문자가 들어가는 경우
  - \[당첨번호] 입력된 숫자가 6개가 아닌경우
  - \[보너스번호] 당첨번호와 중복하는 경우

### 출력 제약조건

- `@woowacourse/mission-utils` 에서 제공하는 `Console.print()` 활용하기
- 로또 번호는 오름차순으로 정렬하여 출력
- 수익률은 소수점 둘째 자리에서 반올림하기 (ex. 100.0%, 51.5%, 1,000,000.0%)

#### 실행결과예시

```
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

### 프로그래밍 제약조건

제공된 `Lotto` 클래스를 사용하여 구현하기

```javascript
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}
```

- 필드 추가 금지
- `numbers` 접근제어자 `#` 변경금지

### 기능요구사항

- 구입금액 입력받기
- 발행한 로또 수량 및 번호 출력
  - `@woowacourse/mission-utils` 에서 제공되는 `Random.pickUniqueNumbersInRange()` 사용하기
  - 로또 번호가 중복되면 안됨
- 당첨번호 입력받기, 보너스 번호 입력받기
- 당첨 통계 계산

## 구현할 기능목록

- 로또 발매기 클래스
  - 구입금액 입력 메서드
    - 제약조건)
      - 잘못된 입력 시 `[ERROR]` 메시지 출력
      - 1000 으로 나누어 떨어져야 함
  - 로또 생성 메서드
    - 제약조건)
      - `@woowacourse/mission-utils` 의`Random.pickUniqueNumbersInRange()` 사용
  - 발매된 로또 출력 메서드
    - 제약조건)
      - 로또 번호는 오름차순으로 정렬
  - 당첨번호 입력 메서드
    - 제약조건)
      - 잘못된 입력 시 `[ERROR]` 메시지 출력
      - 숫자 또는 `,` 를 제외한 문자가 들어가는 경우
      - 숫자가 중복되면 안됨
      - 각 숫자의 범위는 1~45
  - 보너스번호 입력 메서드
    - 제약조건)
      - 잘못된 입력 시 `[ERROR]` 메시지 출력
      - 당첨번호와 중복되면 안됨
      - 숫자의 범위는 1~45
  - 수익률 계산 메서드
    - 제약조건)
      - 소수점 둘째 자리에서 반올림
  - 당첨통계 출력 메서드
- 로또 클래스
  - 입력검증 메서드
    - 숫자 개수 6개
  - 일치개수 반환 메서드

## 체크리스트

- 로또 발매기 클래스
  - [x] 구입금액 입력 메서드
    - 제약조건)
      - 잘못된 입력 시 `[ERROR]` 메시지 출력
      - 1000 으로 나누어 떨어져야 함
  - [x] 로또 생성 메서드
    - 제약조건)
      - `@woowacourse/mission-utils` 의`Random.pickUniqueNumbersInRange()` 사용
  - [x] 발매된 로또 출력 메서드
    - 제약조건)
      - 로또 번호는 오름차순으로 정렬
  - [x] 당첨번호 입력 메서드
    - 제약조건)
      - 잘못된 입력 시 `[ERROR]` 메시지 출력
      - 숫자 또는 `,` 를 제외한 문자가 들어가는 경우
      - 숫자가 중복되면 안됨
      - 각 숫자의 범위는 1~45
  - [x] 보너스번호 입력 메서드
    - 제약조건)
      - 잘못된 입력 시 `[ERROR]` 메시지 출력
      - 당첨번호와 중복되면 안됨
      - 숫자의 범위는 1~45
  - [x] 현재 가진 로또들의 순위 계산 메서드
  - [x] 수익률 계산 메서드
    - 제약조건)
      - 소수점 둘째 자리에서 반올림
      - 구매한 로또는 최소 1 개 이상
  - [ ] 당첨통계 출력 메서드
- 로또 클래스
  - 입력검증
    - [x] 숫자 개수 6개
  - [x] 일치개수 반환 메서드
  - [x] 순위 계산 메서드
