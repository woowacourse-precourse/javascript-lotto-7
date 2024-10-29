# javascript-lotto-precourse
- 기능 목록
  
1. 입력기능
  - 당첨 입력 번호는 모두 1부터 45까지의 숫자, 그리고 중복을 방지해야함

  1.1 로또 구입
    - 1000원 단위로 받고 아닐 경우 에러

  1.2 당첨 번호 입력
    - ,로 구분하고 아닐 경우 에러
  
  1.2.1 보너스 번호 입력

  
2. 출력기능
  2.1 로또 출력
    - 이는 (3)의 로또 기능을 통해 (1.1)에서 받은 입력값 만큼 로또 숫자들 생성
    - 실행 결과 예시에는 로또 번호들이 번호 입력 전에 나오지만 번호까지 입력하고 나오게 함 (왜냐하면 번호들을 보고 추첨 할 수 있기 때문)

  2.2 당첨 통계 출력
    2.2.1 3개 부터 6까지 당첨 유무 확인 및 출력
    2.2.2 5개 일치와 보너스볼 일치 유무 확인 및 출력

  2.3 (4)에서 구한 수익률 출력

3. 로또 돌리는 기능
  3.1 로또 돌리기
    - 제공된 Lotto클래스 사용하기

4. 결과, 수익률 계산 기능
  4.1 수익률 계산
    - 수익률 = ( 총 수입 % 로또 구매량 ) x 100 
    - 위에서 구한 수익률은 소수점 둘째 자리에서 반올림
