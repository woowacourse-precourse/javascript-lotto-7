# javascript-lotto-precourse

## Analyze the problem

0. 요구 조건

- 들여쓰기는 2칸으로 통일할 것
- 삼항 연산자 금지
- 함수를 최대한 작게 할 것
- Jest로 직접 테스트 코드를 작성할 것
  - 이번 과제에서는 Promise 객체를 사용할 것이므로, Jest의 비동기 처리 테스트 기능을 학습할 것
- 스타일 가이드를 한 번 이상 다시 읽고 확인할 것

1. 입력 단계

- parseInput이라는 클래스를 만들고 기존에 전역 변수로 작성하던 인스턴스를 필드로 가져온다고 생각하며 구현한다.
- parseInput는 구매 금액, 당첨 번호 배열, 보너스 번호를 필드로 포함한 클래스 객체다.
- 아래 예외 처리를 parseInput 내 메서드로 만들며 유닛 테스트 및 Lotto에서의 호출을 위해 public으로 작성하여 분리한다.
  - 로또 구입 금액 파싱 전 구입 금액이 숫자이며, 자연수에 0 이하가 아닌지 확인하는 parseMoney()
    - 이것을 분리하면 추후 추가 추첨 기능을 구현하도록 과제가 변경되는 것을 가정해도 입력 파싱 과정을 변경하기 쉽다.
    - 주의: 로또 구입 금액과 추첨은 파싱 후 Console.print로 결과를 출력하는 별도 메서드를 2.의 PickUp 안에 구현하여 호출하는 방식으로 바로 출력해야 한다. 이것은 App에서 이루어져야 한다.
  - 당첨 번호를 입력하지 않거나, 파싱 후 공란이 있는지, 숫자가 아닌 것을 입력했는지 확인하는 parseJackpot()
    - 당첨 번호가 자연수 1 ~ 45 범위 내인지 각각 확인한다.
    - 당첨 번호의 중복 입력 여부를 확인한다.
  - 보너스 번호를 입력하지 않거나, 숫자가 아닌 것을 입력했는지, 숫자라면 자연수 1 ~ 45 구간인지 확인하는 parseBonus()

2. 처리 단계

- PickUp 객체를 만들고 필드로 구매한 번호들(Lotto 인스턴스)을 담을 2차원 배열과 당첨 번호 배열, 그리고 보너스 번호를 저장한다.
- PickUp의 모든 메서드는 Promise 객체로 감싼 결과를 반환하여, run에서 await 사용한 호출이 가능하게 한다.
- 파라미터로 구매 금액을 넘기는 pick 메서드에 추첨 과정을 넣는다.
  - Random.pickUniqueNumbersInRange()로 뽑아 배열을 반환하면 다시 Lotto 클래스에 담은 후 Lotto 인스턴스의 배열로 반환한다.
  - 추가 금액을 밀어넣을 때마다 pick 메서드로 추가 추첨이 가능하도록 과제 조건을 바꾸는 것을 가정해도 코드를 변경하는 작업이 쉽도록 의도하였다.
  - Error를 throw하는 로직이 이미 있으므로, 여기서 Throw가 발생하는 경우를 테스트 코드로 검증한다.
- 당첨 여부를 검증하는 과정(checkJackpot)을 분리하여 PickUp의 하위 메서드로 만든다.
  - checkJackpot은 각 구입 번호 배열마다 Lotto의 checkJackpot()을 호출한다.
    - 당첨 횟수는 6개 일치 -> 5개 + 보너스 일치 -> 5개 -> 4개 -> 3개 일치 순으로 +1하여 {미당첨, 3개 일치, 4개 일치, 5개 일치, 5개 일치 + 보너스, 6개 일치} 순의 객체로 반환한다.

3. 출력 단계

