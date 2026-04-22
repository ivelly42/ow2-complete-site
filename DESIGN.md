# Design System — Overwatch 2 완전정리

## Product Context
- **무엇을 만드는가:** 오버워치2의 최신 시즌, 영웅, 모드, 경쟁전, Stadium 변화를 한눈에 이해할 수 있는 한글 정보 사이트
- **누가 보는가:** 복귀 유저, 신규 유저, 메타를 빠르게 따라가려는 기존 유저
- **카테고리:** 게임 정보형 에디토리얼 사이트
- **프로젝트 타입:** 랜딩 + 정보 허브

## Aesthetic Direction
- **방향:** Heroic Editorial Ops
- **장식 수준:** intentional
- **무드:** 경기장 포스터의 과장된 에너지와 작전 브리핑의 구조감을 동시에 가져간다. 화면은 "멋있다"와 "정리가 잘 됐다"가 동시에 느껴져야 한다.
- **참고 기준:** 오버워치 공식 히어로 갤러리의 강한 캐릭터 중심성, 시즌 공지의 고밀도 정보 전달, Stadium UI의 경쟁적 긴장감

## Typography
- **Display/Hero:** `Black Han Sans` — 한국어 대제목에서 즉시 힘이 느껴져야 한다.
- **Accent/Numbers:** `Barlow Condensed` — 시즌 번호, 통계, 태그, 버튼에 경기장 포스터 감각을 준다.
- **Body/UI:** `Noto Sans KR` — 긴 설명과 카드 본문 가독성을 책임진다.
- **Data:** `JetBrains Mono` — 패치 요약, 수치, 출처 표기에 사용한다.
- **로딩 전략:** Google Fonts 우선, 실패 시 `sans-serif`와 `monospace`
- **스케일:** 12 / 14 / 16 / 20 / 28 / 40 / 64 / 96 px

## Color
- **접근:** expressive
- **Primary:** `#F28A1A` — 오버워치의 열기와 주도권
- **Secondary:** `#5EC8FF` — 정보, 시스템, 하이라이트
- **Background:** `#0A0F14`
- **Surface:** `#101823`
- **Surface Raised:** `#162231`
- **Border:** `#2A394C`
- **Text Primary:** `#F5F7FA`
- **Text Muted:** `#9FB0C3`
- **Danger:** `#FF5D47`
- **Success:** `#53D88A`
- **Warning:** `#FFC247`
- **Metal:** `#C7B07A`
- **Dark mode 전략:** 기본이 다크다. 밝은 면은 강조 포인트로만 사용하고, 색은 발광이 아니라 금속 반사처럼 다룬다.

## Spacing
- **Base unit:** 8px
- **밀도:** comfortable
- **Scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

## Layout
- **접근:** hybrid
- **원칙:** 첫 화면은 문서가 아니라 포스터처럼 보이되, 아래로 갈수록 정보 시스템처럼 읽혀야 한다.
- **그리드:** 모바일 4열, 태블릿 8열, 데스크톱 12열
- **최대 폭:** 1280px
- **섹션 리듬:** 대형 히어로 블록 -> 요약 카드 -> 데이터형 섹션 -> 출처형 섹션
- **형태 언어:** 직사각형만 쓰지 말고 사선 컷, 엣지 라인, 프레임 오버레이를 적극 사용
- **라운드:** 6 / 12 / 18 / 999px

## Motion
- **접근:** intentional
- **원칙:** 빠른 스윕, 스태거드 리빌, 패널 슬라이드 중심. 둥실거리는 마이크로 인터랙션은 피한다.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Duration:** 120 / 220 / 360 / 520ms

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-23 | `Heroic Editorial Ops` 방향 채택 | 오버워치풍 에너지와 정보 허브의 명료함을 동시에 만족시키기 위해 |
| 2026-04-23 | 오렌지/차콜/메탈 중심 팔레트 채택 | 공식 게임 감성과 AI 슬롭 회피를 동시에 달성하기 위해 |
| 2026-04-23 | `Black Han Sans` + `Barlow Condensed` + `Noto Sans KR` 조합 채택 | 한국어 강제력, 영어 숫자 리듬, 본문 가독성을 분리해서 최적화하기 위해 |
