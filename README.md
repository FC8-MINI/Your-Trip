# 🧳 숙박 예약 사이트 (저기어때)

<div>
  <a href="https://your-trip-pied.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/저기어때 바로가기-3b82f6?style=for-the-badge&logoColor=white" alt="저기어때 바로가기"/>
  </a>
</div>

#### 테스트 계정

```
ID : dev@gmail.com
PW : 12345678
```

<br>

## 🧳 프로젝트 소개

숙박 검색 및 예약 서비스를 제공하는 **저기어때** 사이트를 제작했습니다. <br>
메인 홈에서는 숙소명과 체크인, 체크아웃시간을 검색하거나 지역별 카테고리를 선택하여 숙박가능한 숙소를 확인할 수 있습니다. 로그인 시 헤더에서 사용자의 닉네임이 뜨며 헤더의 드롭다운에서 장바구니, 예약내역, 내 찜 목록, 닉네임 변경 페이지로 이동 가능합니다.
<br>숙소상세에서는 마음에 드는 숙소를 찜할 수 있는 '좋아요' 기능과 숙소정보가 소개되어있습니다. <br>스크롤을 내렸을 때 체크인/체크아웃/인원을 입력할 수 있는 항목이 있으며 객실선택에서 장바구니버튼과 객실예약 버튼으로 숙소를 예약할 수 있습니다.

