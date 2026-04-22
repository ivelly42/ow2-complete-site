export type HeroRole = 'tank' | 'damage' | 'support'
export type HeroSubrole =
  | 'bruiser'
  | 'initiator'
  | 'stalwart'
  | 'sharpshooter'
  | 'flanker'
  | 'specialist'
  | 'recon'
  | 'tactician'
  | 'medic'
  | 'survivor'
export type RoleFilter = 'all' | HeroRole
export type VerificationState = '검증 완료' | '워치리스트' | '출처 충돌'
export type EntityType = 'hero' | 'season' | 'patch' | 'mode' | 'map' | 'source'
export type EntityId = `${EntityType}:${string}`
export type SourceLinkId =
  | 'hero-roster'
  | 'season-1-spotlight'
  | 'season-2-summit'
  | 'patch-2026-04-live'
  | 'patch-2026-05-index'
  | 'season-16-launch'
  | 'stadium-directors-take'
  | 'owcs-2026-stage-1'
export type SectionMetaKey = 'heroes' | 'seasons' | 'patches' | 'modes' | 'maps' | 'sources'
export type EntityDetailMeta = {
  entityId: EntityId
  title: string
  entityType: EntityType
  summary: string
  lastVerifiedAt: string
  nextCheck: string
  sourceIds: SourceLinkId[]
  verificationState: VerificationState
  verificationNote: string
  relatedEntityIds: EntityId[]
}

export const LAST_VERIFIED_AT = '2026-04-23'

export type SourceLink = {
  id: SourceLinkId
  label: string
  href: string
  meta: string
}

export type HeroIntel = {
  label: string
  value: string
}

export type HeroSeasonNote = {
  label: string
  season: string
  note: string
}

export type Hero = {
  slug: string
  name: string
  role: HeroRole
  subrole: HeroSubrole
  stadium: boolean
  overview: string
  playstyle: string
  seasonNote: HeroSeasonNote
  intel: HeroIntel[]
  watchpoints: string[]
  detailMeta: EntityDetailMeta
}

type HeroSeed = Pick<Hero, 'name' | 'role' | 'subrole' | 'stadium'>
type HeroSourceKey = 'roster' | 'spotlight' | 'summit' | 'aprilPatch' | 'season16'
type HeroDetailOverride = {
  overview?: string
  playstyle?: string
  seasonNote?: HeroSeasonNote
  intel?: HeroIntel[]
  watchpoints?: string[]
  sourceKeys?: HeroSourceKey[]
}

export const heroRoleLabels: Record<HeroRole, string> = {
  tank: '탱커',
  damage: '딜러',
  support: '서포트',
}

export const heroSubroleMeta: Record<
  HeroSubrole,
  {
    label: string
    role: string
    passive: string
    focus: string
    operatingNote: string
  }
> = {
  bruiser: {
    label: 'Bruiser',
    role: 'Tank',
    passive: '치명타 피해 감소, 체력 절반 이하에서 이동속도 상승',
    focus: '정면 유지와 근접 압박',
    operatingNote: '길게 버티며 전면 체력 교환을 끌고 갈 때 가치가 커진다.',
  },
  initiator: {
    label: 'Initiator',
    role: 'Tank',
    passive: '공중 체류 시 소량 회복',
    focus: '개시각 확보와 고지대 진입',
    operatingNote: '첫 진입 타이밍과 이탈선 관리가 교전 전체 리듬을 좌우한다.',
  },
  stalwart: {
    label: 'Stalwart',
    role: 'Tank',
    passive: '넉백과 둔화 감소',
    focus: '전선 고정과 압박 유지',
    operatingNote: '교전 축을 고정한 채 팀이 따라붙을 시간을 벌어주는 역할이 크다.',
  },
  sharpshooter: {
    label: 'Sharpshooter',
    role: 'Damage',
    passive: '치명타 적중 시 이동기 쿨다운 감소',
    focus: '중장거리 픽 메이킹',
    operatingNote: '라인전 각도와 마무리 타이밍이 곧 킬 관여율로 연결된다.',
  },
  flanker: {
    label: 'Flanker',
    role: 'Damage',
    passive: '생명력 팩 추가 회복',
    focus: '후방 교란과 측면 개입',
    operatingNote: '짧은 진입과 빠른 복귀를 반복하며 전장을 분산시키는 유형이다.',
  },
  specialist: {
    label: 'Specialist',
    role: 'Damage',
    passive: '처치 시 잠시 재장전 속도 증가',
    focus: '지역 장악과 변수 생성',
    operatingNote: '교전 지점을 설계하거나 오브젝트 주변 강제전을 만드는 데 강하다.',
  },
  recon: {
    label: 'Recon',
    role: 'Damage',
    passive: '피해를 준 반피 이하 적을 벽 너머로 감지',
    focus: '정찰 압박과 추격 마무리',
    operatingNote: '시야 장악과 마감 추적 능력이 팀 콜 효율을 끌어올린다.',
  },
  tactician: {
    label: 'Tactician',
    role: 'Support',
    passive: '초과 궁극기 충전 보존',
    focus: '교전 설계와 유틸 관리',
    operatingNote: '궁극기 사이클과 팀 전체 교전 구조를 조율할 때 가치가 커진다.',
  },
  medic: {
    label: 'Medic',
    role: 'Support',
    passive: '무기로 아군을 치유하면 자가 회복',
    focus: '지속 치유와 리셋 지원',
    operatingNote: '아군 유지력과 교전 리셋 속도를 함께 끌어올리는 역할이다.',
  },
  survivor: {
    label: 'Survivor',
    role: 'Support',
    passive: '이동기 사용 시 체력 재생 활성화',
    focus: '생존 유지와 템포 회복',
    operatingNote: '자기 생존을 기반으로 긴 교전에서 반복 개입하는 데 특화돼 있다.',
  },
}

const heroRosterSource: SourceLink = {
  id: 'hero-roster',
  label: '공식 히어로 로스터',
  href: 'https://overwatch.blizzard.com/en-us/heroes/',
  meta: '역할, 서브롤, Stadium 표시 포함',
}

const spotlightSource: SourceLink = {
  id: 'season-1-spotlight',
  label: 'Overwatch Spotlight: The Reign of Talon Begins',
  href: 'https://overwatch.blizzard.com/en-us/news/24246206/',
  meta: '2026-02-04 공개, Season 1 구조와 서브롤 정의',
}

const summitSource: SourceLink = {
  id: 'season-2-summit',
  label: 'Reach Heroic Heights in Reign of Talon - Season 2: Summit',
  href: 'https://overwatch.blizzard.com/en-us/news/24266793/',
  meta: '2026-04-13 공개, 현재 시즌 핵심 요약',
}

const aprilPatchSource: SourceLink = {
  id: 'patch-2026-04-live',
  label: '2026년 4월 라이브 패치 노트',
  href: 'https://overwatch.blizzard.com/en-us/news/patch-notes/live/2026/04',
  meta: '2026-04-14 / 2026-04-17 패치, Sierra·Ramattra·맵 리워크 확인',
}

const mayPatchSource: SourceLink = {
  id: 'patch-2026-05-index',
  label: '2026년 5월 라이브 패치 인덱스',
  href: 'https://overwatch.blizzard.com/en-us/news/patch-notes/live/2026/05/',
  meta: '2026-04-23 기준 `No Patch Notes Found` 상태 확인용',
}

const season16Source: SourceLink = {
  id: 'season-16-launch',
  label: 'A New Mode, New Hero, and New Rules In Season 16',
  href: 'https://overwatch.blizzard.com/en-us/news/24178102/',
  meta: '2025-04-21 공개, Stadium 정식 출범과 Hero Bans 도입',
}

const stadiumTakeSource: SourceLink = {
  id: 'stadium-directors-take',
  label: 'Director’s Take - Past, Present, and Future of Stadium',
  href: 'https://overwatch.blizzard.com/en-gb/news/24198087/director-s-take-past-present-and-future-of-stadium/',
  meta: '2025-05-01 공개, Stadium 로드맵과 운영 방향',
}

