# javascript-lotto-precourse

## 프로젝트 개요

간단한 로또 발매기 구현을 통해 **관련 함수들을 클래스로 구성하고, 객체들이 협력하여 주요 기능을 수행하는 구조**를 학습합니다. 또한, **클래스와 함수 단위 테스트를 통해 기능이 의도대로 정확히 작동하는지 검증**하는 경험을 목표로 합니다.

## 주요 기능

- **로또 구입 금액 입력**: 사용자가 구입하고자 하는 금액을 1,000원 단위로 입력 받으며, 1,000원으로 나누어 떨어지지 않는 경우 예외 처리합니다.
- **로또 발행**: 입력한 금액에 해당하는 만큼 로또를 발행합니다.
- **발행한 로또 수량 및 번호를 출력**: 발행한 로또 수량 및 번호를 출력합니다. 로또 번호는 오름차순으로 정렬하여 보여줍니다.
  ```plaintext
  8개를 구매했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [1, 3, 5, 14, 22, 45]
  ```
- **당첨 번호 입력**: 당첨 번호 6자리를 입력받습니다. 번호는 `쉼표(,)`를 기준으로 구분합니다.
- **보너스 번호 입력**: 보너스 번호를 입력받습니다.
- **당첨 내역 출력**: 당첨 내역을 출력합니다.

  ```plaintext
  3개 일치 (5,000원) - 1개
  4개 일치 (50,000원) - 0개
  5개 일치 (1,500,000원) - 0개
  5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  6개 일치 (2,000,000,000원) - 0개
  ```

- **수익률 출력**: 수익률을 출력합니다. 수익률은 소수점 둘째 자리에서 반올림합니다(Ex. 100.0%, 51.5%, 1,000,000.0%).

  ```plaintext
  // 구입 금액: 14,000원 당첨 금액: 5,000원
  // 수익률 계산 공식: (당첨 금액 / 구입 금액) * 100

  총 수익률은 62.5%입니다.
  ```

## 설치 및 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/hyer0705/javascript-lotto-7.git
```

2. 패키지 설치

```bash
npm install
```

3. 프로젝트 실행

```bash
npm run start
```

## 실행결과 예시

```plaintext
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

## 프로젝트 구조

```plaintext
📦__tests__
 ┣ 📜ApplicationTest.js
 ┣ 📜LottoGameTest.js
 ┣ 📜LottoMachineTest.js
 ┣ 📜LottoTest.js
 ┣ 📜LottoWinningNumbersTest.js
 ┗ 📜ValidatorTest.js
📦src
 ┣ 📂constants
 ┃ ┣ 📜errorConstant.js
 ┃ ┣ 📜inputConstant.js
 ┃ ┗ 📜lottoConstant.js
 ┣ 📂models
 ┃ ┣ 📜Lotto.js
 ┃ ┣ 📜LottoGame.js
 ┃ ┣ 📜LottoMachine.js
 ┃ ┣ 📜LottoStatistics.js
 ┃ ┗ 📜LottoWinningNumbers.js
 ┣ 📂utils
 ┃ ┣ 📜ErrorHandler.js
 ┃ ┣ 📜InputHandler.js
 ┃ ┗ 📜Validator.js
 ┣ 📜App.js
 ┗ 📜index.js
```

## 기술 스택

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
