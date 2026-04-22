import { type ReactNode, useEffect, useState } from 'react'
import './App.css'
import {
  LAST_VERIFIED_AT,
  allNarrativeDetails,
  competitiveDeck,
  heroRoster,
  heroRoleLabels,
  heroSubroleMeta,
  homeWatchlistCards,
  intelDeck,
  latestHighlights,
  mapDetailPages,
  modeDeck,
  modeDetailPages,
  narrativeDetailPages,
  newHeroes2026,
  patchDetailPages,
  resolveSourceLinks,
  seasonDetailPages,
  seasonTimeline,
  sectionDetailMeta,
  sourceConflictSummary,
  sourceLinks,
  sourcePolicyCards,
  subroleDeck,
  type EntityDetailMeta,
  type EntityId,
  type HeroRole,
  type NarrativeDetailSection,
  type RoleFilter,
  type SectionDetailPage,
  type VerificationState,
} from './siteContent'

type RouteSection = 'home' | 'heroes' | 'seasons' | 'patches' | 'modes' | 'maps' | 'sources'
type SectionDetailRoute = Exclude<RouteSection, 'home'>
type NavItem = {
  key: RouteSection
  label: string
  path: string
}
type BreadcrumbItem = {
  label: string
  path?: string
}
type RelatedLink = {
  label: string
  path: string
  meta: string
}
type AppRoute =
  | { page: RouteSection }
  | {
      page: 'hero-detail'
      heroSlug: string
    }
  | {
      page: 'section-detail'
      section: NarrativeDetailSection
      slug: string
    }

const fallbackHero = heroRoster[0]!
const sectionLabels: Record<RouteSection, string> = {
  home: '홈',
  heroes: '영웅',
  seasons: '시즌',
  patches: '패치',
  modes: '모드',
  maps: '맵',
  sources: '출처',
}
const globalNav: NavItem[] = [
  { key: 'home', label: '홈', path: '/' },
  { key: 'heroes', label: '영웅', path: '/heroes' },
  { key: 'seasons', label: '시즌', path: '/seasons' },
  { key: 'patches', label: '패치', path: '/patches' },
  { key: 'modes', label: '모드', path: '/modes' },
  { key: 'maps', label: '맵', path: '/maps' },
  { key: 'sources', label: '출처', path: '/sources' },
]
const sectionRoutePaths: Record<SectionDetailRoute, string> = {
  heroes: '/heroes',
  seasons: '/seasons',
  patches: '/patches',
  modes: '/modes',
  maps: '/maps',
  sources: '/sources',
}

const buildSectionDetailPath = (section: NarrativeDetailSection, slug: string) =>
  `${sectionRoutePaths[section]}/${slug}`

