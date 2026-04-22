export type HeroRole = 'tank' | 'damage' | 'support'
export type RoleFilter = 'all' | HeroRole

export type Hero = {
  name: string
  role: HeroRole
  subrole: string
  stadium: boolean
}

export const heroRoster: Hero[] = [
  { name: 'Sierra', role: 'damage', subrole: 'recon', stadium: false },
  { name: 'Ramattra', role: 'tank', subrole: 'stalwart', stadium: true },
  { name: 'Ana', role: 'support', subrole: 'tactician', stadium: true },
  { name: 'Anran', role: 'damage', subrole: 'flanker', stadium: false },
  { name: 'Ashe', role: 'damage', subrole: 'sharpshooter', stadium: true },
  { name: 'Baptiste', role: 'support', subrole: 'tactician', stadium: false },
  { name: 'Bastion', role: 'damage', subrole: 'specialist', stadium: false },
  { name: 'Brigitte', role: 'support', subrole: 'survivor', stadium: true },
  { name: 'Cassidy', role: 'damage', subrole: 'sharpshooter', stadium: true },
  { name: 'D.Va', role: 'tank', subrole: 'initiator', stadium: true },
  { name: 'Domina', role: 'tank', subrole: 'stalwart', stadium: false },
  { name: 'Doomfist', role: 'tank', subrole: 'initiator', stadium: true },
  { name: 'Echo', role: 'damage', subrole: 'recon', stadium: false },
  { name: 'Emre', role: 'damage', subrole: 'specialist', stadium: false },
  { name: 'Freja', role: 'damage', subrole: 'recon', stadium: true },
  { name: 'Genji', role: 'damage', subrole: 'flanker', stadium: true },
  { name: 'Hanzo', role: 'damage', subrole: 'sharpshooter', stadium: false },
  { name: 'Hazard', role: 'tank', subrole: 'initiator', stadium: true },
  { name: 'Illari', role: 'support', subrole: 'survivor', stadium: false },
  { name: 'Jetpack Cat', role: 'support', subrole: 'tactician', stadium: false },
  { name: 'Junker Queen', role: 'tank', subrole: 'stalwart', stadium: true },
  { name: 'Junkrat', role: 'damage', subrole: 'specialist', stadium: true },
  { name: 'Juno', role: 'support', subrole: 'survivor', stadium: true },
  { name: 'Kiriko', role: 'support', subrole: 'medic', stadium: true },
  { name: 'Lifeweaver', role: 'support', subrole: 'medic', stadium: false },
  { name: 'Lúcio', role: 'support', subrole: 'tactician', stadium: true },
  { name: 'Mauga', role: 'tank', subrole: 'bruiser', stadium: false },
  { name: 'Mei', role: 'damage', subrole: 'specialist', stadium: true },
  { name: 'Mercy', role: 'support', subrole: 'medic', stadium: true },
  { name: 'Mizuki', role: 'support', subrole: 'survivor', stadium: false },
  { name: 'Moira', role: 'support', subrole: 'medic', stadium: true },
  { name: 'Orisa', role: 'tank', subrole: 'bruiser', stadium: true },
  { name: 'Pharah', role: 'damage', subrole: 'recon', stadium: true },
  { name: 'Reaper', role: 'damage', subrole: 'flanker', stadium: true },
  { name: 'Reinhardt', role: 'tank', subrole: 'stalwart', stadium: true },
  { name: 'Roadhog', role: 'tank', subrole: 'bruiser', stadium: false },
  { name: 'Sigma', role: 'tank', subrole: 'stalwart', stadium: true },
  { name: 'Sojourn', role: 'damage', subrole: 'sharpshooter', stadium: true },
  {
    name: 'Soldier: 76',
    role: 'damage',
    subrole: 'specialist',
    stadium: true,
  },
  { name: 'Sombra', role: 'damage', subrole: 'recon', stadium: false },
  { name: 'Symmetra', role: 'damage', subrole: 'specialist', stadium: false },
  { name: 'Torbjörn', role: 'damage', subrole: 'specialist', stadium: true },
  { name: 'Tracer', role: 'damage', subrole: 'flanker', stadium: true },
  { name: 'Vendetta', role: 'damage', subrole: 'flanker', stadium: true },
  { name: 'Venture', role: 'damage', subrole: 'flanker', stadium: false },
  {
    name: 'Widowmaker',
    role: 'damage',
    subrole: 'sharpshooter',
    stadium: false,
  },
  { name: 'Winston', role: 'tank', subrole: 'initiator', stadium: true },
  {
    name: 'Wrecking Ball',
    role: 'tank',
    subrole: 'initiator',
    stadium: false,
  },
  { name: 'Wuyang', role: 'support', subrole: 'survivor', stadium: true },
  { name: 'Zarya', role: 'tank', subrole: 'bruiser', stadium: true },
  { name: 'Zenyatta', role: 'support', subrole: 'tactician', stadium: true },
]

