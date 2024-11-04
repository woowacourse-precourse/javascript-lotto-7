# javascript-lotto-precourse

<br />

## 📋 기능 목록

- 로또 구매 금액 입력 기능
  - 형식에 맞게 입력 안내 문구 출력
  - 입력한 금액이 빈 문자열일 경우 예외 처리
  - 입력한 금액이 숫자가 아닐 경우 예외 처리
  - 입력한 금액이 정수가 아닐 경우 예외 처리
  - 입력한 금액이 1000원 미만일 경우 예외 처리
  - 입력한 금액이 10만원을 초과할 경우 예외 처리
  - 입력한 금액이 1000원 단위로 나누어떨어지지 않을 경우 예외 처리
  - 예외 처리가 되었을 경우 예외 문구 출력 후 다시 입력을 기다림

- 로또 구매 기능
  - 입력한 금액에 맞게 로또 구매
  - 구매한 로또 개수 만큼 로또 번호 자동 생성
    - 1에서 45사이의 중복되지 않은 6자리 로또 번호 생성
    - 생성된 번호가 숫자가 아닐 경우 예외 처리
    - 생성된 번호가 정수가 아닐 경우 예외 처리
    - 생성된 번호가 1에서 45사이의 값이 아닐 경우 예외 처리
    - 생성된 번호가 6자리가 아닐 경우 예외 처리
    - 생성된 번호가 중복되었을 경우 예외 처리
    - 로또 번호 오름차순 정렬
  - 자동 생성된 로또들을 순회하며 6자리 번호 출력

- 당첨 번호 입력 기능
  - 형식에 맞게 입력 안내 문구 출력
  - 입력된 문자열이 빈 문자열일 경우 예외 처리
  - 쉼표(,)로 구분된 당첨 번호 목록 취합
    - 번호 목록이 숫자가 아닐 경우 예외 처리
    - 번호 목록이 정수가 아닐 경우 예외 처리
    - 번호 목록이 1에서 45사이의 값이 아닐 경우 예외 처리
    - 번호 목록이 6자리가 아닐 경우 예외 처리
    - 번호 목록이 중복되었을 경우 예외 처리
    - 예외 처리가 되었을 경우 예외 문구 출력 후 다시 입력을 기다림

- 보너스 번호 입력 기능
  - 형식에 맞게 입력 안내 문구 출력
  - 입력한 번호가 빈 문자열일 경우 예외 처리
  - 입력한 번호가 숫자가 아닐 경우 예외 처리
  - 입력한 번호가 정수가 아닐 경우 예외 처리
  - 입력한 번호가 1에서 45사이가 아닐 경우 예외 처리
  - 입력한 번호가 당첨 번호에 포함된 경우 예외 처리
  - 예외 처리가 되었을 경우 예외 문구 출력 후 다시 입력을 기다림

- 당첨 통계 취합 기능
  - 구입한 로또들과 당첨 번호 및 보너스 번호를 대조하여 당첨 개수 목록 취합
  - 취합한 당첨 개수 목록을 순회하며 순위별 당첨 통계 출력

- 총 수익률 계산 기능
  - 계산한 당첨 개수 목록을 기반하여 총 당첨금 취합
  - 총 당첨금에 구입 금액을 나누어 총 수익률 계산

<br />

## 📂 폴더 구조

```
📦 
├─ __tests__
│  ├─ ApplicationTest.js
│  ├─ CalculatorTest.js
│  ├─ InputTest.js
│  ├─ LottoGameTest.js
│  ├─ LottoTest.js
│  └─ VendingMachineTest.js
└─ src
   ├─ App.js
   ├─ Constants.js
   ├─ Lotto.js
   ├─ Utils.js
   ├─ index.js
   ├─ controller
   │  └─ LottoController.js
   ├─ model
   │  ├─ Calculator.js
   │  ├─ Lotto.js
   │  ├─ LottoGame.js
   │  ├─ LottoValidator.js
   │  └─ VendingMachine.js
   └─ view
      ├─ Input.js
      └─ Output.js
```

<br />

## 🖥️ 실행 결과

![실행 결과 이미지](https://private-user-images.githubusercontent.com/110769195/382594419-546cc701-9ae9-4b74-84be-8a1a8b4f579d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA2NTc2MjMsIm5iZiI6MTczMDY1NzMyMywicGF0aCI6Ii8xMTA3NjkxOTUvMzgyNTk0NDE5LTU0NmNjNzAxLTlhZTktNGI3NC04NGJlLThhMWE4YjRmNTc5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwM1QxODA4NDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMGU4OWNjNGFmY2E1NDNkYmU4NmZiMzJjOTlkZmUxZjE5NTllNWQ5MDY3ODQ5ZWZmNDU5OTdhNGQ5OGZhYjEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LfQDsLUJEFqb5Zekh6IAiO2qzxYmIcIYv8ltf8PWnnc)