const normalizePath = (value: string) => {
  const trimmed = value.replace(/^#/, '').trim()

  if (!trimmed || trimmed === '/') {
    return '/'
  }

  return `/${trimmed.replace(/^\/+/, '').replace(/\/+$/, '')}`
}

const appBasePath = import.meta.env.BASE_URL.replace(/\/$/, '')

const buildRouteUrl = (path: string) => {
  const normalized = normalizePath(path)

  if (!appBasePath) {
    return normalized
  }

  return normalized === '/' ? `${appBasePath}/` : `${appBasePath}${normalized}`
}

const stripBasePath = (pathname: string) => {
  const normalized = normalizePath(pathname)

  if (!appBasePath) {
    return normalized
  }

  if (normalized === appBasePath || normalized === `${appBasePath}/`) {
    return '/'
  }

  return normalized.startsWith(`${appBasePath}/`)
    ? normalizePath(normalized.slice(appBasePath.length))
    : normalized
}

const readRequestedPath = () => {
  if (typeof window === 'undefined') {
    return '/'
  }

  const hashPath = window.location.hash.startsWith('#/')
    ? normalizePath(window.location.hash)
    : '/'

  if (hashPath !== '/') {
    return hashPath
  }

  const requestedHero = new URLSearchParams(window.location.search).get('hero')
  if (heroRoster.some((hero) => hero.slug === requestedHero)) {
    return `/heroes/${requestedHero}`
  }

  return stripBasePath(window.location.pathname)
}

const resolveSectionDetail = (section: NarrativeDetailSection, slug: string) =>
  narrativeDetailPages[section].find((detail) => detail.slug === slug)

const parseRoute = (path: string = readRequestedPath()): AppRoute => {
  const segments = normalizePath(path).split('/').filter(Boolean)

  if (segments.length === 0) {
    return { page: 'home' }
  }

  switch (segments[0]) {
    case 'heroes':
      if (segments[1] && heroRoster.some((hero) => hero.slug === segments[1])) {
        return { page: 'hero-detail', heroSlug: segments[1] }
      }

      return { page: 'heroes' }
    case 'seasons':
      if (segments[1] && resolveSectionDetail('seasons', segments[1])) {
        return { page: 'section-detail', section: 'seasons', slug: segments[1] }
      }

      return { page: 'seasons' }
    case 'patches':
      if (segments[1] && resolveSectionDetail('patches', segments[1])) {
        return { page: 'section-detail', section: 'patches', slug: segments[1] }
      }

      return { page: 'patches' }
    case 'modes':
      if (segments[1] && resolveSectionDetail('modes', segments[1])) {
        return { page: 'section-detail', section: 'modes', slug: segments[1] }
      }

      return { page: 'modes' }
    case 'maps':
      if (segments[1] && resolveSectionDetail('maps', segments[1])) {
        return { page: 'section-detail', section: 'maps', slug: segments[1] }
      }

      return { page: 'maps' }
    case 'sources':
      return { page: 'sources' }
    default:
      return { page: 'home' }
  }
}

const syncBrowserPath = (path: string) => {
  if (typeof window === 'undefined') {
    return
  }

  const nextUrl = new URL(window.location.href)
  nextUrl.pathname = buildRouteUrl(path)
  nextUrl.search = ''
  nextUrl.hash = ''
  window.history.replaceState({}, '', nextUrl)
}

const getActiveSection = (route: AppRoute): RouteSection =>
  route.page === 'hero-detail'
    ? 'heroes'
    : route.page === 'section-detail'
      ? route.section
      : route.page

const getToneClass = (state: VerificationState) => {
  switch (state) {
    case '검증 완료':
      return 'verified'
    case '워치리스트':
      return 'watch'
    default:
      return 'conflict'
  }
}

const buildBreadcrumbs = (route: AppRoute, detailLabel?: string): BreadcrumbItem[] => {
  if (route.page === 'home') {
    return []
  }

  if (route.page === 'hero-detail') {
    return [
      { label: '홈', path: '/' },
      { label: '영웅', path: '/heroes' },
      { label: detailLabel ?? '영웅 상세' },
    ]
  }

  if (route.page === 'section-detail') {
    return [
      { label: '홈', path: '/' },
      { label: sectionLabels[route.section], path: sectionRoutePaths[route.section] },
      { label: detailLabel ?? '상세 문서' },
    ]
  }

  return [{ label: '홈', path: '/' }, { label: sectionLabels[route.page] }]
}

const resolveSectionMetaRoute = (entityId: EntityId) =>
  (Object.keys(sectionDetailMeta) as SectionDetailRoute[]).find(
    (route) => sectionDetailMeta[route].entityId === entityId,
  )

const resolveRelatedLink = (entityId: EntityId): RelatedLink | null => {
  const hero = heroRoster.find((candidate) => candidate.detailMeta.entityId === entityId)

  if (hero) {
    return {
      label: hero.name,
      path: `/heroes/${hero.slug}`,
      meta: `${heroRoleLabels[hero.role]} / ${heroSubroleMeta[hero.subrole].label}`,
    }
  }

  const sectionDetail = allNarrativeDetails.find(
    (candidate) => candidate.detailMeta.entityId === entityId,
  )

  if (sectionDetail) {
    return {
      label: sectionDetail.title,
      path: buildSectionDetailPath(sectionDetail.section, sectionDetail.slug),
      meta: sectionDetail.detailMeta.summary,
    }
  }

  const sectionRoute = resolveSectionMetaRoute(entityId)

  if (!sectionRoute) {
    return null
  }

  return {
    label: sectionDetailMeta[sectionRoute].title,
    path: sectionRoutePaths[sectionRoute],
    meta: sectionDetailMeta[sectionRoute].summary,
  }
}

const buildRelatedLinksFromMeta = (detailMeta: EntityDetailMeta) =>
  detailMeta.relatedEntityIds
    .map(resolveRelatedLink)
    .filter((link): link is RelatedLink => link !== null)

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) {
    return null
  }

  return (
    <nav className="breadcrumb" aria-label="현재 위치">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={`${item.label}-${index}`} className="breadcrumb-item">
            {isLast || !item.path ? (
              <span className="breadcrumb-current">{item.label}</span>
            ) : (
              <a href={buildRouteUrl(item.path)}>{item.label}</a>
            )}
            {!isLast ? <span className="breadcrumb-separator">/</span> : null}
          </span>
        )
      })}
    </nav>
  )
}

function VerificationCards({
  detailMeta,
}: {
  detailMeta: EntityDetailMeta
}) {
  return (
    <div className="fact-row" aria-label="검증 메타">
      <article className="mini-card">
        <p className="mini-label">마지막 검증</p>
        <strong>{detailMeta.lastVerifiedAt}</strong>
        <span>절대 날짜 기준으로 페이지 상태를 고정했다.</span>
      </article>
      <article className="mini-card">
        <p className="mini-label">연결 출처 수</p>
        <strong>{String(detailMeta.sourceIds.length).padStart(2, '0')}</strong>
        <span>공식 링크만 1차 기준선으로 사용한다.</span>
      </article>
      <article className="mini-card">
        <p className="mini-label">다음 확인</p>
        <strong>FOLLOW-UP</strong>
        <span>{detailMeta.nextCheck}</span>
      </article>
      <article className="mini-card">
        <p className="mini-label">검증 상태</p>
        <span className={`status-chip ${getToneClass(detailMeta.verificationState)}`}>
          {detailMeta.verificationState}
        </span>
        <span>{detailMeta.verificationNote}</span>
      </article>
    </div>
  )
}

