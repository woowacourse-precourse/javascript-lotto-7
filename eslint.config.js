export default [
  {
  
    rules: {
      // 들여쓰기 깊이를 2로 제한
      'max-depth': ['error', 2],
  
      // 들여쓰기를 2칸으로 설정 (기본 자바스크립트 컨벤션)
      'indent': ['error', 2],
  
      // 세미콜론을 항상 사용
      'semi': ['error', 'always'],
  
      // 삼항연산자 금지
      'no-ternary': 'error',
  
      // 사용되지 않는 변수를 오류로 처리
      'no-unused-vars': 'error',
  
      // 가능한 경우 const를 사용하도록 권장
      'prefer-const': ['error', {
        'destructuring': 'all',
        'ignoreReadBeforeAssign': true
      }],
  
      // 중괄호 사용을 강제
      'curly': 'error',
  
      // ===와 !== 사용을 강제
      'eqeqeq': ['error', 'always'],
  
      // 콘솔 사용을 경고로 처리 (필요에 따라 비활성화 가능)
      'no-console': 'warn',
  
      //lines-between-class-members
      'lines-between-class-members': ['error', 'always'],
  
      // Updated padding line rule with more comprehensive cases
      'padding-line-between-statements': [
        'error',
        // { blankLine: 'always', prev: '*', next: 'function' },
        // { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      ],
  
      // Updated keyword spacing rule with before and after
      'keyword-spacing': ['error', { 'before': true, 'after': true }]
  
    }
  }
];
  