export const latestHighlights = [
  {
    label: '현재 시즌',
    value: 'Season 2: Summit',
    copy:
      '2026년 4월 14일 시작. Sierra 추가, Operation: Grand Mesa, Post-Match Accolades 복귀, Antarctic Peninsula 리워크, Stadium 랭크 decay 전환이 한 번에 들어왔다.',
  },
  {
    label: '공식 히어로 수',
    value: '51명',
    copy:
      '공식 히어로 페이지 기준으로 탱커 14, 딜러 23, 서포트 14명이다. 2026년 시즌 아크를 타며 신규 얼굴이 빠르게 늘고 있다.',
  },
  {
    label: 'Stadium 가용 영웅',
    value: '32명',
    copy:
      '공식 히어로 페이지의 Stadium 표시 기준. Season 2 패치로 Ramattra가 합류했고, 시즌 소개 글에서는 Jetpack Cat의 중시즌 합류도 예고됐다.',
  },
  {
    label: '2026 신규 영웅',
    value: '6명 라이브',
    copy:
      'Domina, Emre, Mizuki, Anran, Jetpack Cat이 Season 1에 투입됐고, Season 2에서 Sierra가 추가됐다.',
  },
]

export const seasonTimeline = [
  {
    date: '2025-04-22',
    label: 'Season 16',
    title: 'Stadium이 세 번째 기둥으로 정식 출범',
    bullets: [
      'Stadium이 Quick Play, Competitive와 나란히 서는 상시 모드가 됐다.',
      'Freja가 정식 합류했고 Competitive Hero Bans가 도입됐다.',
      '출시 시점에는 17명의 Stadium 영웅과 별도 랭크 시스템이 제공됐다.',
    ],
  },
  {
    date: '2026-02-10',
    label: 'Season 1 — Reign of Talon',
    title: '2026 연간 내러티브와 서브롤 체계 개시',
    bullets: [
      '연간 스토리 아크가 Season 1~6 구조로 재편됐다.',
      'Domina, Emre, Mizuki, Anran, Jetpack Cat 다섯 영웅이 동시 투입됐다.',
      '탱커, 딜러, 서포트는 서브롤 패시브 체계로 다시 정의됐다.',
      'Conquest 5주 메타 이벤트가 시작되며 Overwatch와 Talon 진영 선택 구조가 붙었다.',
    ],
  },
  {
    date: '2026-04-14',
    label: 'Season 2 — Summit',
    title: 'Sierra, Grand Mesa, Accolades, Antarctic Peninsula 리워크',
    bullets: [
      '신규 Damage 영웅 Sierra가 로스터에 추가됐다.',
      'Operation: Grand Mesa가 Sierra의 배경 서사를 직접 따라가게 만든다.',
      'Post-Match Accolades가 복귀했고 Antarctic Peninsula는 대규모 리워크를 받았다.',
    ],
  },
]