function RelatedSection({
  title,
  summary,
  links,
}: {
  title: string
  summary: string
  links: RelatedLink[]
}) {
  return (
    <section className="content-section quiet-section">
      <div className="section-heading">
        <p className="section-tag">관련 진입</p>
        <h2>{title}</h2>
      </div>
      <p className="page-note">{summary}</p>
      <div className="related-grid">
        {links.map((link) => (
          <a key={link.path} className="related-link" href={buildRouteUrl(link.path)}>
            <span className="related-link-label">{link.label}</span>
            <span className="related-link-meta">{link.meta}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [activeRole, setActiveRole] = useState<RoleFilter>('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const route = parseRoute()

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const initialPath = readRequestedPath()
    const currentPath = stripBasePath(window.location.pathname)
    const hasLegacyHash = window.location.hash.startsWith('#/')
    const hasLegacyHeroQuery = new URLSearchParams(window.location.search).has('hero')

    if (hasLegacyHash || hasLegacyHeroQuery || currentPath !== initialPath) {
      syncBrowserPath(initialPath)
    }
  }, [])

  const activeSection = getActiveSection(route)
  const activeSectionDetail =
    route.page === 'section-detail' ? resolveSectionDetail(route.section, route.slug) : null
  const activeHero =
    route.page === 'hero-detail'
      ? heroRoster.find((hero) => hero.slug === route.heroSlug) ?? fallbackHero
      : fallbackHero
  const activeSubrole = heroSubroleMeta[activeHero.subrole]
  const activeHeroSources = resolveSourceLinks(activeHero.detailMeta.sourceIds)
  const activeDetailLabel =
    route.page === 'hero-detail'
      ? activeHero.name
      : route.page === 'section-detail'
        ? activeSectionDetail?.title
        : undefined
  const heroHighlights = latestHighlights.slice(0, 2)
  const roleCounts: Record<HeroRole, number> = {
    tank: heroRoster.filter((hero) => hero.role === 'tank').length,
    damage: heroRoster.filter((hero) => hero.role === 'damage').length,
    support: heroRoster.filter((hero) => hero.role === 'support').length,
  }
  const stadiumCount = heroRoster.filter((hero) => hero.stadium).length
  const filteredHeroes =
    activeRole === 'all'
      ? heroRoster
      : heroRoster.filter((hero) => hero.role === activeRole)
  const roleLabels: Record<RoleFilter, string> = { all: '전체', ...heroRoleLabels }
  const breadcrumbs = buildBreadcrumbs(route, activeDetailLabel)
  const activeSectionLabel = sectionLabels[activeSection]
  const activeRouteSection = route.page === 'section-detail' ? route.section : undefined
  const homeEntryCards = [
    {
      key: 'heroes',
      path: '/heroes',
      eyebrow: '영웅 인덱스',
      title: `${heroRoster.length}명 로스터와 상세 브리핑`,
      summary: '역할 필터, Stadium 상태, 개별 영웅 상세로 바로 들어간다.',
      status: '가동 중',
      meta: `탱커 ${roleCounts.tank} / 딜러 ${roleCounts.damage} / 서포트 ${roleCounts.support}`,
    },
    {
      key: 'seasons',
      path: '/seasons',
      eyebrow: '시즌 아크',
      title: '연도 흐름과 기준 시즌 추적',
      summary: 'Season 16부터 2026 Season 2까지 변곡점을 시간축으로 정리한다.',
      status: '1차 통합',
      meta: `핵심 타임라인 ${seasonTimeline.length}개`,
    },
    {
      key: 'patches',
      path: '/patches',
      eyebrow: '패치 아카이브',
      title: '절대 날짜 기준 변경 이력',
      summary: '시즌 본편 패치, 핫픽스, 다음 패치 대기 상태를 분리해서 본다.',
      status: '워치리스트',
      meta: '4월 본편 + 4월 핫픽스 + 5월 대기',
    },
    {
      key: 'modes',
      path: '/modes',
      eyebrow: '모드 허브',
      title: '코어 PvP와 Stadium 분기',
      summary: '모드 구조와 경쟁전 문맥을 섞지 않고 나눠 읽는다.',
      status: '가동 중',
      meta: `코어/특수 모드 ${modeDeck.length}개 정리`,
    },
    {
      key: 'maps',
      path: '/maps',
      eyebrow: '맵 인덱스',
      title: '리워크와 모드 소속부터 고정',
      summary: '맵 축은 전략 팁보다 변경 이력과 연결 패치를 먼저 잠근다.',
      status: '골격 준비',
      meta: '리워크/이벤트 맵 우선',
    },
    {
      key: 'sources',
      path: '/sources',
      eyebrow: '신뢰 허브',
      title: '공식 출처와 충돌 메모',
      summary: '현재 기준 문서, 충돌 항목, 다음 확인 대상을 한곳에서 본다.',
      status: '가동 중',
      meta: `공식 출처 ${sourceLinks.length}종`,
    },
  ]

  useEffect(() => {
    if (typeof document === 'undefined' || !isMobileMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (typeof window === 'undefined' || !isMobileMenuOpen) {
      return
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const titleMap: Record<RouteSection, string> = {
      home: '오버워치2 완전 정리',
      heroes: '영웅 인덱스 | 오버워치2 완전 정리',
      seasons: '시즌 인덱스 | 오버워치2 완전 정리',
      patches: '패치 인덱스 | 오버워치2 완전 정리',
      modes: '모드 허브 | 오버워치2 완전 정리',
      maps: '맵 인덱스 | 오버워치2 완전 정리',
      sources: '출처 허브 | 오버워치2 완전 정리',
    }

    document.title =
      route.page === 'hero-detail'
        ? `${activeHero.name} | 오버워치2 완전 정리`
        : route.page === 'section-detail'
          ? `${activeSectionDetail?.title ?? sectionLabels[activeRouteSection ?? 'seasons']} | ${sectionLabels[activeRouteSection ?? 'seasons']} | 오버워치2 완전 정리`
          : titleMap[route.page]
  }, [activeHero.name, activeSectionDetail?.title, activeRouteSection, route.page])

  const renderHome = () => (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="hero-kicker">2026년 4월 23일 공식 정보 기준</p>
          <h1>
            OVERWATCH 2
            <span>지식 베이스 허브</span>
          </h1>
          <p className="hero-summary">
            홈은 지금 메타의 기준선과 진입점만 보여준다. 자세한 설명은 영웅, 시즌,
            패치, 모드, 맵, 출처 축으로 나눠서 읽게 만드는 것이 이번 v2 1차 통합의
            핵심이다.
          </p>
          <div className="cta-row">
            <a className="primary-cta" href={buildRouteUrl('/heroes')}>
              영웅 인덱스로 들어가기
            </a>
            <a className="secondary-cta" href={buildRouteUrl('/sources')}>
              출처 정책 확인
            </a>
          </div>
        </div>

        <aside className="hero-dashboard" aria-label="현재 상태 요약">
          <div className="dashboard-badge">LIVE STATUS</div>
          <div className="dashboard-grid">
            {heroHighlights.map((item) => (
              <article key={item.label} className="signal-card">
                <p className="signal-label">{item.label}</p>
                <p className="signal-value">{item.value}</p>
                <p className="signal-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="summary-strip">
        <article className="summary-card emphasis-card">
          <p className="section-tag">현재 기준선</p>
          <h2>Season 2: Summit이 라이브 환경의 기준 문서다.</h2>
          <p>
            2026년 4월 14일 시즌 본편 패치 이후 기준으로 보면 현재 오버워치2는
            Sierra 합류, Grand Mesa 이벤트, Antarctic Peninsula 리워크, Ramattra
            Stadium 합류까지 포함한 상태다.
          </p>
        </article>

        <div className="fact-row" aria-label="핵심 수치">
          <article className="mini-card">
            <p className="mini-label">공식 히어로 수</p>
            <strong>{heroRoster.length}</strong>
            <span>
              탱커 {roleCounts.tank} / 딜러 {roleCounts.damage} / 서포트{' '}
              {roleCounts.support}
            </span>
          </article>
          <article className="mini-card">
            <p className="mini-label">Stadium 가능</p>
            <strong>{stadiumCount}</strong>
            <span>공식 히어로 페이지의 Stadium 표기 기준</span>
          </article>
          <article className="mini-card">
            <p className="mini-label">2026 신규 영웅</p>
            <strong>{newHeroes2026.length}</strong>
            <span>{newHeroes2026.join(' / ')}</span>
          </article>
        </div>

        <article className="summary-card caution-card">
          <p className="section-tag">출처 충돌</p>
          <h2>{sourceConflictSummary.title}</h2>
          <p>
            {sourceConflictSummary.lead} {sourceConflictSummary.note}
          </p>
        </article>
      </section>

      <section className="content-section hub-section">
        <div className="section-heading">
          <p className="section-tag">지식 축 진입</p>
          <h2>이제 한 페이지 스크롤이 아니라, 필요한 축으로 바로 들어간다.</h2>
        </div>
        <div className="hub-grid">
          {homeEntryCards.map((card) => (
            <a key={card.key} className="hub-card" href={buildRouteUrl(card.path)}>
              <p className="hub-eyebrow">{card.eyebrow}</p>
              <h3 className="hub-title">{card.title}</h3>
              <p>{card.summary}</p>
              <div className="hub-meta-row">
                <span className="hub-status">{card.status}</span>
                <span className="hub-meta">{card.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section" id="timeline">
        <div className="section-heading">
          <p className="section-tag">시즌 미리보기</p>
          <h2>홈에서는 흐름만 보여주고, 실제 추적은 시즌 인덱스로 넘긴다.</h2>
        </div>
        <div className="timeline-grid">
          {seasonDetailPages.map((item) => (
            <a
              key={item.slug}
              className="timeline-card detail-card-link"
              href={buildRouteUrl(buildSectionDetailPath(item.section, item.slug))}
            >
              <p className="timeline-date">{item.kicker.split(' / ')[0]}</p>
              <p className="timeline-label">{item.title}</p>
              <h3>{item.lead}</h3>
              <ul>
                {item.highlights.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <span className="hero-open-label">상세 문서</span>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section quiet-section">
        <div className="section-heading">
          <p className="section-tag">운영 워치리스트</p>
          <h2>다음 패치 때 어디를 갱신해야 하는지 홈에서도 바로 보이게 둔다.</h2>
        </div>
        <div className="duel-grid">
          {homeWatchlistCards.map((item) => (
            <article key={item.title} className="intel-card">
              <h3>{item.title}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="page-note">{item.nextCheck}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )

  const renderHeroesIndex = () => (
    <>
      <section className="content-section" id="heroes">
        <div className="section-heading hero-section-head">
          <div>
            <p className="section-tag">영웅 인덱스</p>
            <h2>인덱스는 넓게 훑고, 해설은 개별 상세 페이지로 넘긴다.</h2>
          </div>
          <div className="filter-row" role="tablist" aria-label="영웅 역할 필터">
            {(['all', 'tank', 'damage', 'support'] as RoleFilter[]).map((role) => (
              <button
                key={role}
                type="button"
                className={`filter-button ${activeRole === role ? 'is-active' : ''}`}
                onClick={() => setActiveRole(role)}
              >
                {roleLabels[role]}
              </button>
            ))}
          </div>
        </div>

        <VerificationCards
          detailMeta={sectionDetailMeta.heroes}
        />

        <div className="role-summary-grid">
          <article className="role-summary tank">
            <p>탱커</p>
            <strong>{roleCounts.tank}</strong>
          </article>
          <article className="role-summary damage">
            <p>딜러</p>
            <strong>{roleCounts.damage}</strong>
          </article>
          <article className="role-summary support">
            <p>서포트</p>
            <strong>{roleCounts.support}</strong>
          </article>
        </div>

        <div className="hero-grid">
          {filteredHeroes.map((hero) => (
            <a
              key={hero.slug}
              className={`hero-pill ${hero.role}`}
              href={buildRouteUrl(`/heroes/${hero.slug}`)}
            >
              <div className="hero-pill-copy">
                <p className="hero-name">{hero.name}</p>
                <p className="hero-meta">
                  {heroRoleLabels[hero.role]} / {heroSubroleMeta[hero.subrole].label}
                </p>
              </div>
              <div className="hero-pill-meta">
                <span className={`stadium-badge ${hero.stadium ? 'live' : 'off'}`}>
                  {hero.stadium ? 'Stadium 가능' : '코어 로스터'}
                </span>
                <span className="hero-open-label">상세 보기</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section dual-section">
        <div className="section-heading">
          <p className="section-tag">서브롤 체계</p>
          <h2>역할만으로는 부족하다. 서브롤 패시브가 플레이 감각을 바꾼다.</h2>
        </div>
        <div className="subrole-grid">
          {subroleDeck.map((subrole) => (
            <article key={subrole.name} className="subrole-card">
              <p className="subrole-role">{subrole.role}</p>
              <h3>{subrole.name}</h3>
              <p className="subrole-passive">{subrole.passive}</p>
              <p className="subrole-members">{subrole.members.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <RelatedSection
        title="다른 축으로 이어서 읽기"
        summary="영웅 축은 시즌, 모드, 출처 축과 연결될 때 가치가 커진다."
        links={buildRelatedLinksFromMeta(sectionDetailMeta.heroes)}
      />
    </>
  )

  const renderHeroDetail = () => {
    return (
      <>
        <section className="content-section">
          <div className="section-heading">
            <p className="section-tag">영웅 상세</p>
            <h2>{activeHero.name}는 지금 어떤 문맥으로 봐야 하는가.</h2>
          </div>

          <VerificationCards detailMeta={activeHero.detailMeta} />

          <div className={`hero-dossier ${activeHero.role}`}>
            <div className="hero-dossier-main">
              <div className="hero-dossier-heading">
                <div>
                  <p className="section-tag">선택한 영웅 브리핑</p>
                  <p className="hero-dossier-kicker">
                    {activeHero.seasonNote.season} / {activeHero.seasonNote.label}
                  </p>
                  <h3 className="hero-dossier-name">{activeHero.name}</h3>
                </div>

                <div className="hero-chip-row" aria-label="선택 영웅 메타">
                  <span className={`hero-chip role ${activeHero.role}`}>
                    {heroRoleLabels[activeHero.role]}
                  </span>
                  <span className="hero-chip">{activeSubrole.label}</span>
                  <span
                    className={`hero-chip stadium ${activeHero.stadium ? 'live' : 'off'}`}
                  >
                    {activeHero.stadium ? 'Stadium 가능' : '코어 로스터'}
                  </span>
                </div>
              </div>

              <p className="hero-dossier-summary">{activeHero.overview}</p>

              <div className="hero-dossier-intel-grid">
                {activeHero.intel.map((item) => (
                  <article key={`${activeHero.slug}-${item.label}`} className="hero-intel-card">
                    <p className="mini-label">{item.label}</p>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="hero-dossier-copy-grid">
                <article className="dossier-copy-card">
                  <p className="mini-label">운영 포인트</p>
                  <p>{activeHero.playstyle}</p>
                </article>
                <article className="dossier-copy-card">
                  <p className="mini-label">시즌 맥락</p>
                  <p className="hero-season-note">{activeHero.seasonNote.note}</p>
                </article>
              </div>
            </div>

            <aside className="hero-dossier-side">
              <article className="dossier-side-card">
                <p className="mini-label">체크 포인트</p>
                <ul className="hero-watch-list">
                  {activeHero.watchpoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>

              <article className="dossier-side-card">
                <p className="mini-label">공식 출처</p>
                <div className="hero-source-list">
                  {activeHeroSources.map((source) => (
                    <a
                      key={`${activeHero.slug}-${source.id}`}
                      className="hero-source-link"
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="hero-source-title">{source.label}</span>
                      <span className="hero-source-meta">{source.meta}</span>
                    </a>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </section>

        <RelatedSection
          title="같이 봐야 하는 연결 축"
          summary="상세 페이지가 고립되지 않도록 같은 역할 영웅, 모드 허브, 출처 허브로 다시 나갈 수 있게 둔다."
          links={buildRelatedLinksFromMeta(activeHero.detailMeta)}
        />
      </>
    )
  }

  const renderNarrativeDetail = (detail: SectionDetailPage) => {
    const detailSources = resolveSourceLinks(detail.detailMeta.sourceIds)
    const relatedSummary: Record<NarrativeDetailSection, string> = {
      seasons: '시즌 상세는 패치와 모드 문서까지 이어져야 현재 기준선이 분명해진다.',
      patches: '패치 상세는 시즌과 영향 엔티티를 같이 볼 때 운영 문서로 제대로 작동한다.',
      modes: '모드 상세는 관련 시즌, 맵, 영웅과 연결될 때 규칙 문맥이 선명해진다.',
      maps: '맵 상세는 모드 소속과 연결 패치를 같이 볼 때 가장 정확해진다.',
    }

    return (
      <>
        <section className="content-section">
          <div className="section-heading">
            <p className="section-tag">{detail.eyebrow}</p>
            <h2>{detail.lead}</h2>
          </div>

          <VerificationCards detailMeta={detail.detailMeta} />

          <div className={`hero-dossier detail-dossier ${detail.section}`}>
            <div className="hero-dossier-main">
              <div className="hero-dossier-heading">
                <div>
                  <p className="section-tag">선택한 기준 문서</p>
                  <p className="hero-dossier-kicker">{detail.kicker}</p>
                  <h3 className="hero-dossier-name">{detail.title}</h3>
                </div>

                <div className="hero-chip-row" aria-label="선택 문서 메타">
                  <span className="hero-chip">{sectionLabels[detail.section]}</span>
                  <span className="hero-chip">{detail.detailMeta.verificationState}</span>
                  <span className="hero-chip">{detail.facts[0]?.value}</span>
                </div>
              </div>

              <p className="hero-dossier-summary">{detail.summary}</p>

              <div className="hero-dossier-intel-grid">
                {detail.facts.map((item) => (
                  <article key={`${detail.slug}-${item.label}`} className="hero-intel-card">
                    <p className="mini-label">{item.label}</p>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>

              <div className="hero-dossier-copy-grid">
                <article className="dossier-copy-card">
                  <p className="mini-label">핵심 변화</p>
                  <ul className="hero-watch-list">
                    {detail.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
                <article className="dossier-copy-card">
                  <p className="mini-label">운영 메모</p>
                  <ul className="hero-watch-list">
                    {detail.watchpoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>

            <aside className="hero-dossier-side">
              <article className="dossier-side-card">
                <p className="mini-label">검증 노트</p>
                <p className="hero-season-note">{detail.detailMeta.verificationNote}</p>
              </article>

              <article className="dossier-side-card">
                <p className="mini-label">공식 출처</p>
                <div className="hero-source-list">
                  {detailSources.map((source) => (
                    <a
                      key={`${detail.slug}-${source.id}`}
                      className="hero-source-link"
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="hero-source-title">{source.label}</span>
                      <span className="hero-source-meta">{source.meta}</span>
                    </a>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </section>

        <RelatedSection
          title="같이 봐야 하는 연결 문서"
          summary={relatedSummary[detail.section]}
          links={buildRelatedLinksFromMeta(detail.detailMeta)}
        />
      </>
    )
  }

  const renderSectionIntro = ({
    eyebrow,
    title,
    detailMeta,
    children,
  }: {
    eyebrow: string
    title: string
    detailMeta: EntityDetailMeta
    children: ReactNode
  }) => (
    <>
      <section className="content-section">
        <div className="section-heading">
          <p className="section-tag">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <VerificationCards detailMeta={detailMeta} />
        {children}
      </section>
    </>
  )

  const renderSeasons = () => (
    <>
      {renderSectionIntro({
        eyebrow: '시즌 인덱스',
        title: '연간 아크와 현재 기준 시즌을 절대 날짜 순서로 따라간다.',
        detailMeta: sectionDetailMeta.seasons,
        children: (
          <div className="timeline-grid">
            {seasonDetailPages.map((item) => (
              <a
                key={item.slug}
                className="timeline-card detail-card-link"
                href={buildRouteUrl(buildSectionDetailPath(item.section, item.slug))}
              >
                <p className="timeline-date">{item.kicker.split(' / ')[0]}</p>
                <p className="timeline-label">{item.title}</p>
                <h3>{item.lead}</h3>
                <ul>
                  {item.highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="hero-open-label">상세 문서</span>
              </a>
            ))}
          </div>
        ),
      })}

      <section className="content-section quiet-section">
        <div className="section-heading">
          <p className="section-tag">운영 신호</p>
          <h2>시즌은 패치와 경쟁전 문맥을 함께 읽을 때 의미가 선명해진다.</h2>
        </div>
        <div className="duel-grid">
          {intelDeck.slice(0, 2).map((item) => (
            <article key={item.title} className="intel-card">
              <h3>{item.title}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <RelatedSection
        title="시즌과 함께 볼 것"
        summary="시즌 축은 패치 인덱스와 모드 허브로 이어질 때 더 정확해진다."
        links={buildRelatedLinksFromMeta(sectionDetailMeta.seasons)}
      />
    </>
  )

  const renderPatches = () => (
    <>
      {renderSectionIntro({
        eyebrow: '패치 인덱스',
        title: '패치 축은 시간축과 검증 상태를 가장 직접적으로 보여주는 기준 문서다.',
        detailMeta: sectionDetailMeta.patches,
        children: (
          <div className="timeline-grid">
            {patchDetailPages.map((item) => (
              <a
                key={item.slug}
                className="timeline-card detail-card-link"
                href={buildRouteUrl(buildSectionDetailPath(item.section, item.slug))}
              >
                <p className="timeline-date">{item.kicker.split(' / ')[0]}</p>
                <p className="timeline-label">{item.title}</p>
                <h3>{item.lead}</h3>
                <ul>
                  {item.highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="hero-open-label">상세 문서</span>
              </a>
            ))}
          </div>
        ),
      })}

      <RelatedSection
        title="패치에서 이어서 볼 것"
        summary="패치는 시즌 기준선과 영웅 상세를 갱신하는 출발점이다."
        links={buildRelatedLinksFromMeta(sectionDetailMeta.patches)}
      />
    </>
  )

  const renderModes = () => (
    <>
      {renderSectionIntro({
        eyebrow: '모드 허브',
        title: '코어 PvP와 Stadium은 같은 카드 밀도로 섞지 않고 분리해서 읽는다.',
        detailMeta: sectionDetailMeta.modes,
        children: (
          <div className="mode-grid">
            {modeDetailPages.map((mode) => (
              <a
                key={mode.slug}
                className="mode-card detail-card-link"
                href={buildRouteUrl(buildSectionDetailPath(mode.section, mode.slug))}
              >
                <p className="section-tag">{mode.kicker}</p>
                <h3>{mode.title}</h3>
                <p>{mode.summary}</p>
                <span className="hero-open-label">상세 문서</span>
              </a>
            ))}
          </div>
        ),
      })}

      <section className="content-section quiet-section">
        <div className="section-heading">
          <p className="section-tag">코어 모드 스캔</p>
          <h2>세부 룰 이름은 남기되, 상세 문서는 세 갈래 축으로 묶어서 읽힌다.</h2>
        </div>
        <div className="mode-grid">
          {modeDeck.map((mode) => (
            <article key={mode.title} className="mode-card">
              <h3>{mode.title}</h3>
              <p>{mode.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section duel-layout">
        <div className="section-heading">
          <p className="section-tag">경쟁전과 Stadium</p>
          <h2>랭크 플레이는 하나가 아니다. 코어 경쟁전과 Stadium 경쟁은 성격이 다르다.</h2>
        </div>
        <div className="duel-grid">
          {competitiveDeck.map((group) => (
            <article key={group.title} className="intel-card">
              <h3>{group.title}</h3>
              <ul>
                {group.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <RelatedSection
        title="모드에서 이어서 볼 것"
        summary="모드 축은 시즌, 영웅, 맵 축을 연결하는 허브 역할을 한다."
        links={buildRelatedLinksFromMeta(sectionDetailMeta.modes)}
      />
    </>
  )

  const renderMaps = () => (
    <>
      {renderSectionIntro({
        eyebrow: '맵 인덱스',
        title: '맵 축은 전략 팁보다 모드 소속, 리워크 여부, 연결 패치를 먼저 고정한다.',
        detailMeta: sectionDetailMeta.maps,
        children: (
          <div className="mode-grid">
            {mapDetailPages.map((item) => (
              <a
                key={item.slug}
                className="mode-card detail-card-link"
                href={buildRouteUrl(buildSectionDetailPath(item.section, item.slug))}
              >
                <p className="section-tag">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="hero-open-label">상세 문서</span>
              </a>
            ))}
          </div>
        ),
      })}

      <RelatedSection
        title="맵에서 이어서 볼 것"
        summary="맵 축은 모드 구조와 패치 이력을 같이 볼 때 정확도가 올라간다."
        links={buildRelatedLinksFromMeta(sectionDetailMeta.maps)}
      />
    </>
  )

  const renderSources = () => (
    <>
      {renderSectionIntro({
        eyebrow: '출처 허브',
        title: '이 사이트의 모든 주장은 공식 오버워치/블리자드 문서만 1차 기준으로 삼는다.',
        detailMeta: sectionDetailMeta.sources,
        children: (
          <div className="source-list">
            {sourceLinks.map((source) => (
              <a
                key={source.href}
                className="source-card"
                href={source.href}
                target="_blank"
                rel="noreferrer"
              >
                <p className="source-title">{source.label}</p>
                <p className="source-meta">{source.meta}</p>
                <span className="source-link">원문 열기</span>
              </a>
            ))}
          </div>
        ),
      })}

      <section className="content-section quiet-section">
        <div className="section-heading">
          <p className="section-tag">검증 정책</p>
          <h2>공식 링크 나열만으로 끝내지 않고, 어떤 문서를 기준선으로 삼는지도 같이 보여준다.</h2>
        </div>
        <div className="timeline-grid">
          {sourcePolicyCards.map((item) => (
            <article key={item.title} className="timeline-card">
              <p className="timeline-label">SOURCE POLICY</p>
              <h3>{item.title}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )

  const renderCurrentPage = () => {
    switch (route.page) {
      case 'home':
        return renderHome()
      case 'heroes':
        return renderHeroesIndex()
      case 'hero-detail':
        return renderHeroDetail()
      case 'section-detail':
        if (activeSectionDetail) {
          return renderNarrativeDetail(activeSectionDetail)
        }

        return narrativeDetailPages[route.section][0]
          ? renderNarrativeDetail(narrativeDetailPages[route.section][0]!)
          : renderHome()
      case 'seasons':
        return renderSeasons()
      case 'patches':
        return renderPatches()
      case 'modes':
        return renderModes()
      case 'maps':
        return renderMaps()
      case 'sources':
        return renderSources()
    }
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href={buildRouteUrl('/')}>
          <p className="eyebrow">OVERWATCH 2 INTEL</p>
          <p className="brand-name">완전 정리</p>
        </a>
        <button
          type="button"
          className={`menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-sheet"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-label">탐색</span>
          <strong>{activeSectionLabel}</strong>
        </button>
        <nav className="section-nav" aria-label="전역 탐색">
          {globalNav.map((item) => (
            <a
              key={item.key}
              href={buildRouteUrl(item.path)}
              className={activeSection === item.key ? 'is-active' : undefined}
              aria-current={activeSection === item.key ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="topbar-meta">
          <span className="header-chip">업데이트 기준 {LAST_VERIFIED_AT}</span>
          <a className="header-link" href={buildRouteUrl('/sources')}>
            출처 정책
          </a>
        </div>
      </header>

      <div
        className={`mobile-menu-shell ${isMobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="메뉴 닫기"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div id="mobile-menu-sheet" className="mobile-menu-sheet" role="dialog" aria-modal="true">
          <div className="mobile-menu-head">
            <p className="section-tag">전역 탐색</p>
            <h2>{activeSectionLabel} 기준 문서로 이동</h2>
            <p className="page-note">
              모바일에서는 현재 위치를 유지한 채 시즌, 패치, 모드, 맵 상세로 바로
              넘어갈 수 있게 시트형 메뉴를 둔다.
            </p>
          </div>
          <nav className="mobile-menu-nav" aria-label="모바일 전역 탐색">
            {globalNav.map((item) => (
              <a
                key={`mobile-${item.key}`}
                href={buildRouteUrl(item.path)}
                className={activeSection === item.key ? 'is-active' : undefined}
                aria-current={activeSection === item.key ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile-menu-item-label">{item.label}</span>
                <span className="mobile-menu-item-meta">
                  {activeSection === item.key ? '현재 보고 있는 축' : '섹션 인덱스로 이동'}
                </span>
              </a>
            ))}
          </nav>
          <div className="mobile-menu-meta">
            <span className="header-chip">업데이트 기준 {LAST_VERIFIED_AT}</span>
            <a
              className="header-link"
              href={buildRouteUrl('/sources')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              출처 정책
            </a>
          </div>
        </div>
      </div>

      <main>
        <Breadcrumbs items={breadcrumbs} />
        {renderCurrentPage()}
      </main>

      <footer className="site-footer">
        <p>마지막 정리 기준: {LAST_VERIFIED_AT}</p>
        <p>v2 2차 통합: 다축 상세 라우트, 전역 탐색, 모바일 메뉴 시트</p>
      </footer>
    </div>
  )
}

export default App