- 개발 기간 : 2024.06.17 ~ 2024.07.07
- [GitHub 레포지토리](https://github.com/FC8-MINI/Your-Trip)
- [Notion](https://www.notion.so/2-2ee4e533d9d8461c93c4ff6db2a4ae5f?pvs=4)

<br>

## 🧳 팀원 소개 및 역할

| <img src="https://avatars.githubusercontent.com/u/89022828?v=4" width="150px"/> | <img src="https://avatars.githubusercontent.com/u/147579145?v=4" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/157576281?v=4" width="150px" /> |
| :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
|                       [김령태](https://github.com/catrt)                        |                      [김송희](https://github.com/lunatokki)                       |                      [박민주](https://github.com/minnug-dev)                      |
|    로그인/로그아웃<br/>회원가입/탈퇴<br/>검색, 카테고리<br/>결제<br/>페이징     |                                     장바구니                                      |                  숙소 상세<br>예약 목록/상세<br>좋아요 추가/삭제                  |

<br>

## 🧳 사용한 기술 스택

|            | Stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :--------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 개발 환경  | <img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=ESlint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black">                                                                                                                                                                                                                                                           |
|   디자인   | <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">                                                                                                                                                                                                                                                                                                                                                                        |
| 프레임워크 | <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=NEXT.JS&logoColor=wthie">                                                                                                                                                                                                                                                                                                                                                                    |
| 라이브러리 | <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"> |
|    배포    | <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>                                                                                                                                                                                                                                                                                                                                                                     |

<br>

## 🧳 폴더 구조

```
🧳jeogieottae
├──📂node_modules
├──📂public
│   ├──📂fonts
│   └──📂images
├──📂src
│   ├──📂components
│   │   └──📂Component
│   │       ├──📜index.ts
│   │       ├──📜Component.tsx
│   │       ├──📜Component.styles.ts
│   │       ├──📜Component.types.ts
│   │       └──📜Component.constants.ts
│   ├──📂app
│   │   ├──📂login
│   │   │   └──📜page.tsx
│   │   ├──📂signup
│   │   │   └──📜page.tsx
│   │   ├──📂accomodation
│   │   │   ├──📂[id]
│   │   │   │   └──📜page.tsx
│   │   ├──📂reservation/detail
│   │   │   ├── 📂[reservationId]
│   │   │   │   └──📜page.tsx
│   │   │   └──📜page.tsx
│   │   ├──📂cart
│   │   │   └──📜page.tsx
│   │   ├──📂edit
│   │   │   └──📜page.tsx
│   │   ├──📂likes
│   │   │   └──📜page.tsx
│   │   ├──📜layout.tsx
│   │   ├──📜not-found.tsx
│   │   ├──📜page.tsx
│   │   ├──📜template.tsx
│   │   └──🖼️favicon.ico
│   ├──📂apis
│   │   └──📂auth
│   ├──📂hooks
│   ├──📂lib
│   ├──📂styles
│   └──📂utils
├──📜.gitignore
├──📜.eslintrc.cjs
├──📜.prettierrc.cjs
├──📜next.config.mjs
├──📜package.json
└──📜README.md
```

<br/>

## 🧳 협업 과정

1. 구현 기능에 따라 이슈 생성
2. 생성한 이슈에서 브랜치 생성 <br/>`feat/[기능명]`
3. dev 브랜치의 최신 변경사항 받아서 동기화
4. dev 브랜치로 push 후 깃허브에서 Pull Request 생성
5. conflict 해결 후 dev로 merge

### 주요 브랜치명

```
- main: 배포용 브랜치
- dev: 개발용 브랜치
- feat: 기능 추가용 브랜치
- fix: 기능/오류 수정용 브랜치
- style: 스타일 수정용 브랜치
- hotfix: 메인에 병합하고 에러시 긴급하게 사용하는 브랜치
```

### 커밋 컨벤션

```
- Docs: 문서 작업(README.md)
- Feat: 새로운 기능 구현단위(최소단위)
- Conf: 설정 파일 관련(패키지, 라이브러리 추가)
- Asset: 이미지 소스 추가
- Design : css 작업
- Rename : 파일 명 | 디렉토리 변경
- Remove: 파일 삭제
- Chore:  주석 변경/삭제
- Refactor: 코드 리팩토링 (성능, 가독성)
- Fix: 버그를 고친 경우
- Hotfix: 치명적인 버그 수정
- !BreakingChange : 커다란 API의 변경
- Test : 테스트 관련
```

<br/>

## 🧳 구현 화면 소개

### 🖥️ 로그인

- 자체로그인, 구글∙카카오로그인
  ![alt text](login.png)

### 🖥️ 회원가입

- 이메일, 비밀번호, 비밀번호 확인, 사용자 이름, 닉네임 작성
  ![alt text](signup.png)

### 🖥️ 메인 페이지

- 로그인 시 드롭다운 메뉴 생성
- 로그아웃 시 로그인 버튼
- 지역별 카테고리 분류
- 숙소명, 체크인, 체크아웃 설정 후 숙소 검색
  ![alt text](main.png)
  ![alt text](main-search.png)

### 🖥️ 숙소 상세

- 로그인 후 옵션 선택(체크인, 체크아웃, 인원)후 장바구니 또는 바로 예약
  ![alt text](accomodation-detail.png)

### 🖥️ 장바구니

- 장바구니 목록 조회
- 선택 삭제 또는 전체 삭제
  ![alt text](cart.png)

### 🖥️ 결제하기

- 필수 약관 동의 시 결제 버튼 활성화
- 결제 버튼 클릭 시 예약 내역으로 이동
  ![alt text](pay.png)

### 🖥️ 예약 목록 및 상세

- 예약된 숙소 목록 및 상세 정보 조회
  ![alt text](reservation.png)
  ![alt text](reservation-detail.png)

### 🖥️ 찜하기 기능

- 숙소 찜하기 추가 및 삭제 기능
- 찜 목록 조회
  ![alt text](like.png)

<br/>

## 🧳 팀원별 구현기능 소개 및 회고

### 😺 김령태

#### 구현기능 소개

- 최대한 반복되는 내용을 줄이기 위해서 노력

  - fetch 핸들링 일반화
  - 공통 컴포넌트 사용

- 에러 핸들링을 최대한 하도록 노력

  - react-hook-form 사용해서 가능한 경우 에러 핸들링
  - fetch 이후의 에러 발생 이후 핸들링
    - fetch가 실패하더라도 UI/UX 유지하는 방향으로 설계

- 로그인, 회원가입 - react-hook-form

  - react-hook-form과 정규식을 활용해서 form data 1차 검증 및 에러 핸들링
  - API 사용 이후 백엔드에서 반환한 코드를 바탕으로 2차 에러 핸들링

- 숙소 검색, 카테고리 - react-hook-form, swiper

  - react-hook-form을 활용해서 form data 검증 및 에러 핸들링
  - 숙소명, 체크인, 체크아웃을 url query parameter로 전달
  - swiper 사용해서 카테고리 확인 가능

- 페이지네이션
  - url query로 page값 전달
  - page 쿼리를 제외하고 url을 가져오는 커스텀 훅을 사용
  - page 쿼리만 수정하여 page number 별로 Link 연결
- 결제
  - 동의옵션 선택하지 않았다면 결제 버튼 disabled

#### 회고

- 느낀 점

  - 저번 프로젝트에서는 각자 맡은 부분을 개발하려고하니 이름이 비슷하거나 역할이 비슷한 컴포넌트나 함수들이 많아서 이번에는 미리 파일 구조나 이름을 정하고 여러 곳에서 쓰이는 공통 컴포넌트를 만들어 사용하려고 노력했습니다. 추가적으로 저번보다 에러 핸들링 부분에서 더 개선하려고 노력했습니다. 저번에는 API를 사용하지 않아서 form data에 대해서만 에러핸들링을 했었는데 이번에는 API 응답에 따라서도 에러핸들링을 하려고 노력했습니다. 이후 프로젝트에서 어떤 부분을 백엔드와 공유해야하고 어떤 부분을 미리 의논해야하는지 알게되는 시간이었던것 같습니다.

- 아쉬운 점

  - 첫 백엔드와의 협업이라서 그런지 생각보다 잘 굴러간거 같지는 않았습니다. 백엔드 작업에 대해 모르는게 많았고 백엔드에게 어떤 걸 요청해야하는지와 같은 소통에 관해서 아쉬운 부분이 많은 거 같았습니다. 일정 후반에 급하게 기능 구현을 마무리하느라 컨벤션을 제대로 지키지 못한 것도 아쉽습니다.
    <br/><br/>

---

### 😺 김송희

#### 구현기능 소개

- 장바구니 페이지
  - useState, useEffect 훅 사용
  - 숙소상세페이지에서 선택한 옵션을 받아오기 위해 Get 메소드를 사용하여 API fetch
- 장바구니 목록

  - 목록 조회
  - 전체선택/개별선택 삭제기능
  - page와 size 값을 파라미터로 받아 장바구니 항목을 삭제하기 위해 DELETE 메소드를 사용하여 API 요청 보냄
  - 삭제 시 '삭제되었습니다'라는 토스트메시지를 띄움
  - 예약버튼 클릭 시 결제 페이지 이동

- 장바구니 항목
  - 객실/숙박기간/인원/체크인아웃/결제금액 표시
  - 숙소상세페이지에서 선택한 숙박기간에 따라 자동으로 몇 박인지 계산하는 함수 추가

#### 회고

- 좋았던 점 & 아쉬웠던 점

  - 백엔드와 처음 협업하게 된 것이 좋은 기회가 되었다. 파이어베이스같은 플랫폼을 쓰다가 처음 백엔드팀에서 만든 서버와 db, API를 이용하게 되어 어렵기도 했지만 백엔드와 협업할 때 어떤 부분을 공유해야 하는지를 조금이나마 알아가는 시간이 되었던 것 같다.
    그리고 같은 부분을 개발하더라도 관점과 의견이 다를 수 있으므로 구체화할 때 서로가 생각한 것과 다른 결과물이 나올 수 있다는 것을 깨달았다. 좀 더 소통에 적극적으로 임해야 겠다는 생각이 들었다.

  - 처음에 변수나 타입명을 지을 때 명확하게 짓지 않아서 나중에 수정할 때 거의 모든 코드를 바꿔야 했다. 그 외에도 작업을 어떻게 해야할지, 코드를 제대로 이해하지 못한 상태로 참고한 코드를 급하게 밀어넣다보니 오류가 자주 발생했고 성능과 가독성 면에서도 다른 분들이 작업하신 코드와 연결할 때도 좋지 못한 코드가 되었다. 이를 수습하기 위해 조에서 많이 도와주셨고 결과적으로 배포가 지연되어 원래 계획한 부분과 일정을 제대로 지키지 못했던 것이 아쉽다.
    <br/><br/>

---

### 😺 박민주

#### 구현기능 소개

- 숙소 상세

  - API 호출을 수행하고 데이터가 성공적으로 로드되면 해당 데이터를 렌더링하여 숙박 상세 정보 노출
  - 각 입력 필드에서 유효성 검사를 수행하여 잘못된 입력이 있을 경우 사용자에게 경고 메시지를 보여주며 사용자 경험 개선

- 예약 목록 및 상세

  - page가 변경될 때마다 예약 목록을 API로 부터 가져옴
  - 데이터를 성공적으로 로드하면 컴포넌트를 렌더링하고 데이터가 없는 경우에는 해당 빈 컴포넌트를 렌더링
  - 목록과 마찬가지로 초기 상태 설정하고 컴포넌트가 마운트 될때 예약 상세정보를 API로부터 가져옴

- 찜하기
  - 버튼을 클릭하면 API 호출을 통해 서버에 좋아요 상태를 업데이트
  - 성공 여부에 따라 사용자에게 확인 메시지 표시

#### 회고

- 느낀 점

  - 막히는 부분이 있을 때마다 령태님이 함께 코드를 봐주시고 막힘 없이 해결해주셔서 정말 감사했습니다. 백엔드 분들께서도 요청 드릴 때마다 아주 신속하게 답변해주셔서 소통이 원활하게 잘 이루어졌습니다.
    처음 진행한 백엔드와의 협업 프로젝트였기 때문에 여러모로 아쉬움이 남지만, 데이터를 가공하기 위해 명확한 요청과 전반적인 구조에 대한 이해가 얼마나 필수적인지 배우게 된 좋은 기회였습니다.

- 아쉬웠던 점

  - 설계 단계에서 백엔드 분들과 데이터들을 어떤 방식으로 다룰 것인지에 관한 내용을 많이 다루지 못한 것 같아서 아쉬웠고, 후반부에 들어서 API 통신하는 부분이나 컴포넌트 안에서 데이터를 타고 들어가는 구조가 헷갈리고 복잡해서 상당히 어려웠습니다. 미리 프로젝트 초반부터 API 통신 시뮬레이션을 시작했으면 어땠을까 하는 아쉬움이 들고, 다급하게 처리하다 보니 에러 핸들링 같은 부분에서 더 꼼꼼하게 처리하지 못한 것 같아 아쉬움이 듭니다.
