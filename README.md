# 오버워치2 완전 정리

2026년 4월 23일 기준 오버워치2의 최신 시즌 구조, 영웅 로스터, 서브롤, 모드, 경쟁전, Stadium 변화를 한글로 정리한 단일 페이지 사이트입니다.

## 현재 제공 범위

- Season 16부터 2026 Season 2까지의 핵심 변화 요약
- 공식 히어로 51명 로스터, 역할 필터, 역할/모드별 집계 카드
- 서브롤 패시브와 Stadium/코어 경쟁전 차이 정리
- 공식 출처 8종 링크와 운영 주의 메모

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포

- 공개 경로: `https://ivelly42.github.io/ow2-complete-site/`
- 배포 방식: GitHub Pages + GitHub Actions
- `main` 브랜치에 푸시되면 `.github/workflows/deploy-pages.yml`가 `dist/`를 자동 배포합니다.

## 참고 문서

- `DESIGN.md`: 디자인 시스템
- `KNOWLEDGE_BASE_IA.md`: v2 지식 베이스 IA 및 탐색 구조 설계
- `CORE_SCREEN_VISUAL_POLICY.md`: 핵심 화면 비주얼 폴리시
- `VISUAL_REVIEW_CHECKLIST.md`: 엔지니어/디자인 공통 리뷰 체크리스트
- `EXECUTION_PLAN.md`: CTO 실행/채용/로드맵 문서
- `CONTENT_SOURCES.md`: 공식 출처 메모
