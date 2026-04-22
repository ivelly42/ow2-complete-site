export type NavItem = {
  label: string
  href: string
}

export type HeroMetric = {
  value: string
  label: string
}

export type LatestUpdate = {
  stage: string
  sourceKey: string
  title: string
  summary: string
  freshness: string
  slotNote: string
}

export type HeroRosterItem = {
  name: string
  role: string
  specialty: string
  note: string
  badge: string
  accent: string
}

export type SeasonPhase = {
  label: string
  title: string
  description: string
  status: string
}

export type ModeCard = {
  name: string
  tone: string
  focus: string
  description: string
}

export type RankedMetric = {
  label: string
  value: string
  detail: string
}

export type RankedLane = {
  label: string
  title: string
  description: string
}

export type SourceFeed = {
  name: string
  type: string
  cadence: string
  note: string
  pipe: string
  state: string
}

export type InjectionNote = {
  title: string
  description: string
}

export const navItems: NavItem[] = [
  { label: '브리핑', href: '#latest' },
  { label: '영웅', href: '#heroes' },
  { label: '시즌', href: '#seasons' },
  { label: '모드', href: '#modes' },
  { label: '경쟁전', href: '#ranked' },
  { label: '출처', href: '#sources' },
]

export const heroMetrics: HeroMetric[] = [
  { value: '06', label: '핵심 섹션' },
  { value: '08', label: '데이터 슬롯' },
  { value: '100%', label: '모바일 대응' },
]

export const latestUpdates: LatestUpdate[] = [
  {
    stage: '패치 노트 슬롯',
    sourceKey: 'official.patch.notes',
    title: '공식 밸런스 변경 요약 카드',
    summary:
      '블리자드 패치 노트 원문을 요약해 어떤 영웅과 모드가 영향을 받는지 상단 카드에서 바로 보여줄 수 있게 설계했습니다.',
    freshness: '자동 연동 대기',
    slotNote: '패치 번호, 적용 일시, 영향 영웅 배열',
  },
  {
    stage: '시즌 로드맵 슬롯',
    sourceKey: 'season.roadmap',
    title: '현재 시즌과 다음 이벤트 레일',
    summary:
      '시즌 시작, 미드패치, 한정 이벤트를 시간 순서대로 정렬해 복귀 유저도 흐름을 한 번에 파악할 수 있게 둔 자리입니다.',
    freshness: 'CMS 연결 대기',
    slotNote: '시즌명, 일정, 이벤트 태그',
  },
  {
    stage: '경쟁전 지표 슬롯',
    sourceKey: 'competitive.metrics',
    title: '랭크 메타 변화 요약 카드',
    summary:
      '티어 분포, 픽률 변화, 맵별 강세를 숫자 카드와 짧은 브리핑 문장으로 함께 노출할 수 있도록 분리했습니다.',
    freshness: '집계 파이프 대기',
    slotNote: '랭크 구간, 승률, 픽률, 기준 기간',
  },
  {
    stage: '대회 캘린더 슬롯',
    sourceKey: 'esports.calendar',
    title: '주요 경기 일정과 VOD 진입점',
    summary:
      '공식 대회 일정, 지역 구분, 다시보기 링크를 한 레일에 묶어 경쟁전 섹션과 자연스럽게 이어지도록 구성했습니다.',
    freshness: '수집 설계 대기',
    slotNote: '대회명, 지역, 시작 시각, 링크',
  },
]

