## `<form>`

- 사용자의 입력을 받아서 처리하는 양식

- example

  - 회원가입
  - 로그인
  - 검색
  - 메세지 전송
  - 구독 신청
  - 구매
  - 결제

- input태그의 name은 field_name과 동일해야하므로 백엔드(DB엔지니어)와 상의

---

- `action`

  - 데이터를 보낼 곳 지정

- `method`

  - 보내는 방식 선택
    - get
    - post

- `input`

  - `type`
    - text/email/password 를 지정한다
  - `required`
    - 꼭 작성되도록
  - `id`
    - css/id 지정 label의 for값과 연동하기 위해
  - `name`
    - get/post 방식을 통해 보낼 때 받을 값 인식을 위해

- `label`
  - `for`를 통해 input의 value와 연동 / 짝지어줌

---