const owcsSource: SourceLink = {
  id: 'owcs-2026-stage-1',
  label: 'OWCS 2026 Stage 1 / Bootcamp 안내',
  href: 'https://news.blizzard.com/ko-kr/article/24244469/owcs-2026',
  meta: '2026-02 공개, 서울 부트캠프와 중계 일정',
}

export const sourceLinks = [
  heroRosterSource,
  spotlightSource,
  summitSource,
  aprilPatchSource,
  mayPatchSource,
  season16Source,
  stadiumTakeSource,
  owcsSource,
]

const sourceLinksById: Record<SourceLinkId, SourceLink> = {
  'hero-roster': heroRosterSource,
  'season-1-spotlight': spotlightSource,
  'season-2-summit': summitSource,
  'patch-2026-04-live': aprilPatchSource,
  'patch-2026-05-index': mayPatchSource,
  'season-16-launch': season16Source,
  'stadium-directors-take': stadiumTakeSource,
  'owcs-2026-stage-1': owcsSource,
}

export const resolveSourceLinks = (sourceIds: SourceLinkId[]) =>
  sourceIds.map((sourceId) => sourceLinksById[sourceId])

const sourceLinkMap: Record<HeroSourceKey, SourceLink> = {
  roster: heroRosterSource,
  spotlight: spotlightSource,
  summit: summitSource,
  aprilPatch: aprilPatchSource,
  season16: season16Source,
}

const makeEntityId = <T extends EntityType>(entityType: T, slug: string): `${T}:${string}` =>
  `${entityType}:${slug}`

const heroIndexEntityId = makeEntityId('hero', 'index')
const seasonIndexEntityId = makeEntityId('season', 'index')
const patchIndexEntityId = makeEntityId('patch', 'index')
const modeHubEntityId = makeEntityId('mode', 'hub')
const mapIndexEntityId = makeEntityId('map', 'index')
const sourceHubEntityId = makeEntityId('source', 'hub')
const allSourceIds = sourceLinks.map((source) => source.id) as SourceLinkId[]

export const sectionDetailMeta: Record<SectionMetaKey, EntityDetailMeta> = {
  heroes: {
    entityId: heroIndexEntityId,
    title: '영웅 인덱스',
    entityType: 'hero',
    summary: '역할 필터, Stadium 상태, 개별 영웅 상세로 바로 들어간다.',
    lastVerifiedAt: LAST_VERIFIED_AT,
    nextCheck: '다음 공식 로스터 또는 패치 노트 공개 시 신규 영웅과 Stadium 표기 변경을 재확인한다.',
    sourceIds: ['hero-roster', 'season-1-spotlight', 'season-2-summit', 'patch-2026-04-live'],
    verificationState: '검증 완료',
    verificationNote: '영웅 축은 공식 로스터와 시즌/패치 문서로 상세 진입선을 고정했다.',
    relatedEntityIds: [seasonIndexEntityId, modeHubEntityId, sourceHubEntityId],
  },
  seasons: {
    entityId: seasonIndexEntityId,
    title: '시즌 인덱스',
    entityType: 'season',
    summary: '연도 흐름과 기준 시즌을 절대 날짜 순서로 추적한다.',
    lastVerifiedAt: LAST_VERIFIED_AT,
    nextCheck: '다음 시즌 기사 또는 이벤트 종료 공지가 나오면 시즌 타임라인과 충돌 일정을 함께 갱신한다.',
    sourceIds: ['season-16-launch', 'season-1-spotlight', 'season-2-summit', 'patch-2026-04-live'],
    verificationState: '워치리스트',
    verificationNote: '이벤트 종료일 충돌과 다음 패치 대기 상태가 시즌 축에도 연결된다.',
    relatedEntityIds: [patchIndexEntityId, modeHubEntityId, sourceHubEntityId],
  },
  patches: {
    entityId: patchIndexEntityId,
    title: '패치 인덱스',
    entityType: 'patch',
    summary: '시즌 본편, 핫픽스, 다음 패치 대기 상태를 절대 날짜로 묶는다.',
    lastVerifiedAt: LAST_VERIFIED_AT,
    nextCheck: '5월 패치 노트가 열리면 본편, 핫픽스, 대기 상태 엔터티를 함께 갱신한다.',
    sourceIds: ['patch-2026-04-live', 'patch-2026-05-index', 'season-2-summit'],
    verificationState: '출처 충돌',
    verificationNote: 'Grand Mesa 종료일 충돌과 5월 패치 대기 상태를 함께 노출한다.',
    relatedEntityIds: [seasonIndexEntityId, heroIndexEntityId, sourceHubEntityId],
  },
  modes: {
    entityId: modeHubEntityId,
    title: '모드 허브',
    entityType: 'mode',
    summary: '코어 PvP와 Stadium 규칙을 같은 카드 밀도로 섞지 않고 분리해서 읽는다.',
    lastVerifiedAt: LAST_VERIFIED_AT,
    nextCheck: '다음 시즌 또는 패치에서 경쟁전 보상 구조와 Stadium 규칙 변동을 함께 재확인한다.',
    sourceIds: ['season-16-launch', 'season-2-summit', 'patch-2026-04-live', 'stadium-directors-take'],
    verificationState: '워치리스트',
    verificationNote: '모드 규칙은 시즌과 패치에 따라 계속 바뀌므로 후속 패치 추적이 필요하다.',
    relatedEntityIds: [heroIndexEntityId, mapIndexEntityId, seasonIndexEntityId],
  },
  maps: {
    entityId: mapIndexEntityId,
    title: '맵 인덱스',
    entityType: 'map',
    summary: '모드 소속, 리워크 여부, 연결 패치를 먼저 고정한다.',
    lastVerifiedAt: LAST_VERIFIED_AT,
    nextCheck: '다음 패치 노트에서 리워크 여부와 Stadium 편입 맵 변경을 재확인한다.',
    sourceIds: ['season-2-summit', 'patch-2026-04-live'],
    verificationState: '워치리스트',
    verificationNote: '맵 데이터 모델은 1차 골격만 통합했고, 세부 아카이브는 후속 확장이 필요하다.',
    relatedEntityIds: [modeHubEntityId, patchIndexEntityId, sourceHubEntityId],
  },
  sources: {
    entityId: sourceHubEntityId,
    title: '출처 허브',
    entityType: 'source',
    summary: '기준 문서, 충돌 항목, 다음 확인 대상을 한곳에서 본다.',
    lastVerifiedAt: LAST_VERIFIED_AT,
    nextCheck: '새 공식 문서가 게시되면 기준 문서와 충돌 메모를 같은 날 갱신한다.',
    sourceIds: allSourceIds,
    verificationState: '출처 충돌',
    verificationNote: '출처 허브는 현재 기준 문서, 충돌 항목, 다음 확인 대상을 함께 보여준다.',
    relatedEntityIds: [patchIndexEntityId, seasonIndexEntityId, heroIndexEntityId],
  },
}

export const sourceConflictSummary = {
  title: 'Grand Mesa 이벤트 종료일 표기는 공식 문서끼리 다르다.',
  lead:
    'Season 2 소개 글은 2026년 5월 4일, 2026년 4월 패치 노트는 2026년 5월 12일로 표기한다.',
  note: '이 이슈 때문에 홈과 패치 축은 `출처 충돌` 상태로 표시한다.',
}

export type NarrativeDetailSection = 'seasons' | 'patches' | 'modes' | 'maps'

export type DetailFact = {
  label: string
  value: string
}

export type SectionDetailPage = {
  slug: string
  section: NarrativeDetailSection
  eyebrow: string
  kicker: string
  title: string
  lead: string
  summary: string
  facts: DetailFact[]
  highlights: string[]
  watchpoints: string[]
  detailMeta: EntityDetailMeta
}

export type SourcePolicyCard = {
  title: string
  bullets: string[]
}

export type HomeWatchlistCard = {
  title: string
  bullets: string[]
  verificationState: VerificationState
  nextCheck: string
  sourceIds: SourceLinkId[]
  relatedEntityIds: EntityId[]
}

