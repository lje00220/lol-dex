# 📚 리그 오브 레전드 정보 웹사이트

Next.js를 활용해 구현한 리그 오브 레전드 정보 웹사이트입니다.

📌 [사이트 바로가기](https://lol-dex-iota.vercel.app/)

<img width="1452" alt="스크린샷 2025-03-18 15 52 42" src="https://github.com/user-attachments/assets/bdd9d28e-feb9-49ad-8570-86baf47059d9" />

## 🚀 기술 스택
- **프레임워크 & 언어**: TypeScript, Next.js
- **패키지 매니저**: pnpm
- **스타일링**: Tailwind CSS
- **데이터 패칭 및 상태 관리**: TanStack Query
- **외부 API**: [Riot Games API](https://developer.riotgames.com/)

## ⚒️ 주요 기능
- 챔피언 리스트 출력
- 챔피언 상세정보 확인
- 아이템 리스트 출력
- 이번주 무료로 플레이할 수 있는 챔피언 확인
- 반응형 UI & 다크모드 기능

## 📁 컴포넌트 구조

```
src
│── app
│   │── api 
│   │   └── rotation
│   │       └── route.ts // 라우트 핸들러
│   │── champions // 챔피언 페이지
│   │   │── [id]
│   │   │   │── page.tsx // 챔피언 상세 페이지
│   │   │   └── error.tsx
│   │   └── page.tsx
│   │── hooks // 커스텀 훅 관련 폴더
│   │── items // 아이템 페이지
│   │   │── error.tsx
│   │   └── page.tsx
│   │── rotation // 로테이션 페이지
│   │   │── error.tsx
│   │   │── page.tsx
│   │   └── provider.tsx // tanstack query provider
│   │── favicon.ico
│   │── global-error.tsx // 글로벌 에러 관리 페이지
│   │── globals.css
│   │── layout.tsx // 글로벌 레이아웃
│   └── page.tsx // 홈 페이지
│── components // 컴포넌트 폴더
│   │── ChampionCard.tsx
│   │── Header.tsx
│   │── ItemCard.tsx
│   │── Loading.tsx // 로딩 컴포넌트
│   │── Stat.tsx
│   └── ThemeToggle.tsx // 다크모드, 라이트모드 변경 버튼
│── public
│── types // 타입 모음 폴더
│── utils // fetch 함수 폴더
```

## 📝 사이트 이용법

**1. 메인 홈**

- 사이트 진입 시 메인 홈화면이 뜨게 됩니다.
- 사진이나 글씨를 클릭하면 해당 페이지로 이동합니다.
     
<img width="599" alt="image" src="https://github.com/user-attachments/assets/c9a16335-3b97-4c32-a549-16cd19b19371" />


<hr>

**2. 챔피언 페이지**

- 챔피언 카드들을 볼 수 있습니다.
- 챔피언 카드를 클릭하면 상세 페이지로 이동합니다.
- 반응형으로 디자인되었으며 너비에 따라 배치되는 카드의 갯수가 달라집니다.
     
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/836557d0-f996-4d40-b487-589b44b49a1a" />


<hr>

**3. 챔피언 상세 페이지**

- 챔피언의 상세 정보를 확인할 수 있습니다.
- 이름, 사진, 설명, 스탯 등의 정보를 확인할 수 있습니다.

<img width="1450" alt="image" src="https://github.com/user-attachments/assets/06d7b2c1-bb07-4499-9091-96162caa344c" />

<hr>


**4. 아이템 페이지**

- 아이템 카드들을 볼 수 있습니다.
- 반응형으로 디자인 되었으며 너비에 따라 배치되는 카드의 갯수가 달라집니다.

<img width="1450" alt="image" src="https://github.com/user-attachments/assets/f9a0818b-c97c-4a1c-81c9-619e77823751" />

<hr>


**5. 로테이션 페이지**

- 매주 무료로 플레이 가능한 챔피언 목록을 확인할 수 있습니다.
- 챔피언 카드를 클릭하면 상세 페이지로 이동합니다.

<img width="1451" alt="image" src="https://github.com/user-attachments/assets/3f2f3c5d-690b-40a1-8584-0ae5d980c668" />