- parseInput.parse가 반환한 객체의 구매 금액과 당첨 횟수 배열을 필드로 저장하는 formatOutput 클래스를 만든다.
- formatOutput의 모든 메서드는 Promise 객체로 감싼 결과를 반환하여, run에서 await 사용한 호출이 가능하게 한다.
- formatOutput의 format 메서드는 파라미터 없이 구매 금액과 당첨 횟수 배열을 적절하게 활용하여 주어진 조건대로 출력하게 한다.
  - 수익률은 소수점 아래 한 자리까지만 출력하도록 한다.
  - 당첨 금액 문자열은 별도의 메세지 모듈 안 상수 객체 안에 정의하도록 분리한다.
  - 추후 formatOutput에 추가 추첨 기능이 구현되었을 때 구매 금액과 추가 당첨 횟수를 누적하는 메서드를 구현할 때 어려움이 없도록 상수 선언과 코드를 작성한다고 가정한다.

4. 아키텍처와 코딩 스타일

- Linter(ESLint + Prettier)를 제대로 설정하여 Linting한다.
- 정규표현식을 사용할 경우 저수준 메서드에서 메서드 당 1~2회만 사용한다.
- Lotto
  - Lotto에 checkJackpot(JackpotList) 메서드를 추가한다.
    - Array.prototype.filter()를 사용해 JackpotList와 얼마나 일치하는지 일치하는 번호 갯수를 검증한다.
    - 당첨 번호 배열을 뽑는 과정은 6개의 숫자를 담은 배열로 반환한다.
    - 당첨 검증은 6개 일치 -> 5개 일치 + 보너스 -> 5개 일치 -> 4개 일치 -> 3개 일치 순으로 Array.prototype.includes() 등을 사용해 검증한다.
    - 반환값은 1~5의 정수 중 하나며, 각각 3개 일치, 4개 일치, 5개 일치, 5개 + 보너스, 6개 일치를 가리킨다. 그 외의 경우 0을 반환한다.
      - 별도의 메세지 전용 모듈에 상수 객체의 키-값으로 연결하여 formatOutput에서 사용할 수 있게 한다.
  - #validate에는 중복된 추첨, 혹은 숫자가 아닌 것이 삽입된 경우에도 throw해야 한다.
- 모듈 구조
  - 에러 메세지를 별도의 상수 객체로 된 모듈로 분리한다
  - 과제에 제시된 조건이 'n회의 추가 입력으로 당첨 번호 변경 없이 추가 추첨하는 기능을 구현하시오'로 바뀌어도 대응이 쉽도록 모듈이 내보내는 클래스의 메서드를 설계한다.
  - App.run()에서 parseInput, Pickup, formatOutput 클래스의 인스턴스를 각각 만든 후 세 객체의 메서드를 필요한 순서대로 호출한다.
- 메서드를 최대한 잘게 쪼개어 메서드 내 코드가 길어지는 것을 억제한다.
  - 입력의 유효성 검증과 처리 루틴을 각각 private 처리된 하위 메서드로 분리한다.
  - 다중 반복문이 등장하면 그 구간을 별도의 메서드로 치환한다.
- 상수를 snake-case로 이름을 정했는지 확인한다.

5. 테스트

- jest 테스트 코드를 반드시 작성한다.
  - 예외 케이스를 검증한다.
  - 특정 조건에 따라 분기할 경우 성립되는 경우와 그렇지 않은 경우를 각각 한 번씩 검증한다.
  - 경계값 검사(Boundary value test)를 목표로 테스트 코드를 작성하여 코너 케이스/엣지 케이스를 확실하게 검증한다.
  - 최대한 작은 기능 단위로 유닛 테스트가 되도록 한다.

6. 공통 피드백 중 반영할 사항

- [x] 요구사항을 제대로 반영했는가?
- [x] 변수명은 일체의 축약 없이 제 역할을 잘 드러내는가?
- [x] 커밋 메세지에 신경을 쓰며 PR/Issue를 포함하지 않는가?
- [x] 클래스 작성 순서(필드 -> 생성자 -> 메서드)를 지켰는가?
- [ ] 메서드 분리를 통해 한 메서드는 하나의 처리 책임만 지는지 확인했는가?
  - App.run의 while 루프 문제 해결에 어려움을 겪어 해당 메서드는 예외 처리

7. 우테코 개인 목표 달성

- [x] 분석이 필요한 경우를 README.md에 전부 기록하였는가?
- [x] 활용이 필요한 API 등의 배경 지식을 README or 노션에 기록하였는가?
- [x] 1~2주차 PR 피드백을 노션에 기록하고 3주차 과제에 적절히 반영하였는가?
- [ ] 프리코스 디스코드 방을 주시하고, 기존 질문을 찾을 수 없는 질문이 있으면 즉시 질문하였는가?