const buildNarrativeDetailMeta = ({
  section,
  slug,
  title,
  summary,
  nextCheck,
  sourceIds,
  verificationState,
  verificationNote,
  relatedEntityIds,
}: {
  section: NarrativeDetailSection
  slug: string
  title: string
  summary: string
  nextCheck: string
  sourceIds: SourceLinkId[]
  verificationState: VerificationState
  verificationNote: string
  relatedEntityIds: EntityId[]
}): EntityDetailMeta => ({
  entityId: makeEntityId(sectionDetailMeta[section].entityType, slug),
  title,
  entityType: sectionDetailMeta[section].entityType,
  summary,
  lastVerifiedAt: LAST_VERIFIED_AT,
  nextCheck,
  sourceIds,
  verificationState,
  verificationNote,
  relatedEntityIds,
})

export const seasonDetailPages: SectionDetailPage[] = [
  {
    slug: '2025-season-16',
    section: 'seasons',
    eyebrow: '시즌 상세',
    kicker: '2025-04-22 / Season 16',
    title: 'Season 16',
    lead: 'Stadium이 Quick Play, Competitive와 동급 축으로 올라선 출범 시즌이다.',
    summary:
      'Season 16은 현재 오버워치2가 단순 코어 PvP를 넘어 별도 경제와 랭크 체계를 가진 Stadium 시대로 들어섰다는 사실을 고정해 주는 기준 문서다.',
    facts: [
      { label: '출범일', value: '2025-04-22' },
      { label: '핵심 변화', value: 'Stadium 정식 출범' },
      { label: '연결 모드', value: 'Competitive + Stadium' },
    ],
    highlights: [
      'Stadium이 상시 5대5 라운드 모드로 열리며 게임의 세 번째 기둥이 됐다.',
      'Freja 정식 합류와 Hero Bans 도입이 경쟁전 해석 방식까지 바꿨다.',
      '이후 시즌 상세와 패치 상세를 읽을 때도 Stadium 전용 변화가 별도 축이어야 한다는 기준을 남겼다.',
    ],
    watchpoints: [
      '모드 상세에서는 Stadium을 코어 PvP와 섞지 않고 따로 설명해야 한다.',
      '경쟁전 규칙 변화는 Season 1, Season 2 문서와 함께 읽어야 현재 기준선이 완성된다.',
      '기본 출처는 Season 16 런치 기사 하나지만 후속 운영 문서와 연결 가치가 높다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'seasons',
      slug: '2025-season-16',
      title: 'Season 16',
      summary: 'Stadium 출범과 Competitive Hero Bans 도입을 고정하는 시즌 문서다.',
      nextCheck: '다음 경쟁전/모드 업데이트에서 Stadium 출범 기준선과 Hero Bans 후속 변경을 재확인한다.',
      sourceIds: ['season-16-launch'],
      verificationState: '검증 완료',
      verificationNote: 'Season 16은 Stadium 출범과 경쟁전 구조 변화를 설명하는 안정적인 출발점이다.',
      relatedEntityIds: [
        makeEntityId('season', '2026-season-1-reign-of-talon'),
        makeEntityId('mode', 'stadium'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: '2026-season-1-reign-of-talon',
    section: 'seasons',
    eyebrow: '시즌 상세',
    kicker: '2026-02-10 / Season 1 — Reign of Talon',
    title: 'Season 1 — Reign of Talon',
    lead: '2026 연간 시즌 아크와 서브롤 체계를 본격적으로 연 시즌이다.',
    summary:
      'Season 1은 Domina, Emre, Mizuki, Anran, Jetpack Cat까지 다섯 영웅을 한 번에 투입하고 시즌 1~6 구조를 선언하면서 현재 로스터 해석 기준을 바꾼 출발점이다.',
    facts: [
      { label: '시작일', value: '2026-02-10' },
      { label: '신규 영웅', value: '5명 라이브' },
      { label: '구조 변화', value: '연간 시즌 아크' },
    ],
    highlights: [
      '연간 스토리 아크가 Reign of Talon 아래 Season 1~6 구조로 재편됐다.',
      '탱커, 딜러, 서포트는 서브롤 패시브 체계로 다시 설명되기 시작했다.',
      '신규 로스터가 한 번에 유입되며 영웅 상세를 개별 문서로 분리할 필요가 커졌다.',
    ],
    watchpoints: [
      'Jetpack Cat처럼 이후 시즌 문서와 같이 읽어야 문맥이 완성되는 영웅이 있다.',
      '경쟁전 보상과 이벤트 일정은 이후 패치 문서와 연결해야 운영 맥락이 보인다.',
      '이 시즌의 구조 선언은 Season 2와 이어 읽을 때 실제 라이브 적용 범위가 더 선명해진다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'seasons',
      slug: '2026-season-1-reign-of-talon',
      title: 'Season 1 — Reign of Talon',
      summary: '2026 연간 시즌 구조와 서브롤 체계를 연 기준 시즌 문서다.',
      nextCheck: '다음 시즌 기사에서 Season 1 발표군의 후속 배치와 연간 아크 변동을 재확인한다.',
      sourceIds: ['season-1-spotlight'],
      verificationState: '검증 완료',
      verificationNote: 'Season 1 Spotlight는 2026 시즌 구조를 설명하는 핵심 기준 문서다.',
      relatedEntityIds: [
        makeEntityId('season', '2026-season-2-summit'),
        makeEntityId('hero', 'jetpack-cat'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: '2026-season-2-summit',
    section: 'seasons',
    eyebrow: '시즌 상세',
    kicker: '2026-04-14 / Season 2: Summit',
    title: 'Season 2: Summit',
    lead: 'Sierra, Grand Mesa, Antarctic Peninsula 리워크가 한 번에 붙은 현재 기준 시즌이다.',
    summary:
      'Season 2: Summit은 2026-04-23 현재 사이트 전체의 기준선이다. 신규 영웅, 이벤트 전장, Post-Match Accolades 복귀, Stadium 랭크 규칙 변화가 같은 문서에 묶여 있다.',
    facts: [
      { label: '기준일', value: '2026-04-14' },
      { label: '신규 영웅', value: 'Sierra' },
      { label: '검증 상태', value: '워치리스트' },
    ],
    highlights: [
      'Sierra 합류와 Operation: Grand Mesa가 시즌의 대표 진입점 역할을 한다.',
      'Antarctic Peninsula 리워크와 Post-Match Accolades 복귀가 코어 플레이 체감을 바꿨다.',
      'Stadium 랭크는 시즌 리셋 대신 decay 방식으로 이동하며 모드 문서 분리가 더 중요해졌다.',
    ],
    watchpoints: [
      'Grand Mesa 종료일은 시즌 소개 글과 4월 패치 노트 사이에서 충돌한다.',
      'Sierra 후속 보정은 2026-04-17 핫픽스 문서까지 이어서 봐야 한다.',
      '이 시즌 상세는 패치, 맵, 영웅 상세를 함께 묶는 현재 허브 역할을 한다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'seasons',
      slug: '2026-season-2-summit',
      title: 'Season 2: Summit',
      summary: 'Sierra, Grand Mesa, Stadium 규칙 변화를 한 번에 묶는 현재 기준 시즌 문서다.',
      nextCheck: 'Grand Mesa 종료일과 Sierra 후속 조정은 다음 패치 노트 게시 시 즉시 재확인한다.',
      sourceIds: ['season-2-summit', 'patch-2026-04-live'],
      verificationState: '워치리스트',
      verificationNote: '시즌 문맥은 안정적이지만 이벤트 일정과 후속 핫픽스가 계속 붙는 상태다.',
      relatedEntityIds: [
        makeEntityId('patch', '2026-04-17'),
        makeEntityId('map', 'grand-mesa'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
]

export const patchDetailPages: SectionDetailPage[] = [
  {
    slug: '2026-04-17',
    section: 'patches',
    eyebrow: '패치 상세',
    kicker: '2026-04-17 / 핫픽스',
    title: 'Sierra 후속 보정과 라이브 안정화',
    lead: '시즌 본편 직후 체감 차이를 줄이기 위해 붙은 후속 기준 문서다.',
    summary:
      '2026-04-17 핫픽스는 Sierra 합류 직후 생긴 체감과 운영 안정화 이슈를 다루는 보정 문서다. 시즌 상세만으로는 부족한 최신성 신호를 보완한다.',
    facts: [
      { label: '패치일', value: '2026-04-17' },
      { label: '문서 유형', value: '핫픽스' },
      { label: '영향 축', value: 'Sierra / 라이브 안정화' },
    ],
    highlights: [
      'Sierra 합류 직후의 체감 차이를 줄이기 위한 후속 조정이 이어졌다.',
      '시즌 본편과 분리된 날짜 문서라 절대 날짜 추적 가치가 높다.',
      '영웅 상세와 패치 아카이브가 서로 연결돼야 하는 이유를 가장 잘 보여준다.',
    ],
    watchpoints: [
      '후속 핫픽스는 짧은 문서로 끝나는 경우가 많아 시즌 기사보다 누락되기 쉽다.',
      '신규 영웅 상세는 이 문서를 기준으로 밸런스 설명을 조정해야 한다.',
      '다음 월간 패치가 열리면 이 문서의 영향 범위를 다시 검증해야 한다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'patches',
      slug: '2026-04-17',
      title: 'Sierra 후속 보정과 라이브 안정화',
      summary: 'Season 2 직후 Sierra 체감과 라이브 안정화를 보정한 핫픽스 문서다.',
      nextCheck: '다음 월간 패치에서 이 핫픽스 조정이 유지되는지 재확인한다.',
      sourceIds: ['patch-2026-04-live'],
      verificationState: '검증 완료',
      verificationNote: '핫픽스 자체는 명확하지만 이후 월간 패치와 함께 다시 읽어야 한다.',
      relatedEntityIds: [
        makeEntityId('patch', '2026-04-14'),
        makeEntityId('hero', 'sierra'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: '2026-04-14',
    section: 'patches',
    eyebrow: '패치 상세',
    kicker: '2026-04-14 / 시즌 본편',
    title: 'Season 2: Summit 라이브 패치',
    lead: '현재 사이트 전체 기준선을 가장 직접적으로 고정하는 본편 패치 문서다.',
    summary:
      '2026-04-14 라이브 패치는 Sierra, Grand Mesa, Antarctic Peninsula 리워크, Ramattra Stadium 합류를 한 문서에 담고 있어 시즌/모드/맵 상세를 가로지르는 핵심 기준선 역할을 한다.',
    facts: [
      { label: '패치일', value: '2026-04-14' },
      { label: '문서 유형', value: '시즌 본편' },
      { label: '영향 축', value: '영웅 / 맵 / Stadium' },
    ],
    highlights: [
      'Sierra 추가, Grand Mesa 이벤트, Antarctic Peninsula 리워크가 한 번에 반영됐다.',
      'Ramattra의 Stadium 합류까지 포함돼 코어와 Stadium 축이 동시에 움직였다.',
      '시즌 소개 글과 같이 보면 현재 라이브 기준선이 가장 안정적으로 잡힌다.',
    ],
    watchpoints: [
      'Grand Mesa 종료일은 같은 시즌 소개 글과 충돌하므로 일정 문구를 그대로 복사하면 안 된다.',
      '이 문서는 시즌 상세와 맵 상세의 상위 기준 문서로 계속 재사용된다.',
      '후속 핫픽스와 5월 패치 인덱스를 같이 추적해야 최신성 누락을 막을 수 있다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'patches',
      slug: '2026-04-14',
      title: 'Season 2: Summit 라이브 패치',
      summary: '영웅, 맵, Stadium 변화를 한 번에 고정하는 현재 핵심 패치 문서다.',
      nextCheck: '5월 패치 노트 공개 시 Grand Mesa 일정 표기와 Stadium 변경 항목을 다시 검증한다.',
      sourceIds: ['patch-2026-04-live', 'season-2-summit'],
      verificationState: '출처 충돌',
      verificationNote: '핵심 변화는 안정적이지만 이벤트 종료일 표기는 시즌 소개 글과 충돌한다.',
      relatedEntityIds: [
        makeEntityId('patch', '2026-04-17'),
        makeEntityId('map', 'antarctic-peninsula'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: '2026-05',
    section: 'patches',
    eyebrow: '패치 상세',
    kicker: '2026-05 / 다음 확인',
    title: '5월 패치 인덱스 대기 상태',
    lead: '아직 문서가 열리지 않았다는 사실 자체를 워치리스트로 관리하는 페이지다.',
    summary:
      '2026-04-23 기준 공식 5월 패치 인덱스는 `No Patch Notes Found` 상태다. 이 문서는 아직 없는 패치를 기다리는 운영 체크리스트 역할을 한다.',
    facts: [
      { label: '확인 시점', value: '2026-04-23' },
      { label: '현재 상태', value: 'No Patch Notes Found' },
      { label: '후속 작업', value: '영웅 / 맵 / 이벤트 재검증' },
    ],
    highlights: [
      '다음 패치가 열리면 영웅 밸런스, 맵 풀, 이벤트 종료 텍스트를 동시에 갱신해야 한다.',
      '없다는 사실을 숨기지 않고 기록해 두면 운영 누락을 줄일 수 있다.',
      'v2 패치 축은 실제 문서뿐 아니라 대기 상태까지 아카이브로 다룬다.',
    ],
    watchpoints: [
      '이 페이지는 정식 패치 문서가 열리는 즉시 실제 상세로 교체될 대상이다.',
      '변경 가능성이 높은 시즌 이벤트와 경쟁전 규칙을 우선 재검증해야 한다.',
      '출처 허브와 패치 인덱스의 검증 상태를 함께 갱신하는 편이 안전하다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'patches',
      slug: '2026-05',
      title: '5월 패치 인덱스 대기 상태',
      summary: '공식 5월 패치 문서가 아직 열리지 않았음을 기록하는 운영 워치리스트다.',
      nextCheck: '공식 5월 패치 문서가 열리는 즉시 실제 패치 엔터티로 교체하고 관련 상세를 재연결한다.',
      sourceIds: ['patch-2026-05-index'],
      verificationState: '워치리스트',
      verificationNote: '아직 문서가 없으므로 다음 공식 패치 노트 공개를 기다리는 상태다.',
      relatedEntityIds: [
        makeEntityId('patch', '2026-04-14'),
        makeEntityId('season', '2026-season-2-summit'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
]

export const modeDetailPages: SectionDetailPage[] = [
  {
    slug: 'core-pvp',
    section: 'modes',
    eyebrow: '모드 상세',
    kicker: '코어 규칙 축',
    title: 'Core PvP',
    lead: 'Control, Escort, Hybrid, Push, Flashpoint가 묶이는 기본 전장 규칙 축이다.',
    summary:
      'Core PvP는 오버워치의 기본 라운드와 오브젝트 템포를 설명하는 영역이다. Stadium과 경쟁전 설명을 분리할 때도 이 축이 기준점이 된다.',
    facts: [
      { label: '핵심 역할', value: '기본 전투 문법' },
      { label: '대표 모드', value: 'Control / Escort / Hybrid' },
      { label: '운영 포인트', value: '오브젝트 템포' },
    ],
    highlights: [
      '짧고 빠른 Control, 전통적인 Escort, 전환이 강한 Hybrid가 기본 리듬을 만든다.',
      'Push와 Flashpoint는 맵 동선 이해가 중요해 맵 상세와 같이 읽을 가치가 크다.',
      'Clash처럼 라이브 상태가 흔들리는 예외 항목은 코어 축 안에서도 별도 추적이 필요하다.',
    ],
    watchpoints: [
      '코어 PvP는 Stadium과 같은 카드 밀도로 섞으면 규칙 이해가 흐려진다.',
      '맵 상세에서는 먼저 어느 코어 모드에 속하는지부터 고정해야 한다.',
      '패치 문서가 바뀌면 Quick Play/Competitive 모드 풀 차이도 함께 확인해야 한다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'modes',
      slug: 'core-pvp',
      title: 'Core PvP',
      summary: '오버워치 기본 전장 문법을 설명하는 코어 모드 상세다.',
      nextCheck: '다음 시즌 또는 패치에서 코어 맵 풀과 기본 모드 구성 변동을 재확인한다.',
      sourceIds: ['season-2-summit', 'patch-2026-04-live'],
      verificationState: '검증 완료',
      verificationNote: '코어 PvP 구조는 현재 시즌과 패치 문서에서 안정적으로 확인된다.',
      relatedEntityIds: [
        makeEntityId('mode', 'competitive'),
        makeEntityId('map', 'antarctic-peninsula'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: 'competitive',
    section: 'modes',
    eyebrow: '모드 상세',
    kicker: '랭크 운영 축',
    title: 'Competitive',
    lead: '경쟁전은 시즌 보상, 밴 규칙, 리셋 정책을 읽는 별도 운영 문서로 다뤄야 한다.',
    summary:
      'Competitive 문서는 코어 PvP와 같은 전투 규칙보다 랭크 운영 방식에 집중한다. Hero Bans, 시즌 리셋, 칭호 희귀도 같은 시스템 변화가 핵심이다.',
    facts: [
      { label: '핵심 변화', value: 'Hero Bans' },
      { label: '연도 기준', value: '2026 Competitive' },
      { label: '연결 시즌', value: 'Season 1 / Season 2' },
    ],
    highlights: [
      'Season 16부터 Hero Bans가 Competitive Play에 도입됐다.',
      'Season 1은 2026 경쟁 연도의 시작점으로 리셋과 보상 구조를 설명한다.',
      'Season 2에서는 칭호 희귀도와 Top 500 동적 칭호가 순차 적용되며 운영 감각이 바뀐다.',
    ],
    watchpoints: [
      '경쟁전 설명은 코어 PvP 룰 설명과 섞지 않고 보상/리셋/랭크 체계 중심으로 보여야 한다.',
      '시즌이 넘어갈 때마다 보상 구조와 맵 풀이 함께 바뀔 수 있으니 패치 축 연결이 중요하다.',
      'Stadium 랭크와 Competitive 랭크를 같은 문서에 묶지 않는 것이 사용자 혼선을 줄인다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'modes',
      slug: 'competitive',
      title: 'Competitive',
      summary: 'Hero Bans, 리셋, 보상 구조를 추적하는 경쟁전 운영 문서다.',
      nextCheck: '다음 시즌 시작 또는 5월 패치 노트에서 보상 구조와 랭크 규칙 변동을 재확인한다.',
      sourceIds: ['season-16-launch', 'season-1-spotlight', 'season-2-summit'],
      verificationState: '워치리스트',
      verificationNote: '경쟁전 규칙은 시즌마다 계속 바뀌므로 후속 패치 추적이 필요하다.',
      relatedEntityIds: [
        makeEntityId('mode', 'stadium'),
        makeEntityId('patch', '2026-05'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: 'stadium',
    section: 'modes',
    eyebrow: '모드 상세',
    kicker: '별도 시스템 축',
    title: 'Stadium',
    lead: 'Stadium은 빌드, 현금 경제, 전용 랭크가 붙은 별도 시스템으로 읽어야 한다.',
    summary:
      'Stadium은 코어 모드 설명의 확장판이 아니라 독립 시스템이다. 라운드 구조, 경제, 전용 영웅 풀, 별도 랭크 업데이트를 같이 추적해야 한다.',
    facts: [
      { label: '출범 기준', value: 'Season 16' },
      { label: '현재 신호', value: 'Ramattra 합류' },
      { label: '랭크 정책', value: 'Decay 전환' },
    ],
    highlights: [
      '2025년 4월 출범 당시 best-of-7, 별도 랭크, 17영웅 스타트로 시작했다.',
      '2026 Season 2 패치 기준 Ramattra와 Lijiang Night Market이 Stadium에 추가됐다.',
      '공식 Stadium 관련 문서는 빌드 공유, 전용 랭크, 빠른 테스트용 unranked를 핵심 특징으로 소개한다.',
    ],
    watchpoints: [
      'Jetpack Cat의 중시즌 합류 예고처럼 로스터 변화가 시즌 기사에 먼저 나타날 수 있다.',
      'Stadium 랭크는 코어 경쟁전과 다른 리셋 정책을 가지므로 별도 설명을 유지해야 한다.',
      '맵 상세에서 Stadium 전용 편입 여부를 같이 노출하면 모드 해석이 훨씬 쉬워진다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'modes',
      slug: 'stadium',
      title: 'Stadium',
      summary: '빌드, 경제, 전용 랭크를 가진 독립 시스템형 모드 상세다.',
      nextCheck: '다음 시즌 기사와 라이브 패치에서 Stadium 영웅 풀과 랭크 정책 변동을 재확인한다.',
      sourceIds: ['season-16-launch', 'season-2-summit', 'patch-2026-04-live', 'stadium-directors-take'],
      verificationState: '워치리스트',
      verificationNote: 'Stadium 로스터와 랭크 규칙은 시즌과 패치 문서가 계속 갱신되는 영역이다.',
      relatedEntityIds: [
        makeEntityId('mode', 'competitive'),
        makeEntityId('map', 'lijiang-night-market'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
]

export const mapDetailPages: SectionDetailPage[] = [
  {
    slug: 'antarctic-peninsula',
    section: 'maps',
    eyebrow: '맵 상세',
    kicker: '코어 리워크',
    title: 'Antarctic Peninsula',
    lead: 'Season 2 본편 패치에서 리워크가 직접 명시된 대표 코어 전장이다.',
    summary:
      'Antarctic Peninsula는 맵 아카이브를 어떤 방식으로 읽어야 하는지 보여 주는 샘플이다. 전략 팁보다 먼저 리워크 여부와 연결 패치를 고정해야 한다.',
    facts: [
      { label: '연결 패치', value: '2026-04-14' },
      { label: '맵 상태', value: '리워크 반영' },
      { label: '소속 축', value: 'Core PvP' },
    ],
    highlights: [
      'Season 2 본편 패치에서 리워크가 반영된 대표 전장이다.',
      '맵 아카이브는 이런 변경 이력부터 구조화해야 운영 누락이 줄어든다.',
      '코어 모드 소속과 패치 연결이 먼저 보여야 상세 페이지가 정보 문서로 작동한다.',
    ],
    watchpoints: [
      '전략성 문장은 후순위로 두고 무엇이 바뀌었는지부터 기록해야 한다.',
      '맵 변경은 시즌 소개 글보다 패치 노트가 더 직접적인 기준 문서가 된다.',
      '코어 모드 분류는 추후 맵 필터 확장의 핵심 키가 된다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'maps',
      slug: 'antarctic-peninsula',
      title: 'Antarctic Peninsula',
      summary: 'Season 2 본편 패치에서 리워크가 반영된 코어 맵 상세다.',
      nextCheck: '다음 맵 관련 패치 노트에서 리워크 후속 조정 여부를 재확인한다.',
      sourceIds: ['season-2-summit', 'patch-2026-04-live'],
      verificationState: '검증 완료',
      verificationNote: '리워크 사실과 연결 패치는 시즌 소개 글과 패치 노트에서 모두 확인된다.',
      relatedEntityIds: [
        makeEntityId('map', 'grand-mesa'),
        makeEntityId('patch', '2026-04-14'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: 'grand-mesa',
    section: 'maps',
    eyebrow: '맵 상세',
    kicker: '시즌 이벤트 전장',
    title: 'Grand Mesa',
    lead: '시즌 이벤트 맵이라 패치와 시즌 문서를 동시에 봐야 하는 대표 사례다.',
    summary:
      'Grand Mesa는 Operation: Grand Mesa와 직접 연결된 시즌성 전장이다. 이 맵은 지형보다 일정 충돌과 시즌 이벤트 문맥 때문에 상세 페이지 가치가 크다.',
    facts: [
      { label: '연결 시즌', value: 'Season 2: Summit' },
      { label: '맵 상태', value: '이벤트 전장' },
      { label: '검증 상태', value: '출처 충돌' },
    ],
    highlights: [
      'Operation: Grand Mesa와 직접 연결되는 시즌성 전장이다.',
      '이벤트 종료일이 시즌 소개 글과 패치 노트 사이에서 다르게 표기된다.',
      '맵 상세가 패치 축과 시즌 축을 함께 보여줘야 하는 이유를 가장 직접적으로 드러낸다.',
    ],
    watchpoints: [
      '운영 일정은 한 문서만 보고 고정하면 오정보가 된다.',
      '이벤트 종료 후에는 시즌 타임라인으로 이동할 요약 텍스트를 준비해야 한다.',
      '출처 허브에서 충돌 사실을 숨기지 않고 그대로 노출하는 것이 맞다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'maps',
      slug: 'grand-mesa',
      title: 'Grand Mesa',
      summary: '이벤트 일정 충돌 때문에 시즌과 패치를 함께 봐야 하는 맵 상세다.',
      nextCheck: '라이브 배너 또는 다음 패치 노트에서 Grand Mesa 종료일 기준선을 재확정한다.',
      sourceIds: ['season-2-summit', 'patch-2026-04-live'],
      verificationState: '출처 충돌',
      verificationNote: '이벤트 종료일은 공식 문서끼리 다르므로 일정 텍스트를 그대로 단정하면 안 된다.',
      relatedEntityIds: [
        makeEntityId('map', 'antarctic-peninsula'),
        makeEntityId('patch', '2026-04-14'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
  {
    slug: 'lijiang-night-market',
    section: 'maps',
    eyebrow: '맵 상세',
    kicker: 'Stadium 편입',
    title: 'Lijiang Night Market',
    lead: 'Season 2 기준 Stadium 쪽으로 확장된 맵 추적 예시다.',
    summary:
      'Lijiang Night Market은 Stadium 관련 문서와 함께 읽을 때 가치가 드러나는 전장이다. 맵 축이 코어 전장만 다루지 않는다는 신호를 주는 데 적합하다.',
    facts: [
      { label: '연결 모드', value: 'Stadium' },
      { label: '연결 패치', value: '2026-04-14' },
      { label: '맵 역할', value: '모드 확장 신호' },
    ],
    highlights: [
      'Season 2 패치 기준 Stadium에 추가된 대표 전장으로 언급된다.',
      '맵 상세는 어느 모드에 소속되는지부터 고정해야 사용자가 혼동하지 않는다.',
      '코어 전장과 다른 문맥으로 확장된 맵을 별도 사례로 남기면 아카이브 확장이 쉬워진다.',
    ],
    watchpoints: [
      'Stadium 전장 변화는 Director’s Take와 라이브 패치 노트를 같이 보는 편이 안전하다.',
      '향후 Stadium 전용 맵 풀이 늘어나면 맵 인덱스도 모드 필터 중심으로 재구성해야 한다.',
      '현재는 구조 예시이므로 심화 전략 설명보다 연결 축을 우선한다.',
    ],
    detailMeta: buildNarrativeDetailMeta({
      section: 'maps',
      slug: 'lijiang-night-market',
      title: 'Lijiang Night Market',
      summary: 'Stadium 편입 흐름을 보여 주는 모드 연동형 맵 상세다.',
      nextCheck: '다음 Stadium 업데이트에서 전용 맵 풀 확장 여부를 재확인한다.',
      sourceIds: ['patch-2026-04-live', 'stadium-directors-take'],
      verificationState: '워치리스트',
      verificationNote: 'Stadium 맵 풀은 후속 시즌과 패치에 따라 계속 변할 수 있다.',
      relatedEntityIds: [
        makeEntityId('map', 'grand-mesa'),
        makeEntityId('mode', 'stadium'),
        sectionDetailMeta.sources.entityId,
      ],
    }),
  },
]

export const narrativeDetailPages: Record<NarrativeDetailSection, SectionDetailPage[]> = {
  seasons: seasonDetailPages,
  patches: patchDetailPages,
  modes: modeDetailPages,
  maps: mapDetailPages,
}

export const allNarrativeDetails = Object.values(narrativeDetailPages).flat()

export const sourcePolicyCards: SourcePolicyCard[] = [
  {
    title: '현재 기준 문서',
    bullets: [
      '공식 오버워치 히어로 로스터',
      'Season 2: Summit 소개 글',
      '2026년 4월 라이브 패치 노트',
    ],
  },
  {
    title: '충돌 중인 항목',
    bullets: [
      'Grand Mesa 이벤트 종료일은 2026-05-04와 2026-05-12 표기가 공존한다.',
      '이벤트 일정은 인게임 배너나 최신 라이브 공지로 한 번 더 확인해야 한다.',
      '출처 페이지에서 충돌 사실을 숨기지 않고 그대로 노출한다.',
    ],
  },
  {
    title: '다음 확인 예정',
    bullets: [
      '2026년 5월 패치 노트 공개 시 전체 기준선 재검증',
      '경쟁전 맵 풀과 규칙 변경 여부 확인',
      '이벤트 종료 후 시즌 타임라인 이관',
    ],
  },
]

export const homeWatchlistCards: HomeWatchlistCard[] = [
  {
    title: 'Grand Mesa 일정 충돌',
    bullets: [
      'Season 2 소개 글: 2026-05-04 종료 표기',
      '2026년 4월 패치 노트: 2026-05-12 종료 표기',
      '라이브 기준 확정 전까지는 충돌 상태를 숨기지 않는다.',
    ],
    verificationState: '출처 충돌',
    nextCheck: '라이브 배너 또는 5월 패치 노트 공개 시 종료일 기준선을 재확정한다.',
    sourceIds: ['season-2-summit', 'patch-2026-04-live'],
    relatedEntityIds: [
      makeEntityId('map', 'grand-mesa'),
      makeEntityId('patch', '2026-04-14'),
      sourceHubEntityId,
    ],
  },
  {
    title: '다음 패치 준비',
    bullets: [
      '5월 패치 노트가 열리면 영웅 밸런스, 맵 풀, 이벤트 종료 텍스트를 같이 갱신한다.',
      '영웅 상세와 패치 인덱스는 절대 날짜 기준으로 함께 움직여야 한다.',
      '출처 허브는 새 기준 문서가 생기면 즉시 업데이트한다.',
    ],
    verificationState: '워치리스트',
    nextCheck: '공식 5월 패치 노트 게시 즉시 패치, 영웅, 맵, 출처 축을 한 번에 재검증한다.',
    sourceIds: ['patch-2026-05-index', 'patch-2026-04-live'],
    relatedEntityIds: [
      makeEntityId('patch', '2026-05'),
      patchIndexEntityId,
      sourceHubEntityId,
    ],
  },
]

export const newHeroes2026 = ['Domina', 'Emre', 'Mizuki', 'Anran', 'Jetpack Cat', 'Sierra']

const slugifyHeroName = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const seasonOneHeroes = new Set(['Domina', 'Emre', 'Mizuki', 'Anran', 'Jetpack Cat'])

const defaultSeasonNote = (hero: HeroSeed): HeroSeasonNote => {
  if (hero.name === 'Sierra') {
    return {
      label: 'Season 2 신규 영웅',
      season: 'Season 2: Summit',
      note:
        '2026년 4월 14일 시즌 시작과 함께 합류했다. Grand Mesa 이벤트와 4월 핫픽스 추적이 동시에 필요한 현재 시점의 대표 신규 얼굴이다.',
    }
  }

  if (seasonOneHeroes.has(hero.name)) {
    return {
      label: '2026 시즌 1 신규 합류',
      season: 'Season 1 — Reign of Talon',
      note:
        '2026 시즌 아크 개편과 함께 로스터에 추가된 축이다. Spotlight 문서에서 시즌 구조와 함께 발표된 신규 얼굴로 분류한다.',
    }
  }

  if (hero.name === 'Ramattra') {
    return {
      label: 'Season 2 Stadium 확대',
      season: '2026년 4월 라이브 패치',
      note:
        '시즌 2 패치에서 Stadium 영웅 풀에 합류했다. 코어 전장 정보와 Stadium 빌드 환경을 함께 읽어야 하는 대표 케이스다.',
    }
  }

  if (hero.name === 'Freja') {
    return {
      label: 'Season 16 출범 시그널',
      season: 'Season 16',
      note:
        '2025년 Stadium 출범 시즌을 대표하는 신규 영웅 축이다. 현재 로스터 확장 흐름을 읽을 때 Stadium 시대 개막 지점으로 같이 묶어 본다.',
    }
  }

  if (hero.stadium) {
    return {
      label: 'Stadium 추적 대상',
      season: '라이브 로스터',
      note:
        '공식 히어로 페이지에서 Stadium 가능 상태가 확인된다. 코어 모드와 Stadium 양쪽 밸런스 신호를 모두 체크해야 한다.',
    }
  }

  return {
    label: '코어 로스터 추적',
    season: '라이브 로스터',
    note:
      '공식 히어로 페이지 기준 라이브 로스터로 유지 중이다. 현재는 코어 PvP 기준선과 이후 Stadium 편입 여부를 함께 보는 편이 안전하다.',
  }
}

const buildDefaultIntel = (hero: HeroSeed, seasonNote: HeroSeasonNote): HeroIntel[] => [
  {
    label: '분류',
    value: `${heroRoleLabels[hero.role]} / ${heroSubroleMeta[hero.subrole].label}`,
  },
  {
    label: '전투 축',
    value: heroSubroleMeta[hero.subrole].focus,
  },
  {
    label: '현재 상태',
    value: hero.stadium ? 'Stadium 가능 영웅' : seasonNote.label,
  },
]

const buildDefaultOverview = (hero: HeroSeed) =>
  `${hero.name}는 ${heroRoleLabels[hero.role]} ${heroSubroleMeta[hero.subrole].label} 계열로, ${heroSubroleMeta[hero.subrole].focus}에 강점을 두는 영웅이다. 현재 사이트에서는 역할군과 시즌 흐름을 함께 읽기 위한 기준 프로필로 다룬다.`

const buildDefaultPlaystyle = (hero: HeroSeed) =>
  `${heroSubroleMeta[hero.subrole].operatingNote} 서브롤 패시브인 "${heroSubroleMeta[hero.subrole].passive}"가 실제 운영 감각을 직접 바꾸기 때문에 역할군만 보지 말고 세부 분류까지 같이 보는 편이 좋다.`

const buildDefaultWatchpoints = (hero: HeroSeed): string[] => [
  `${heroSubroleMeta[hero.subrole].focus} 중심으로 교전을 설계하는 영웅이다.`,
  hero.stadium
    ? 'Stadium 패치와 코어 밸런스 노트가 서로 다르게 움직일 수 있어 두 축을 함께 추적해야 한다.'
    : '현재는 코어 모드 기준 설명이 우선이지만, 향후 Stadium 편입 여부가 생기면 데이터 모델 확장 지점이 된다.',
  '공식 로스터와 시즌 공지를 함께 봐야 현재 메타 안에서의 위치를 놓치지 않는다.',
]

const getHeroVerificationState = (hero: HeroSeed): VerificationState =>
  hero.name === 'Sierra' || hero.name === 'Jetpack Cat' ? '워치리스트' : '검증 완료'

const getHeroVerificationNote = (hero: HeroSeed) =>
  getHeroVerificationState(hero) === '워치리스트'
    ? '신규 영웅 또는 시즌 연결 문맥이 아직 움직이는 상태다.'
    : '공식 로스터와 시즌/패치 문서가 현재 해석을 안정적으로 지지한다.'

const getHeroNextCheck = (hero: HeroSeed) => {
  if (hero.name === 'Sierra') {
    return '다음 월간 패치에서 Sierra 후속 밸런스 조정과 운영 문맥 변화를 재확인한다.'
  }

  if (hero.name === 'Jetpack Cat') {
    return '다음 시즌 기사 또는 Stadium 업데이트에서 Jetpack Cat의 라이브 상태와 모드 편입 여부를 재확인한다.'
  }

  if (hero.stadium) {
    return '다음 패치 노트에서 코어와 Stadium 양쪽 영웅 풀 변화가 동시에 있는지 재확인한다.'
  }

  return '다음 시즌 또는 패치 노트에서 코어 로스터 유지 여부와 모드 확장 여부를 재확인한다.'
}

const buildHeroDetailSummary = (hero: HeroSeed, seasonNote: HeroSeasonNote) =>
  `${heroRoleLabels[hero.role]} ${heroSubroleMeta[hero.subrole].label}. ${seasonNote.label} 기준으로 ${heroSubroleMeta[hero.subrole].focus} 축을 읽는 상세 브리핑이다.`

const baseHeroSourceKeys = (hero: HeroSeed): HeroSourceKey[] => {
  const keys: HeroSourceKey[] = ['roster']

  if (hero.name === 'Sierra') {
    keys.push('summit', 'aprilPatch')
  } else if (seasonOneHeroes.has(hero.name)) {
    keys.push('spotlight')
  } else if (hero.name === 'Ramattra') {
    keys.push('summit', 'aprilPatch')
  } else if (hero.name === 'Freja') {
    keys.push('season16')
  }

  return keys
}

const resolveHeroSourceIds = (hero: HeroSeed, overrideKeys?: HeroSourceKey[]) => {
  const keys = overrideKeys ?? baseHeroSourceKeys(hero)
  return Array.from(new Set(keys)).map((key) => sourceLinkMap[key].id)
}

const buildHeroDetailMeta = (
  hero: HeroSeed,
  slug: string,
  seasonNote: HeroSeasonNote,
  sourceIds: SourceLinkId[],
): EntityDetailMeta => ({
  entityId: makeEntityId('hero', slug),
  title: hero.name,
  entityType: 'hero',
  summary: buildHeroDetailSummary(hero, seasonNote),
  lastVerifiedAt: LAST_VERIFIED_AT,
  nextCheck: getHeroNextCheck(hero),
  sourceIds,
  verificationState: getHeroVerificationState(hero),
  verificationNote: getHeroVerificationNote(hero),
  relatedEntityIds: [],
})

const heroDetailOverrides: Partial<Record<string, HeroDetailOverride>> = {
  'D.Va': {
    overview:
      'D.Va는 개시와 이탈이 모두 빠른 Initiator 탱커다. 고지대 각을 먼저 선점하고, Defense Matrix로 팀의 첫 교전 실수를 지우는 대표 전면 개시 축이다.',
    playstyle:
      '진입 각을 먼저 열고 다시 빠져나오는 속도가 핵심이다. 한타 시작 2~3초 동안 어떤 위협을 지우느냐가 체감 가치 대부분을 만든다.',
    watchpoints: [
      '고지대 진입과 매트릭스 운영은 팀 조합 이해도와 함께 봐야 한다.',
      'Stadium 가능 영웅이므로 코어 밸런스와 빌드 변화가 동시에 영향을 준다.',
      '복귀 유저가 가장 자주 찾는 탱커 설명 축 중 하나라 온보딩 가치가 크다.',
    ],
  },
  Reinhardt: {
    overview:
      'Reinhardt는 전면 압박과 공간 고정에 특화된 Stalwart 탱커다. 직선 전장에서 팀이 따라붙을 기준점을 만드는 데 가장 직관적인 영웅 중 하나다.',
    playstyle:
      '방벽 숫자보다 전진 타이밍과 교전 개시 각이 더 중요하다. 언제 밀고 언제 멈출지를 팀 속도와 맞춰 읽어야 가치가 극대화된다.',
  },
  Tracer: {
    overview:
      'Tracer는 후방 압박과 교전 마무리를 동시에 맡는 Flanker 딜러다. 상대 리소스를 분산시키는 속도 자체가 팀 딜 기대값을 높인다.',
    playstyle:
      '긴 교전보다는 짧고 빠른 개입이 핵심이다. 생명력 팩 동선과 쿨다운 교환 타이밍을 같이 봐야 현재 메타 안에서의 성공률이 드러난다.',
  },
  Sojourn: {
    overview:
      'Sojourn은 포지션 화력과 마무리 능력을 모두 갖춘 Sharpshooter 딜러다. 패치 영향이 체감되기 쉬워 경쟁전 지표 카드와 가장 잘 연결되는 영웅 축이다.',
    playstyle:
      '기본 화력 축적과 레일건 피니시를 한 세트로 봐야 한다. 포지션 각도와 교전 길이가 화력 효율에 직접 연결된다.',
  },
  Ana: {
    overview:
      'Ana는 장거리 케어와 교전 변수 창출을 동시에 책임지는 Tactician 서포트다. 단순 유지력보다 팀 교전의 방향을 바꾸는 순간 가치가 큰 영웅이다.',
    playstyle:
      '수면총과 나노 강화제 타이밍이 팀 파이트 승률을 크게 흔든다. 궁극기 사이클과 생존 라인을 함께 읽어야 설명이 완성된다.',
  },
  Kiriko: {
    overview:
      'Kiriko는 해제와 리셋 능력이 강한 Medic 서포트다. 아군 살리기와 역전각 생성이 한 묶음으로 발생해 현재 경쟁전 기준선 설명에 자주 등장한다.',
    playstyle:
      '생존기는 반응속도보다 먼저 자리 잡는 동선이 중요하다. 해제 타이밍 하나가 교전 전체를 되돌릴 수 있어 변수 설명 가치가 높다.',
  },
  Ramattra: {
    overview:
      'Ramattra는 코어 전선 유지와 Season 2 Stadium 확장을 동시에 상징하는 Stalwart 탱커다. 이번 이슈의 상세 모델에서 시즌 문맥을 붙이기 가장 좋은 예시다.',
    playstyle:
      '폼 전환에 따라 압박 방식이 달라지는 만큼 단순 탱커 설명으로는 부족하다. 코어 모드 전선 유지와 Stadium 빌드 환경을 같이 보는 시각이 필요하다.',
    intel: [
      { label: '분류', value: '탱커 / Stalwart' },
      { label: '시즌 신호', value: '2026년 4월 Stadium 합류' },
      { label: '현재 상태', value: '코어 + Stadium 동시 추적' },
    ],
    watchpoints: [
      'Season 2 패치에서 Stadium 영웅 풀에 추가된 점이 핵심 변화다.',
      '코어 전선 운영과 Stadium 빌드 해석이 서로 다르게 움직일 수 있다.',
      '공식 패치 노트 링크가 직접 달린 대표 상세 카드로 쓰기 좋다.',
    ],
  },
  Sierra: {
    overview:
      'Sierra는 Season 2: Summit에서 합류한 Recon 딜러다. 2026 시즌 아크 안에서 가장 최신 공식 맥락을 가진 영웅이라 상세 패널 첫 예시로 적합하다.',
    playstyle:
      '정찰형 딜러답게 시야 압박과 추격 마무리가 핵심이다. 신규 영웅인 만큼 기본 이해, 이벤트 서사, 밸런스 핫픽스까지 한 화면에서 같이 다뤄야 한다.',
    intel: [
      { label: '분류', value: '딜러 / Recon' },
      { label: '시즌 신호', value: 'Season 2 신규 합류' },
      { label: '현재 상태', value: '코어 로스터 / Stadium 미지원' },
    ],
    watchpoints: [
      '2026-04-17 핫픽스 이후 성능 인식 변화를 따로 추적하는 편이 안전하다.',
      'Operation: Grand Mesa와 함께 설명 수요가 높아 시즌 대표 카드 가치가 크다.',
      '현재 공식 페이지 기준 Stadium 표시는 없어서 모드별 정보 분리가 필요하다.',
    ],
  },
  'Jetpack Cat': {
    overview:
      'Jetpack Cat은 2026 시즌 1 발표군에 포함된 Tactician 서포트다. 현재 로스터와 시즌 공지 사이에서 문맥 설명이 가장 필요한 영웅 중 하나다.',
    playstyle:
      '공식 소개 단계의 기대치와 실제 라이브 상태를 분리해서 보여주는 편이 중요하다. 시즌 2 기사에서 Stadium 중시즌 합류 예고도 함께 읽어야 한다.',
    seasonNote: {
      label: 'Season 1 발표 / Stadium 예고',
      season: 'Season 1 + Season 2 기사',
      note:
        '2026 시즌 1 발표군에 포함됐고, Season 2 소개 글에서는 Stadium 중시즌 합류가 예고됐다. 공식 문서 간 맥락 연결이 필요한 대표 사례다.',
    },
    sourceKeys: ['roster', 'spotlight', 'summit'],
  },
}

const heroSeeds: HeroSeed[] = [
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
  { name: 'Soldier: 76', role: 'damage', subrole: 'specialist', stadium: true },
  { name: 'Sombra', role: 'damage', subrole: 'recon', stadium: false },
  { name: 'Symmetra', role: 'damage', subrole: 'specialist', stadium: false },
  { name: 'Torbjörn', role: 'damage', subrole: 'specialist', stadium: true },
  { name: 'Tracer', role: 'damage', subrole: 'flanker', stadium: true },
  { name: 'Vendetta', role: 'damage', subrole: 'flanker', stadium: true },
  { name: 'Venture', role: 'damage', subrole: 'flanker', stadium: false },
  { name: 'Widowmaker', role: 'damage', subrole: 'sharpshooter', stadium: false },
  { name: 'Winston', role: 'tank', subrole: 'initiator', stadium: true },
  { name: 'Wrecking Ball', role: 'tank', subrole: 'initiator', stadium: false },
  { name: 'Wuyang', role: 'support', subrole: 'survivor', stadium: true },
  { name: 'Zarya', role: 'tank', subrole: 'bruiser', stadium: true },
  { name: 'Zenyatta', role: 'support', subrole: 'tactician', stadium: true },
]

const baseHeroRoster: Hero[] = heroSeeds.map((hero) => {
  const override = heroDetailOverrides[hero.name] ?? {}
  const seasonNote = override.seasonNote ?? defaultSeasonNote(hero)
  const slug = slugifyHeroName(hero.name)
  const sourceIds = resolveHeroSourceIds(hero, override.sourceKeys)

  return {
    slug,
    ...hero,
    overview: override.overview ?? buildDefaultOverview(hero),
    playstyle: override.playstyle ?? buildDefaultPlaystyle(hero),
    seasonNote,
    intel: override.intel ?? buildDefaultIntel(hero, seasonNote),
    watchpoints: override.watchpoints ?? buildDefaultWatchpoints(hero),
    detailMeta: buildHeroDetailMeta(hero, slug, seasonNote, sourceIds),
  }
})

const buildHeroRelatedEntityIds = (hero: Hero, roster: Hero[]): EntityId[] => {
  const siblingHeroIds = roster
    .filter((candidate) => candidate.role === hero.role && candidate.slug !== hero.slug)
    .slice(0, 2)
    .map((candidate) => candidate.detailMeta.entityId)

  return [...siblingHeroIds, modeHubEntityId, sourceHubEntityId]
}

export const heroRoster: Hero[] = baseHeroRoster.map((hero) => ({
  ...hero,
  detailMeta: {
    ...hero.detailMeta,
    relatedEntityIds: buildHeroRelatedEntityIds(hero, baseHeroRoster),
  },
}))

const subroleOrder: HeroSubrole[] = [
  'bruiser',
  'initiator',
  'stalwart',
  'sharpshooter',
  'flanker',
  'specialist',
  'recon',
  'tactician',
  'medic',
  'survivor',
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

export const subroleDeck = subroleOrder.map((subrole) => ({
  role: heroSubroleMeta[subrole].role,
  name: heroSubroleMeta[subrole].label,
  passive: heroSubroleMeta[subrole].passive,
  members: heroRoster
    .filter((hero) => hero.subrole === subrole)
    .map((hero) => hero.name),
}))

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
