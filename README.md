# 🎱 로또 발매기

우아한테크코스 프리코스 3주차 과제입니다.<br/>

간단한 로또 발매기를 구현하는 미션으로 로또를 구매하고 구매한 로또의 당첨 여부와 수익률을 출력합니다.<br/>

JavaScript로 구현하고 Jest를 통해 테스트 하였으며, MVC패턴을 적용하여 설계했습니다.

<br/><br/>

## 🗒️ 기능 목록

✔️ 시작

- 구입 금액을 입력하라고 알려주는 문구 출력
- 구입 금액에 따른 발행한 로또 수량 및 번호 출력 (로또 번호는 오름차순으로 정렬)
- 당첨 번호를 입력하라고 알려주는 문구 출력
- 보너스 번호를 입력하라고 알려주는 문구 출력
<br/>

✔️ 입력

- 구입 금액 입력
- 당첨 번호 입력 (번호는 쉼표(,)를 기준으로 구분)
- 보너스 번호 입력
- 예외 처리 후 해당 부분부터 다시 실행
    - 구입 금액이 숫자로 이루어지지 않은 값일 경우
    - 구입 금액이 1,000단위로 나누어 떨어지지 않는 값일 경우
    - 당첨 번호와 보너스 번호에 중복된 값이 있는 경우
    - 당첨 번호를 ‘,’ 를 기준으로 분리 했을때 숫자가 아닌 값이 있는 경우
    - 당첨 번호를 ‘,’를 기준으로 분리했을때 1에서 45 사이의 값이 아닌 경우
    - 보너스 번호가 1에서 45 사이의 값이 아닌 경우
    <br/>

✔️ 로또 추첨

- 구매한 로또를 당첨 번호와 보너스 번호를 통해 비교한다.
- 아래와 같은 기준을 통해 각 로또가 몇등인지 계산한다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
- 로또 당첨 내역 및 구매 금액과 수령금에 따른 수익률을 계산한다.
<br/>

✔️ 추첨 결과

- “당첨 통계” 라는 문구를 출력한다.
- 5등부터 1등 순으로 당첨 기준과 금액, 몇 개의 로또가 당첨됐는지 출력한다.
- 구매 금액과 수령금에 따른 총 수익률을 출력한다. (소수점 둘째 자리에서 반올림한다.)<br/><br/>


## 📦 다이어그램
![LottoDiagram](https://github.com/user-attachments/assets/21686a9d-d0ab-41b2-a741-dcfcfdcac20f)
<br/><br/>

## **📁** 폴더구조

```
📦src
 ┣ 📂constants
 ┃ ┣ 📜errorConstants.js
 ┃ ┣ 📜inputConstants.js
 ┃ ┣ 📜lottoConstants.js
 ┃ ┗ 📜outputConstants.js
 ┣ 📂controllers
 ┃ ┣ 📜InputController.js
 ┃ ┗ 📜LottoController.js
 ┣ 📂models
 ┃ ┣ 📜LottoRepository.js
 ┃ ┗ 📜LottoResult.js
 ┣ 📂services
 ┃ ┣ 📜CalculatingMachine.js
 ┃ ┣ 📜LottoDrawingMachine.js
 ┃ ┗ 📜LottoNumberGenerator.js
 ┣ 📂utils
 ┃ ┗ 📜validation.js
 ┣ 📂views
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜App.js
 ┣ 📜Lotto.js
 ┗ 📜index.js
```
<br/><br/>



## ✅ 체크리스트

1. 단일 책임 원칙에 기반하여 각 함수는 하나의 기능만 수행하도록 구현한다.<br/>
2. 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.<br/>
3. else를 지양한다.<br/>
4. 함수의 indent(인덴트, 들여쓰기) depth는 2까지만 허용한다.<br/>
5. 3항 연산자를 쓰지 않는다.<br/>
6. 값을 하드코딩 하지 않는다. (const를 정의하고 의미 있는 이름을 부여한다.)<br/>
7. Jest를 활용하여 프로젝트 상세 설계를 통해 나눈 기능들에 대해 단위테스트를 진행한다.<br/>
8. 커밋 메세지를 의미있게 작성한다.<br/>
9. 의미 없는 주석을 달지 않는다. (이름을 통해 의미를 나타낸다)<br/>
10. 코드 포맷팅을 사용한다.<br/>
11. JavaScript에서 제공하는 API를 적극 활용한다.<br/>
12. Airbnb의 자바스크립트 스타일 가이드인 작음따옴표를 사용한다.<br/><br/>

## **📥 실행 방법**

1. 레포지토리 클론

```
git clone <https://github.com/subsub-e/javascript-calculator-7.git>

```

2. 의존성 모듈 설치

```
npm install

```

3. 프로젝트 실행

```
npm run start

```

4. 프로젝트 테스트

```
npm run test

```

<br/><br/>

## 🧑‍💻 필요 개발 환경

✔️ npm ≥ 10.8.2

✔️ node ≥ 20.17.0
<br/><br/>

## 📖 **라이브러리**

- `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console` API를 사용하여 구현해야 한다.
    - Random 값 추출은 `Random.pickUniqueNumbersInRange()`를 활용한다.
    - 사용자의 값을 입력 및 출력하려면 `Console.readLineAsync()`와 `Console.print()`를 활용한다.