export const heroRoster: HeroRosterItem[] = [
  {
    name: 'D.Va',
    role: '돌격',
    specialty: '고지대 진입과 방어 매트릭스 운영',
    note: '입문층과 상위권 모두 설명 수요가 큰 대표 영웅이라 로스터 상단에서 다루기 좋습니다.',
    badge: '공간 장악',
    accent: '#ff8d7d',
  },
  {
    name: '트레이서',
    role: '공격',
    specialty: '후방 교란과 짧은 교전 피니시',
    note: '메타 변화에 민감해서 패치 노트와 경쟁전 섹션을 연결하기에 적합한 카드입니다.',
    badge: '속도 압박',
    accent: '#ffb54a',
  },
  {
    name: '라인하르트',
    role: '돌격',
    specialty: '정면 압박과 팀 파이트 개시',
    note: '조합 이해가 필요한 영웅이라 시즌별 맵 풀과 함께 묶어 설명하기 좋습니다.',
    badge: '전면 돌파',
    accent: '#8db7ff',
  },
  {
    name: '키리코',
    role: '지원',
    specialty: '순간 해제와 교전 리셋',
    note: '생존 변수와 궁극기 영향력이 커서 경쟁전 플레이 레인과 연결되는 대표 지원 카드입니다.',
    badge: '순간 해제',
    accent: '#7be0b4',
  },
  {
    name: '소전',
    role: '공격',
    specialty: '중거리 포지션과 레일건 마무리',
    note: '명확한 피드백 포인트가 있어 입문형 가이드와 상위권 분석을 함께 수용할 수 있습니다.',
    badge: '포지션 화력',
    accent: '#ff8d34',
  },
  {
    name: '아나',
    role: '지원',
    specialty: '장거리 케어와 변수 창출',
    note: '수면총, 나노 강화제, 생존 판단처럼 설명 가치가 높은 포인트가 많아 깊은 콘텐츠 확장에 적합합니다.',
    badge: '정밀 지원',
    accent: '#b4a0ff',
  },
]

export const seasonPhases: SeasonPhase[] = [
  {
    label: '현재 시즌',
    title: '라이브 진행 상황과 핵심 체크포인트',
    description:
      '배틀 패스 진행, 주간 도전, 시즌 핵심 테마를 한 카드에서 바로 읽고 다음 행동으로 이어질 수 있게 둡니다.',
    status: '현재 운영',
  },
  {
    label: '다음 패치',
    title: '예고된 밸런스 변경과 관전 포인트',
    description:
      '개발자 코멘트, 테스트 서버 노트, 예상 영향 영웅을 한 묶음으로 배치해 다음 메타를 미리 읽을 수 있게 합니다.',
    status: '예고 슬롯',
  },
  {
    label: '한정 이벤트',
    title: '콜라보와 특별 모드 캘린더',
    description:
      '이벤트성 모드와 스킨, 한정 도전 과제를 시즌 흐름에서 분리하지 않고 레일 안에서 관리합니다.',
    status: '행사 추적',
  },
  {
    label: '복귀 유저',
    title: '이번 시즌에 달라진 점 빠른 요약',
    description:
      '오랜만에 돌아온 플레이어가 가장 먼저 알아야 하는 시스템 변화와 추천 진입 경로를 짧게 압축하는 자리입니다.',
    status: '온보딩 레일',
  },
]

export const modeCards: ModeCard[] = [
  {
    name: '빠른 대전',
    tone: '즉시 진입',
    focus: '새 영웅 적응과 맵 감각 회복',
    description:
      '복귀 유저와 신규 유저가 부담 없이 메커니즘을 익히는 구간으로 배치하고, 추천 영웅 카드와 연결합니다.',
  },
  {
    name: '경쟁전',
    tone: '집중 플레이',
    focus: '티어 상승과 메타 대응',
    description:
      '픽률, 승률, 카운터 스왑 흐름처럼 데이터 가치가 가장 큰 모드라 별도 지표 카드와 함께 묶습니다.',
  },
  {
    name: '아케이드',
    tone: '변칙 규칙',
    focus: '가벼운 재미와 실험적 플레이',
    description:
      '이벤트 주간 정보와 묶어 신규 모드 경험을 안내하기 좋은 보조 레일로 설계했습니다.',
  },
  {
    name: '이벤트 / 커스텀',
    tone: '커뮤니티 확장',
    focus: '콜라보, 특별전, 창작 모드',
    description:
      '시즌 테마와 출처 검증 레이어를 함께 보여줘야 신뢰와 재미를 동시에 확보할 수 있는 영역입니다.',
  },
]

