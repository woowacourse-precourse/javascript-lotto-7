# javascript-lotto-precourse
# javascript-lotto-precourse

## 기능 플로우
1. 로또 구입 금액 입력
    - [ ] 금액 입력받기
    - [ ] 예외 처리
2. 로또 구매하기
    - [ ] 구매 할 로또 개수 구하기
    - [ ] 구매 한 로또 개수 출력
    - [ ] 6자리 랜덤 로또 번호 구하기
    - [ ] 로또 번호 정렬하기
    - [ ] 로또 객체 생성
    - [ ] 로또 번호 출력
3. 당첨번호와 보너스 번호 입력
    - [ ] 당첨번호 입력받기
    - [ ] 당첨번호 예외처리
    - [ ] 보너스 번호 입력받기
    - [ ] 보너스 번호 예외처리
4. 사용자가 구매한 로또 번호와 당첨 번호를 비교
    - 로또 번호과 당첨 번호 비교후 일치 개수 반환
    - 로또 번호에 보너스 번호 있는지 확인 
    - 당첨 결과 배열에 저장하기
5. 당첨 내역 및 수익률을 출력
    - 당첨 내역 출력하기
    - 수익률 계산
    - 수익률 출력

## 예외처리
1. 로또 구입 금액
    - [ ] 1000원 단위
    - [ ] falsy 체크
2. 로또 번호
    - [ ] 길이가 6인지
    - [ ] 각 번호가 1에서 45 사이의 양수인지
    - [ ] 중복이 없는지
## MVC 패턴

## Model
1. 구입금액 class
    - 총 구입금액 프로퍼티
    - 구입금액 유효성검사
    - 구매한 로또 개수 반환

2. 로또 class
    - 로또 번호 프로퍼티
    - 로또 번호 유효성 검사
    - 로또 생성 메서드

3. 전체 로또 관리 class  
    - 전체 로또 배열 프로퍼티
    - 로또 개수 프로퍼티
    - 

4. 당첨 번호 + 보너스 번호 class
    - 당첨 번호 프로퍼티
    - 보너스 번호 프로퍼티
    - 당첨, 보너스 번호 유효성 검사

5. 로또 당첨 확인 class
    - 


## View
1. 사용자 입력 받기
2. 당첨 통계 출력하는 클래스

## Controller
1. 로또 게임 컨트롤러





## 기능요구사항
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.