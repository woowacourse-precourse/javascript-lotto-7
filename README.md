# javascript-lotto-precourse

> 🎱 로또 발매기
1등: 6개 번호 일치 / 2,000,000,000원
2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
3등: 5개 번호 일치 / 1,500,000원
4등: 4개 번호 일치 / 50,000원
5등: 3개 번호 일치 / 5,000원

## 입력
- [x] 로또 구입 금액 입력
- [ ] 당첨 번호 입력
- [ ] 보너스 번호 입력
- [x] 예외가 발생하면 ERROR 메시지 출력 후 해당 지점부터 다시 입력 받기

## 출력
- [x] 발행할 로또 장수 출력
- [ ] 발행한 로또 번호 출력
- [ ] 당첨 내역 출력
- [ ] 수익률 출력
- [x] 예외 상황시 ERROR 메시지 출력

## 기능
- [x] 입력된 금액에서 발행할 로또 개수 계산
- [ ] 로또 1개 발행 (중복되지 않는 6개의 숫자 발행)
- [ ] 로또 번호 오름차순 정렬
- [ ] 금액에 맞는 개수의 로또 발행 (1장에 1,000원)
- [ ] 사용자가 구매한 로또 번호와 당첨 번호를 비교
- [ ] 수익률 계산

## 예외
- [x] 입력된 금액이 1,000원으로 나눠 떨어지지 않을 때
- [x] 입력된 금액이 숫자가 아닐 때
- [x] 입력된 금액이 음수일 때
- [x] 입력된 금액이 0일 때
- [x] 입력된 금액이 공백일 때
- [ ] 입력된 로또 번호가 숫자이지만 1~45 범위 내에 들지 않을 때
- [ ] 입력된 로또 번호가 숫자가 아닐 때
- [ ] 입력된 로또 번호에 중복이 있을 때
- [ ] 입력된 로또 번호가 7개 이상일 때
- [ ] 입력된 로또 번호가 쉼표로 구분되어 있지 않을 때

## 추가 요구사항
1. indent depth 3 이내로
2. 3항 연산자 사용하지 않음
3. 메서드는 최소한 작게 한 가지 일만 수행
4. Jest로 테스트 코드 작성 후 확인
5. 함수의 길이가 15라인 이내로
6. else 지양 (if~return, when 참고)
7. 단위 테스트
8. Lotto 클래스 사용

## 실행 결과 예시
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