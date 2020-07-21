## 2020.07.21
### done
- question > 문제번호 앞 icon 추가
- question > 하단 제출 버튼추가
### todo
- question > option 클릭시 state 변경 및 color 변경 checkbox 중복하는 부분 수정
- 데이터 형식 고민, result 결과 계산 고려해서...
    {
      id: 1,
      content: "문제문제 1번 문제",
      option_1: "첫번째 선택지",
      checked_1: true,
      option_2: "두번째 선택지",
      checked_2: false,
    },

    {
      id: 1,
      content: "문제문제 1번 문제",
      option_1: "첫번째 선택지",
      option_2: "두번째 선택지",
      checked: (1 or 2)
    },