## Knowledge & Reference

- 우테코의 javascript-mission-utils은 Random/Console을 다음 두 가지 방식으로 import할 수 있다.

```javascript
// 1번째(권장)
import { Console, Random } from "@woowacourse/mission-utils";
// 2번째
import { MissionUtils } from "@woowacourse/mission-utils";
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
```

- Promise로 비동기 처리
  (TODO)

## Target features

- 1단계: 기능 구현

* [x] 테스트 코드 작성
* [x] 입력 예외 검증
  - [x] 에러 메세지 모듈 분리
  - [x] parseMoney()
  - [x] parseJackpot()
  - [x] parseBonus()
* [x] 입력 파싱
  - [x] Lotto 내 #validate 등 기존 코드 수정
  - [x] Lotto.checkJackpot 구현
* [x] 처리 로직
  - [x] PickUp.pick
  - [x] PickUp.checkJackpot
* [x] 출력 포매팅
* [x] App 구현 및 테스트 수행

- 2단계: 리팩토링

* [x] 요구사항 만족 여부 검증
* [ ] 스타일 가이드 만족 여부 검증
  - [ ] PR 후 Linting
* [x] 1~2주차 PR 피드백 적용 여부 검증
  - 메서드 내 코드 길이 제외하고 만족하는 것으로 보임

- 3단계: 비동기 처리

* [ ] 테스트 코드 수정
* [ ] 처리 로직을 Promise 객체로 감싸기
* [ ] 출력 포매팅 과정을 Promise 객체로 감싸기

## 부딪힌 문제와 해결 과정, 남은 이슈

- 먼저 구매한 복권을 보여준 다음에 당첨 번호를 입력해야 하는데 구매 내역 출력 전에 당첨 번호를 입력해야 하는 것으로 명세를 잘못 이해함 (예제조차 잘못 봄)
  - PickUp 클래스는 복권 구매 결과를 보여준 다음에 초기화되므로 생성자를 변경하고, setter를 추가하며, 테스트 코드까지 다시 작성함
- 주어진 인스턴스가 배열인지 확인하려면 Array.isArray()를 사용한다.
- 금액과 수익률에 쉼표를 찍어 문자열로 바꾸는 것이 문제였는데, 두 가지 방법 중 하나를 사용할 수 있다. 나는 Intl.NumberFormat을 사용했다.
  - [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
  - 정규표현식으로 찍는 방법도 있다고 한다. [관련 예제가 포함된 블로그 포스트](https://velog.io/@sarang_daddy/JS-%EC%A0%95%EA%B7%9C%EC%8B%9DRegular-Expression)
- 소수점 정리는 Number.prototype.toFixed를 사용했다.[NDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- parseInt와 parseFloat는 '숫자가 앞에 오면서 문자가 섞인 경우' NaN을 반환하지 않는다
  - 숫자와 문자열이 섞인 경우 바로 isNaN에 대입한다.
- 명세의 입력 ERROR 상황은 Error 객체를 던진 뒤 e.message를 Console.print로 출력해야 한다.
  - while 루프 내의 try-catch로 감싸 해결
- async 선언된 함수 내에서 while이 들어간 로직을 분리하려 시도하면 로직이 꼬인다. await는 동기 블록킹으로 바꾸는 구문이 아니라 동기 논블록킹(then의 로직을 스코프 바깥으로 빼낼 수 있지만 await 줄의 최종 결과를 즉시 사용하지 않고 pending을 대신 반환하는 정도)으로 바꾸는 구문이기 때문에 await 사용된 줄 뒤의 코드 동작이 이상해진다. 그래서 App.run()이 상당히 길지만 리팩토링을 하지 않았다.
  - [관련하여 찾아본 블로그 포스트 하나](https://velog.io/@tmd0110/AsyncAwait-%EC%9D%80-Blocking%EC%9D%BC%EA%B9%8C-Non-Blocking%EC%9D%BC%EA%B9%8C)
  - [MDN의 await 설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await)