export const intelDeck = [
  {
    title: '연간 시즌 구조',
    bullets: [
      '2026년 오버워치는 `Reign of Talon` 연간 아크 아래 Season 1~6으로 전개된다.',
      '공식 Spotlight는 2027년에 다시 새 Season 1이 시작된다고 못 박았다.',
      '2026년 한 해에 신규 영웅 10명 투입 계획이 공개됐고, 2026-04-23 현재 6명이 라이브 상태다.',
    ],
  },
  {
    title: '경쟁전 보상 재설계',
    bullets: [
      '2026 경쟁 연도 시작과 함께 경쟁전 리셋이 적용됐다.',
      'Crimson Wolf 경쟁전 무기와 Diamond 이상 Doomfist 스킨이 Season 1 보상 축으로 소개됐다.',
      'Season 2부터 칭호 희귀도와 Top 500 동적 칭호가 순차 적용된다.',
    ],
  },
  {
    title: '패치 리듬',
    bullets: [
      '2026-03-12와 2026-03-31은 버그 픽스 중심 패치였다.',
      '2026-04-14는 Season 2 본편, 2026-04-17은 Sierra 핫픽스로 이어졌다.',
      '공식 2026년 5월 패치 인덱스는 현재 `No Patch Notes Found` 상태라 후속 공지 확인이 필요하다.',
    ],
  },
  {
    title: 'OWCS 2026 신호',
    bullets: [
      'OWCS 2026 프리시즌 부트캠프는 2026-02-08부터 02-15까지 서울에서 진행됐다.',
      '공식 가이드는 2월 13일~15일 생중계 토너먼트와 드롭스를 함께 안내했다.',
      '이 사이트에서 추후 이스포츠 축을 확장할 수 있는 공식 데이터 기반이 이미 있다.',
    ],
  },
]

export const subroleDeck = [
  {
    role: 'Tank',
    name: 'Bruiser',
    passive: '치명타 피해 감소, 체력 절반 이하에서 이동속도 상승',
    members: ['Mauga', 'Orisa', 'Roadhog', 'Zarya'],
  },
  {
    role: 'Tank',
    name: 'Initiator',
    passive: '공중 체류 시 소량 회복',
    members: ['D.Va', 'Doomfist', 'Hazard', 'Winston', 'Wrecking Ball'],
  },
  {
    role: 'Tank',
    name: 'Stalwart',
    passive: '넉백과 둔화 감소',
    members: ['Domina', 'Junker Queen', 'Ramattra', 'Reinhardt', 'Sigma'],
  },
  {
    role: 'Damage',
    name: 'Sharpshooter',
    passive: '치명타 적중 시 이동기 쿨다운 감소',
    members: ['Ashe', 'Cassidy', 'Hanzo', 'Sojourn', 'Widowmaker'],
  },
  {
    role: 'Damage',
    name: 'Flanker',
    passive: '생명력 팩 추가 회복',
    members: ['Anran', 'Genji', 'Reaper', 'Tracer', 'Vendetta', 'Venture'],
  },
  {
    role: 'Damage',
    name: 'Specialist',
    passive: '처치 시 잠시 재장전 속도 증가',
    members: [
      'Bastion',
      'Emre',
      'Junkrat',
      'Mei',
      'Soldier: 76',
      'Symmetra',
      'Torbjörn',
    ],
  },
  {
    role: 'Damage',
    name: 'Recon',
    passive: '피해를 준 반피 이하 적을 벽 너머로 감지',
    members: ['Echo', 'Freja', 'Pharah', 'Sierra', 'Sombra'],
  },
  {
    role: 'Support',
    name: 'Tactician',
    passive: '초과 궁극기 충전 보존',
    members: ['Ana', 'Baptiste', 'Jetpack Cat', 'Lúcio', 'Zenyatta'],
  },
  {
    role: 'Support',
    name: 'Medic',
    passive: '무기로 아군을 치유하면 자가 회복',
    members: ['Kiriko', 'Lifeweaver', 'Mercy', 'Moira'],
  },
  {
    role: 'Support',
    name: 'Survivor',
    passive: '이동기 사용 시 체력 재생 활성화',
    members: ['Brigitte', 'Illari', 'Juno', 'Mizuki', 'Wuyang'],
  },
]

