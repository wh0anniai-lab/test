<<<<<<< HEAD
# introduce
test first &amp; intro
=======
# 김동영 포트폴리오 웹페이지

Next.js 14(App Router) + Tailwind CSS + shadcn/ui 스타일 컴포넌트로 만든
Apple.com 톤앤매너의 1페이지(싱글 페이지) 포트폴리오입니다.
모든 섹션이 한 페이지 안에 있고, 상단 내비게이션은 같은 페이지의 앵커로 이동하므로
페이지 이동 깊이는 1단계입니다.

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

배포용 빌드:

```bash
npm run build
npm run start
```

## 페이지 구성

상단 내비게이션 → 같은 페이지 내 앵커 이동 (1-depth)

1. **Hero** — 이름, 헤드라인, 소개 문구, 키워드 태그(ROBOTICS / AI SYSTEMS / PLATFORM SERVICES / C·JAVA·PYTHON)
2. **Overview** — 포트폴리오 구성 요약 카드 (각 카드 클릭 시 해당 섹션으로 이동)
3. **About(#about)** — 프로필 카드, 핵심 역량, 4개 하이라이트(Robotics / AI Systems / Start-up / AI Tech. Lecture)
4. **Career(#career)** — 학력, 경력 타임라인 (2016 KIST ~ 2026 AI 서초칼리지)
5. **Projects(#projects)** — 프로젝트 요약, 5개 프로젝트 카드, 기술 스택(언어/플랫폼/로봇·드론 기술)
6. **Startup(#startup)** — 맘잇 · 가티 창업 경험 카드, 통계(8+년 경력 / 5개 프로젝트 / 2회 창업 / 논문 2편)
7. **Lecture(#lecture)** — AI 기술 강연 사진 및 소개 (Startup 섹션 하단)
8. **Contact(#contact)** — 이메일 · 전화 · 위치 · 전문분야 카드, 인용구, 문의 폼

## 폴더 구조

```
app/
  layout.tsx          메타데이터, 폰트 적용
  page.tsx             섹션 조합
  globals.css           전역 스타일 (Pretendard 폰트, 접근성 포커스 등)
components/
  ui/                   버튼, 카드, 인풋, 배지 등 shadcn/ui 스타일 컴포넌트
  sections/
    navbar.tsx           상단 고정 내비게이션 (모바일 메뉴 포함)
    hero.tsx             첫 화면
    overview.tsx          포트폴리오 구성 빠른 이동 카드
    about.tsx             프로필 소개
    career.tsx            학력 · 경력 타임라인
    projects.tsx           프로젝트 · 기술 스택
    startup.tsx            창업 경험 · AI 기술 강연
    contact.tsx            연락처 · 문의 폼
    footer.tsx
hooks/
  use-reveal.ts          스크롤 시 부드럽게 나타나는 효과
public/
  images/lecture.jpg      AI 기술 강연 사진 (업로드하신 포트폴리오 PDF에서 추출)
```

## 아직 채워야 할 부분

- `components/sections/about.tsx`의 "프로필 사진 영역" — 실제 프로필 사진 파일을
  `public/images/profile.jpg`로 추가한 뒤, 안내 주석을 참고해 `<img>` 태그로 교체해주세요.
- 그 외 이력, 프로젝트, 연락처 등은 업로드해주신 포트폴리오 PDF 내용을 그대로 반영했습니다.
  내용이 바뀌면 각 섹션 파일 상단의 데이터 배열(`EXPERIENCE`, `PROJECTS`, `CONTACT_LINKS` 등)만
  수정하면 됩니다.

## 디자인 토큰

`tailwind.config.ts`의 `colors`에 Apple 웹사이트를 참조한 팔레트가 정의되어 있습니다.

| 이름 | 값 | 용도 |
|---|---|---|
| `paper` | #FFFFFF | 기본 배경 |
| `mist` | #F5F5F7 | 섹션 대비 배경 |
| `ink` | #1D1D1F | 본문 텍스트 |
| `steel` | #86868B | 보조 텍스트 |
| `signal` | #0071E3 | 강조색(버튼, 링크) |
| `hairline` | #D2D2D7 | 구분선, 테두리 |

폰트는 한글에서도 Apple 특유의 인상을 주는 **Pretendard Variable**을
CDN으로 불러와 사용합니다 (`app/globals.css` 상단).

## 접근성 & 반응형

- `sm/md/lg` 브레이크포인트로 모바일부터 데스크톱까지 대응
- 모든 섹션에 `scroll-mt-14`를 적용해 고정 내비게이션에 콘텐츠가 가리지 않도록 처리
- 키보드 포커스 시 파란색 아웃라인 표시
- `prefers-reduced-motion` 사용자를 위해 애니메이션 자동 축소
>>>>>>> 372c156 (test 1level)
