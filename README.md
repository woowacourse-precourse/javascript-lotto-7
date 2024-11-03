# javascript-lotto-precourse

# 기능구현 리스트
## 입력부
- [✅] 구매금액 입력
- [✅] 구매금액 예외처리(숫자인지,1000단위인지)
- [✅] 구매금액 예외처리후 회복(다시 입력할 수 있도록)
- [✅] 당첨번호 6개 입력
- [✅] 당첨번호 예외처리(숫자인지,1이상 45이하인지,중복되는 번호가 있는지)
- [✅] 당첨번호 예외처리 후 회복
- [✅] 보너스번호 입력
- [✅] 보너스번호 예외처리(숫자인지,1이상 45이하인지)
- [✅] 보너스번호 예외처리 후 회복
## 출력부
- [✅] 구매금액을 횟수 변경기능
- [✅] 2차원 행렬에 횟수만큼 발행로또 저장 및 출력 -> 오름차순 정렬
- [✅] 발행로또 당첨번호와 보너스 번호 검증
- [✅] 당첨 내역 출력및 수익금 저장
- [✅] 수익률 출력
- [✅] 2등 3등 구분 로직 수정

# 리팩토링 리스트
- [✅] Lotto 클래스 속성 제거
- [✅] 기존 단위테스트 통과를 위한 입력부 타입관련 수정
- [✅] 하드코딩된 문자열 상수화
- [✅] 유효성 검증 클래스 생성
- [✅] Lotto 클래스 메소드 분리
- [] 결과를 처리하고, 출력하는 LottoResult 클래스 생성
- [] 15줄 이상 함수 분리

# 추가 테스트케이스

# 생각해볼 것들
## validator
검사하는 함수를 종합하는 함수를
이 안에서 또 만들어도 될까??
-> 모듈화를 하는 것이 목표라면 대상 클래스에서 작성하자.