export const modeDeck = [
  {
    title: 'Control',
    note: '짧고 빠른 거점전의 기준점이다. Stadium의 일부 맵 규칙도 여기서 변형된다.',
  },
  {
    title: 'Escort',
    note: '페이로드 중심 전선 관리. 오버워치의 전통적인 템포를 가장 잘 보여준다.',
  },
  {
    title: 'Hybrid',
    note: '점령 후 호위. 팀 전환 속도와 궁극기 운영이 강하게 드러나는 모드다.',
  },
  {
    title: 'Push',
    note: '로봇 기반 줄다리기. Stadium에서는 축소 거리 규칙으로 재구성된다.',
  },
  {
    title: 'Flashpoint',
    note: '연속 거점 순환 모드. 2023년 Invasion에서 코어 PvP 모드로 정착했다.',
  },
  {
    title: 'Clash',
    note:
      '2026 패치 노트 기준 Quick Play에서는 제외됐다. 현재 라이브 모드 변화 추적이 필요한 예외 항목으로 보는 편이 안전하다.',
  },
  {
    title: 'Stadium',
    note:
      '5대5 라운드 기반 별도 랭크 모드. 빌드, 현금 경제, 1인칭/3인칭 전환, 전용 영웅 풀로 오버워치의 성격을 크게 확장한다.',
  },
]

export const competitiveDeck = [
  {
    title: '경쟁전 핵심',
    bullets: [
      'Season 16(2025-04-22)부터 Hero Bans가 Competitive Play에 도입됐다.',
      'Season 1(2026-02-10)은 2026 경쟁 연도의 시작점으로, 경쟁전 리셋과 Crimson Wolf 무기 보상을 묶어서 설명했다.',
      'Season 2 소개 글 기준 Stadium 랭크는 계절 리셋 대신 decay 체계로 전환되고, 4월 패치에서는 타이틀 희귀도 반영과 6v6 전용 밸런스 조정이 이어졌다.',
    ],
  },
  {
    title: 'Stadium 핵심',
    bullets: [
      '2025년 4월 Stadium 출범 당시 best-of-7, 별도 랭크, 17영웅 스타트로 시작했다.',
      '2026 Season 2 패치 기준 Ramattra와 Lijiang Night Market이 Stadium에 추가됐다.',
      '공식 Stadium 페이지는 빌드 공유, 별도 랭크, 빠른 테스트용 unranked, 시즌 단위 메타 갱신을 핵심 특징으로 소개한다.',
    ],
  },
]

export const sourceLinks = [
  {
    label: '공식 히어로 로스터',
    href: 'https://overwatch.blizzard.com/en-us/heroes/',
    meta: '역할, 서브롤, Stadium 표시 포함',
  },
  {
    label: 'Overwatch Spotlight: The Reign of Talon Begins',
    href: 'https://overwatch.blizzard.com/en-us/news/24246206/',
    meta: '2026-02-04 공개, Season 1 구조와 서브롤 정의',
  },
  {
    label: 'Reach Heroic Heights in Reign of Talon - Season 2: Summit',
    href: 'https://overwatch.blizzard.com/en-us/news/24266793/',
    meta: '2026-04-13 공개, 현재 시즌 핵심 요약',
  },
  {
    label: '2026년 4월 라이브 패치 노트',
    href: 'https://overwatch.blizzard.com/en-us/news/patch-notes/live/2026/04',
    meta: '2026-04-14 / 2026-04-17 패치, Sierra·Ramattra·맵 리워크 확인',
  },
  {
    label: '2026년 5월 라이브 패치 인덱스',
    href: 'https://overwatch.blizzard.com/en-us/news/patch-notes/live/2026/05/',
    meta: '2026-04-23 기준 `No Patch Notes Found` 상태 확인용',
  },
  {
    label: 'A New Mode, New Hero, and New Rules In Season 16',
    href: 'https://overwatch.blizzard.com/en-us/news/24178102/',
    meta: '2025-04-21 공개, Stadium 정식 출범과 Hero Bans 도입',
  },
  {
    label: 'Director’s Take - Past, Present, and Future of Stadium',
    href: 'https://overwatch.blizzard.com/en-gb/news/24198087/director-s-take-past-present-and-future-of-stadium/',
    meta: '2025-05-01 공개, Stadium 로드맵과 운영 방향',
  },
  {
    label: 'OWCS 2026 Stage 1 / Bootcamp 안내',
    href: 'https://news.blizzard.com/ko-kr/article/24244469/owcs-2026',
    meta: '2026-02 공개, 서울 부트캠프와 중계 일정',
  },
]
