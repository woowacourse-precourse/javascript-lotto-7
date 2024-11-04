# javascript-lotto-precourse

## 과제 진행 요구 사항

미션은 로또 저장소를 포크하고 클론하는 것으로 시작한다.
기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 기능 요구 사항

간단한 로또 발매기를 구현한다.

- 로또 번호의 숫자 범위는 1부터 45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있으며, 당첨 기준과 상금은 아래와 같다.  
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원 
  - 4등: 4개 번호 일치 / 50,000원 
  - 5등: 3개 번호 일치 / 5,000
- 로또 구입 금액을 입력받으면 금액에 맞춰 로또를 발행한다. (로또 1장의 가격은 1,000원)
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역과 수익률을 계산하고 출력한 뒤 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 “[ERROR]“로 시작하는 메시지와 함께 Error를 발생시키고, 해당 메시지를 출력한 뒤 그 지점부터 다시 입력을 받는다.

## 입출력 요구 사항

### 입력
- 로또 구입 금액을 입력받는다. 구입 금액은 1,000원 단위로 입력받으며, 1,000원으로 나누어떨어지지 않는 경우 예외 처리한다.
- 당첨 번호는 쉼표(,)를 기준으로 구분하여 입력받는다.
- 보너스 번호를 입력받는다.

### 출력
- 발행한 로또 수량 및 번호를 출력한다. (로또 번호는 오름차순 정렬)
- 예시:
```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43] 
[3, 5, 11, 16, 32, 38] 
[7, 11, 16, 35, 36, 44] 
...
```
- 당첨 내역을 출력한다.
```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```
- 수익률을 소수점 둘째 자리에서 반올림하여 출력한다. (ex. 총 수익률은 62.5%입니다.)

## 구현 기능 목록 정리
1. 사용자 입출력 처리
   - 로또 구입 금액, 당첨 번호, 보너스 번호를 입력받는다. 
2. 로또구입 금액 검증 
   - 구입 금액이 1,000원 단위인지 확인한다.
3. 로또 번호 발행
   - 1에서 45 사이의 중복되지 않는 6개의 번호로 구성된 로또를 발행한다.
4. 당첨 번호 및 보너스 번호 입력 검증
   - 입력된 번호가 1~45 범위 내에 있는지, 중복된 번호가 없는지 검증한다. 
5. 당첨 결과 판별 
   - 구매한 로또 번호와 당첨 번호를 비교하여 일치하는 번호의 개수와 보너스 번호 일치 여부에 따라 당첨 등수를 판별한다. 
6. 수익률 계산
   - 당첨 금액을 바탕으로 총 수익률을 계산하여 출력한다.
7. 예외 처리 
   - 잘못된 입력값이 들어올 경우 “[ERROR]”로 시작하는 오류 메시지를 출력하고 재입력을 받는다.
8. 테스트 코드 작성
   - 각 기능이 정상적으로 작동하는지 검증하기 위한 Jest 테스트 코드를 작성한다.