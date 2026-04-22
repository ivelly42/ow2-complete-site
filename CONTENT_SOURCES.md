# 공식 소스 메모 — 2026-04-23 기준

## 핵심 기준
- 최신성 우선 원칙: 2026년 기사/패치노트 > 2025년 시스템 소개 > 그 이전 배경 자료
- 비공식 위키/루머는 사용하지 않음

## 우선 참고 링크
- 히어로 로스터: https://overwatch.blizzard.com/en-us/heroes/
- 2026 시즌 1 스포트라이트: https://overwatch.blizzard.com/en-us/news/24246206/
- 2026 시즌 2 소개: https://overwatch.blizzard.com/en-us/news/24266793/
- 2026년 4월 패치노트: https://overwatch.blizzard.com/en-us/news/patch-notes/live/2026/04
- 2026년 5월 패치 인덱스: https://overwatch.blizzard.com/en-us/news/patch-notes/live/2026/05/
- OWCS 2026 안내: https://news.blizzard.com/ko-kr/article/24244469/owcs-2026
- Stadium 초기 런치 소개: https://overwatch.blizzard.com/en-us/news/24178102/
- Stadium 향후 로드맵: https://overwatch.blizzard.com/en-gb/news/24198087/director-s-take-past-present-and-future-of-stadium/

## 현재까지 확인한 사실
- 2026년 서사는 `Reign of Talon`으로 재시작됐고, 시즌 구조는 2026년 Season 1~6 아크 기준으로 설명된다.
- 2026 Season 1은 2026-02-10 시작이며 신규 영웅 5명 `Domina`, `Emre`, `Mizuki`, `Anran`, `Jetpack Cat`을 투입했다.
- Season 1에는 `Conquest` 5주 메타 이벤트가 포함되며, Overwatch/Talon 진영 선택 구조로 운영됐다.
- Season 1부터 역할이 서브롤 체계로 재편됐다.
- Season 2 `Summit`은 2026-04-14 패치 기준 최신 시즌이며 신규 Damage 영웅 `Sierra`를 추가했다.
- Season 2는 `Operation: Grand Mesa`, `Post-Match Accolades`, `Antarctic Peninsula` 리워크, `Ramattra`의 Stadium 합류, `Lijiang Night Market` Stadium 맵 추가를 포함한다.
- Season 2 소개 글은 `Stadium Report` 문맥에서 Stadium seasonal reset을 decay 체계로 대체한다고 설명한다.
- 2026-03-12, 2026-03-31은 버그 픽스 중심 패치였고, 2026-04-17에는 Sierra 핫픽스가 별도 적용됐다.
- 2026년 5월 패치 인덱스는 현재 `No Patch Notes Found` 상태라 후속 공지 추적이 필요하다.
- Season 2 소개 글은 `Operation: Grand Mesa` 기간을 2026-05-04까지, 2026년 4월 패치 노트는 2026-05-12까지로 표기해 일정 충돌이 있다.
- OWCS 2026 공식 가이드는 2026년 2월 서울 프리시즌 부트캠프와 중계 일정을 함께 정리한다.
- 공식 히어로 페이지는 역할, 서브롤, Stadium 참여 여부까지 HTML 속성으로 제공한다.

## 서브롤 정의 출처
- 패시브 정의는 Season 1 Spotlight와 공식 히어로 페이지를 교차 확인한다.
- 현재 멤버 배정, 카운트, Stadium 여부는 공식 히어로 페이지를 기준으로 잡는다.
- Tank
  - `Bruiser`: 치명타 피해 감소, 체력 절반 이하에서 이동속도 증가
  - `Initiator`: 공중 체류 시 소량 회복
  - `Stalwart`: 넉백/둔화 감소
- Damage
  - `Sharpshooter`: 치명타 적중 시 이동기 쿨다운 감소
  - `Flanker`: 생명력 팩 추가 회복
  - `Specialist`: 처치 시 잠시 재장전 속도 증가
  - `Recon`: 피해를 준 반피 이하 적을 벽 너머로 감지
- Support
  - `Tactician`: 초과 궁극기 충전 보존
  - `Medic`: 무기 치유 시 자가 회복
  - `Survivor`: 이동기 사용 시 패시브 체력 재생 활성화

## 운영 워치리스트
- `Operation: Grand Mesa` 종료일은 공식 문서끼리 다르므로, 라이브 운영 시점에는 인게임 공지나 최신 배너로 한 번 더 교차검증한다.
- `2026년 5월 패치 인덱스`는 현재 `No Patch Notes Found` 상태이므로, 첫 노트 게시 시 시즌 요약과 footer 기준선을 함께 갱신한다.

## 구현 메모
- 히어로 페이지 파싱으로 현재 영웅 리스트와 역할, 서브롤, Stadium 여부를 데이터화할 수 있다.
- 시즌/패치 정보는 별도 수기 요약이 더 안전하다. 기사 문장 전체를 옮기지 말고 핵심 변화만 재서술한다.
- 날짜가 중요한 항목은 반드시 절대 날짜와 함께 표기한다.
