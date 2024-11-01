# javascript-lotto-precourse

## 프로젝트 개요

구매 금액 입력 시 랜덤한 숫자를 발행해주는 로또 발매기를 구현합니다.
발매된 로또는 당첨 번호와 보너스 번호를 즉각 입력 받아 당첨 결과와 수익률까지 도출됩니다.

## ✨ 주요 기능

- 1000원 단위로 나누어 떨어지는 금액을 입력하여 로또를 구매할 수 있다.
- 구매한 금액만큼 로또가 발행된다.
  - 로또 숫자는 중복되지 않는 6개 숫자로 이루어진다.
  - 숫자는 1~45 범위 내의 숫자로만 구성된다.
- 당첨 번호 및 보너스 번호를 입력받아 발행했던 로또 중 당첨 로또를 판단한다.
- 당첨 기준은 아래와 같이 판단된다.
  - 3개 일치 (5,000원)
  - 4개 일치 (50,000원)
  - 5개 일치 (1,500,000원)
  - 5개 일치, 보너스 볼 일치 (30,000,000원)
  - 6개 일치 (2,000,000,000원)
- 발행했던 로또의 당첨 정보를 취합하여 통계를 출력한다.
- 구매 금액 대비 당첨 금액을 계산하여 수익률을 출력한다.
  - 수익률은 소수점 둘째자리에서 반올림된다.

**실행 에시**

```bash
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

<br/>

## 🧐 구현 항목

- [x] 로또 게임 설정값을 생성한다.
- [x] `구입금액을 입력해 주세요.` 를 출력한다.
- [x] 사용자의 구입 금액을 전달받아 로또 구매 개수를 판단한다.
- [x] 구입 금액이 1000원 단위로 나누어 떨어지는지 확인한다.
- [x] (+) 구매 금액이 10만원이 초과하는지 확인한다.
- [x] 구매 개수만큼 로또를 발행한다.
  - [x] 중복되지 않는 랜덤한 6개의 숫자를 뽑는다.
  - [x] 로또 번호를 오름차순으로 정렬한다.
  - [x] 발행한 로또를 배열에 저장한다.
- [x] `${사용자가 구매한 로또 개수}를 구매했습니다`와 함께 발행한 로또를 순차적으로 출력한다.
- [x] `당첨 번호를 입력해 주세요.`를 출력한다.
- [x] 사용자로부터 당첨 번호를 쉼표(,)로 구분하여 입력받는다.
  - [x] 당첨 번호가 1-45 범위 내의 6개의 숫자만 입력받는다.
  - [x] 6개의 숫자는 중복되지 않아야 한다.
- [x] `보너스 번호를 입력해 주세요.`를 출력한다.
- [x] 사용자로부터 보너스 번호 1-45 범위 내의 숫자 1개를 입력받는다.
- [ ] 보너스 번호를 포함한 당첨 번호를 기준으로 발행했던 로또 당첨 여부를 확인한다.
- [ ] 당첨 결과를 기반으로 등수별 복권 당첨 개수를 출력한다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- [ ] (구매금액 / 당첨 금액)\*100을 하여 수익률을 계산한다.
  - 수익률은 소수점 둘째 자리에서 반올림한다.
- [ ] 계산된 수익률을 ‘총 수익률은 ${수익률}입니다.’ 형식으로 출력한다.

<br/>

## 😖 예외 항목

- [x] 입력 받은 구매 금액이 숫자가 아니면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액이 빈값이면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액이 10만원을 초과하면 에러를 발생시킨다. (도박 방지)
- [x] 입력 받은 구매 금액이 1000원 단위로 나누어 떨어지지 않을 경우 에러를 발생시킨다.
- [x] 입력 받은 당첨번호가 빈값이면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호가 구분자 쉼표(,)를 제외하고 숫자로 이루어지지 않으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 중 1-45 범위에서 벗어나는 숫자가 있으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호의 개수가 6개보다 적으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호의 개수가 6개보다 많으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 중 중복되는 숫자가 있으면 에러를 발생시킨다.
- [x] 입력 받은 보너스번호가 빈값이면 에러를 발생시킨다.
- [x] 입력 받은 보너스번호가 1개의 숫자가 아니면 에러를 발생시킨다.
- [x] 입력 받은 보너스번호가 1-45 범위에서 벗어나면 에러를 발생시킨다.

<br/>

## ✅ 테스트 항목

### 기능 테스트

- [ ] 구매금액을 입력하면 구매금액을 기준으로 구매 개수가 결정된다.
- [ ] 구매 개수만큼 로또를 발행시킬 수 있다.
- [ ] 발행된 로또는 오름차순 정렬되어 있다.
- [ ] 발행된 로또는 6개 숫자로 이루어져 있다.
- [ ] 발행시킨 로또는 `${사용자가 구매한 로또 개수}를 구매했습니다`와 함께 출력된다.
- [ ] 번호 일치 개수에 따라 당첨 결과를 확인할 수 있다.
  - [ ] 6개 번호가 일치하는 경우
  - [ ] 5개 번호 + 보너스 번호가 일치하는 경우
  - [ ] 5개 번호가 일치하는 경우
  - [ ] 4개 번호가 일치하는 경우
  - [ ] 3개 번호가 일치하는 경우
- [ ] 수익률은 소수점 둘재 자리에서 반올림 된다.

### 예외 테스트

- [x] 입력 받은 구매 금액에 문자가 있으면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액에 특수문자가 있으면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액이 빈값이면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액이 Null이면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액이 undefined이면 에러를 발생시킨다.
- [x] 입력 받은 구매 금액이 10만원을 초과하면 에러를 발생시킨다. (도박 방지)
- [x] 입력 받은 구매 금액이 1000원 단위로 나누어 떨어지지 않을 경우 에러를 발생시킨다.
- [x] 입력 받은 당첨번호가 빈값이면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호가 Null이면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호가 undefined이면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 값에 빈 값이 포함되어 있다면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 값에 문자가 포함되어 있다면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 값에 특수 문자가 포함되어 있다면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 중 범위를 초과하는 숫자가 있으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 중 범위에 미달되는 숫자가 있으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호의 개수가 6개보다 적으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호의 개수가 6개보다 많으면 에러를 발생시킨다.
- [x] 입력 받은 당첨번호 중 중복되는 숫자가 있으면 에러를 발생시킨다.
- [ ] 입력 받은 보너스번호가 빈값이면 에러를 발생시킨다.
- [ ] 입력 받은 보너스번호가 1개의 숫자가 아니면 에러를 발생시킨다.
- [ ] 입력 받은 보너스번호가 1-45 범위에서 벗어나면 에러를 발생시킨다.

<br/>

## ‼️ 구현 제한 사항

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- 3항 연산자를 쓰지 않는다.
- 에러를 세분화하여 에러 메세지를 명확하게 전달한다.
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만든다.
- else를 지양한다.  
  때로는 if/else, when문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, [System.in](http://system.in/), Scanner) 로직은 제외한다.
- 에러 메시지는 `[ERROR]`로 시작한다.
- 에러를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.  
   Random 값 추출은 `Random.pickUniqueNumbersInRange()`를 활용한다.  
   사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.

<br/>

### ✏️ 구현 학습 목표

- 객체지향 관점에서 문제를 해결할 수 있다.
- 직관적인 네이밍을 할 수 있다.
- MVC 패턴을 이용하여 구현할 수 있다.
- DI를 사용하여 구현할 수 있다.