export const rankedMetrics: RankedMetric[] = [
  {
    label: '추적 기준',
    value: '영웅 · 맵 · 조합',
    detail: '단일 지표보다 플레이 문맥 단위로 묶을 때 경쟁전 정보의 해석력이 올라갑니다.',
  },
  {
    label: '핵심 창',
    value: '패치 후 72시간',
    detail: '초기 메타 요동 구간을 별도 요약 카드로 잡아두면 최신 정보 섹션과 연결이 쉬워집니다.',
  },
  {
    label: '사용자 목표',
    value: '상승 · 복귀 · 분석',
    detail: '플레이어마다 찾는 정보가 다르기 때문에 레인별 진입점을 분리해 두었습니다.',
  },
]

export const rankedLanes: RankedLane[] = [
  {
    label: '입문 레인',
    title: '브론즈부터 골드까지 빠른 복구',
    description:
      '생존율, 궁 타이밍, 포지션 기본기처럼 재현 가능한 피드백을 우선 노출하는 구조입니다.',
  },
  {
    label: '상위권 레인',
    title: '조합 전환과 카운터 스왑 판단',
    description:
      '맵별 강세, 메타 핵심 영웅, 고지대 운영처럼 즉시 승부에 영향을 주는 정보에 집중합니다.',
  },
  {
    label: '팀 플레이 레인',
    title: '듀오와 스크림 관점의 합 맞추기',
    description:
      '콜아웃, 역할 분담, 궁극기 순서 같은 팀 단위 정보가 따로 보이도록 확장 가능한 행입니다.',
  },
]

export const sourceFeeds: SourceFeed[] = [
  {
    name: '블리자드 공식 패치 노트',
    type: '공식',
    cadence: '패치 발생 시',
    note: '원문 링크와 요약을 함께 저장해 카드형 최신 정보 섹션으로 바로 보낼 수 있습니다.',
    pipe: '요약 + 태깅',
    state: '연결 대기',
  },
  {
    name: '공식 블로그 / 시즌 공지',
    type: '공식',
    cadence: '주간',
    note: '시즌 구조, 이벤트 일정, 개발자 메시지를 시즌 레일과 히어로 섹션으로 다시 배분하는 기본 피드입니다.',
    pipe: 'CMS 매핑',
    state: '연결 대기',
  },
  {
    name: '대회 일정 / 다시보기',
    type: 'e스포츠',
    cadence: '수시',
    note: '주요 경기 일정과 VOD 링크를 경쟁전 섹션 하위로 연결할 수 있게 분리된 소스 카드입니다.',
    pipe: '캘린더 수집',
    state: '설계 필요',
  },
  {
    name: '커뮤니티 메타 분석',
    type: '보조',
    cadence: '일간',
    note: '공식 정보가 아닐 때는 검증 라벨을 반드시 붙이는 전제를 두고 보조 인사이트만 노출합니다.',
    pipe: '검증 라벨링',
    state: '검증 파이프 필요',
  },
]

export const injectionNotes: InjectionNote[] = [
  {
    title: 'latestUpdates[]',
    description:
      '최신 카드 레일의 직접 주입 지점입니다. API 응답을 카드 형태로 변환하는 매퍼 함수만 추가하면 바로 교체됩니다.',
  },
  {
    title: 'heroRoster[]',
    description:
      '역할군, 영웅 상세 라우트, 카드 색상 기준이 이미 잡혀 있어 상세 페이지 확장 시에도 구조를 다시 뜯을 필요가 없습니다.',
  },
  {
    title: 'sourceFeeds[]',
    description:
      '출처별 검증 상태와 수집 방식을 한 번에 관리하는 지점입니다. 공식과 비공식 레이어를 분리하기 쉽습니다.',
  },
  {
    title: 'seasonPhases[] / rankedMetrics[]',
    description:
      '시즌 캘린더와 경쟁전 지표는 숫자 카드, 타임라인, 차트 컴포넌트로 확장하기 좋은 최소 데이터 형태로 맞춰 두었습니다.',
  },
]
