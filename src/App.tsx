import { useState } from 'react'
import './App.css'
import {
  competitiveDeck,
  heroRoster,
  intelDeck,
  latestHighlights,
  modeDeck,
  seasonTimeline,
  sourceLinks,
  subroleDeck,
  type HeroRole,
  type RoleFilter,
} from './siteContent'

function App() {
  const [activeRole, setActiveRole] = useState<RoleFilter>('all')
  const filteredHeroes =
    activeRole === 'all'
      ? heroRoster
      : heroRoster.filter((hero) => hero.role === activeRole)

  const roleCounts: Record<HeroRole, number> = {
    tank: heroRoster.filter((hero) => hero.role === 'tank').length,
    damage: heroRoster.filter((hero) => hero.role === 'damage').length,
    support: heroRoster.filter((hero) => hero.role === 'support').length,
  }

  const stadiumCount = heroRoster.filter((hero) => hero.stadium).length
  const newHeroes2026 = [
    'Domina',
    'Emre',
    'Mizuki',
    'Anran',
    'Jetpack Cat',
    'Sierra',
  ]
  const heroHighlights = latestHighlights.slice(0, 2)

  const roleLabels: Record<RoleFilter, string> = {
    all: '전체',
    tank: '탱커',
    damage: '딜러',
    support: '서포트',
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-lockup">
          <p className="eyebrow">OVERWATCH 2 INTEL</p>
          <p className="brand-name">완전 정리</p>
        </div>
        <nav className="section-nav" aria-label="섹션 이동">
          <a href="#latest">최신 변화</a>
          <a href="#timeline">시즌 흐름</a>
          <a href="#heroes">영웅</a>
          <a href="#modes">모드</a>
          <a href="#sources">출처</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="hero-kicker">2026년 4월 23일 공식 정보 기준</p>
            <h1>
              OVERWATCH 2
              <span>한 페이지 완전 정리</span>
            </h1>
            <p className="hero-summary">
              지금 오버워치2는 단순히 신규 영웅 몇 명이 추가된 상태가 아니다.
              2026 시즌 체계 리셋, 서브롤 도입, Sierra 합류, Stadium 확장,
              Stadium 경쟁전 체계 손질까지 한 흐름으로 묶어 봐야 현재 메타와 방향이
              보인다.
            </p>
            <div className="cta-row">
              <a className="primary-cta" href="#latest">
                지금 달라진 것 보기
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

        <section className="summary-strip" id="latest">
          <article className="summary-card emphasis-card">
            <p className="section-tag">무조건 먼저 알아야 할 것</p>
            <h2>Season 2: Summit이 현재 기준선이다.</h2>
            <p>
              2026년 4월 14일 패치 이후 기준으로 보면 현재 오버워치2는 Sierra,
              Grand Mesa 이벤트, Post-Match Accolades, Antarctic Peninsula
              리워크, Ramattra Stadium 합류까지 포함한 상태다.
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
              <span>공식 히어로 페이지의 Stadium 표시 기준</span>
            </article>
            <article className="mini-card">
              <p className="mini-label">2026 라이브 신규 영웅</p>
              <strong>{newHeroes2026.length}</strong>
              <span>{newHeroes2026.join(' / ')}</span>
            </article>
          </div>

          <article className="summary-card caution-card">
            <p className="section-tag">주의 메모</p>
            <h2>Grand Mesa 이벤트 종료일 표기는 공식 문서끼리 다르다.</h2>
            <p>
              Season 2 소개 글은 <strong>2026년 5월 4일</strong>, 2026년 4월
              패치 노트는 <strong>2026년 5월 12일</strong>로 표기한다. 이벤트성
              일정은 사이트 운영 시점에 인게임 공지나 최신 배너로 한 번 더
              교차검증하는 편이 안전하다.
            </p>
          </article>
        </section>

        <section className="content-section" id="timeline">
          <div className="section-heading">
            <p className="section-tag">시즌 흐름</p>
            <h2>
              Stadium 출범에서 Talon 시즌 구조까지, 큰 줄기만 잡아도 지금이
              보인다.
            </h2>
          </div>
          <div className="timeline-grid">
            {seasonTimeline.map((item) => (
              <article key={item.date} className="timeline-card">
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-label">{item.label}</p>
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

        <section className="content-section">
          <div className="section-heading">
            <p className="section-tag">운영 신호</p>
            <h2>
              현재 오버워치2를 제대로 읽으려면 시즌, 경쟁전, 패치, 이스포츠를
              한 축으로 봐야 한다.
            </h2>
          </div>
          <div className="duel-grid">
            {intelDeck.map((item) => (
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

        <section className="content-section dual-section">
          <div className="section-heading">
            <p className="section-tag">서브롤 체계</p>
            <h2>
              2026 시즌 1부터는 역할만 보면 부족하다. 서브롤 패시브가 플레이
              감각을 바꾼다.
            </h2>
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

        <section className="content-section" id="heroes">
          <div className="section-heading hero-section-head">
            <div>
              <p className="section-tag">영웅 로스터</p>
              <h2>
                현재 공식 페이지 기준 로스터 전체를 역할별로 필터링해 볼 수 있다.
              </h2>
            </div>
            <div className="filter-row" role="tablist" aria-label="영웅 역할 필터">
              {(['all', 'tank', 'damage', 'support'] as RoleFilter[]).map(
                (role) => (
                  <button
                    key={role}
                    type="button"
                    className={`filter-button ${activeRole === role ? 'is-active' : ''}`}
                    onClick={() => setActiveRole(role)}
                  >
                    {roleLabels[role]}
                  </button>
                ),
              )}
            </div>
          </div>

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
              <article key={hero.name} className={`hero-pill ${hero.role}`}>
                <div>
                  <p className="hero-name">{hero.name}</p>
                  <p className="hero-meta">
                    {roleLabels[hero.role]} / {hero.subrole}
                  </p>
                </div>
                <span className={`stadium-badge ${hero.stadium ? 'live' : 'off'}`}>
                  {hero.stadium ? 'Stadium 가능' : '코어 로스터'}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="modes">
          <div className="section-heading">
            <p className="section-tag">모드 지도</p>
            <h2>
              현재 오버워치2를 읽을 때는 코어 PvP 모드와 Stadium을 분리해서
              봐야 한다.
            </h2>
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
            <h2>
              랭크 플레이는 하나가 아니다. 코어 경쟁전과 Stadium 경쟁은 성격이
              다르다.
            </h2>
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
            <article className="intel-card outlook-card">
              <h3>다음 체크포인트</h3>
              <ul>
                <li>
                  Season 2 기사 기준 Jetpack Cat의 Stadium 중시즌 합류가
                  예고됐다.
                </li>
                <li>
                  공식 2026 연간 아크는 총 10명 신규 영웅을 예고했지만,
                  2026-04-23 현재 라이브 확인된 영웅은 6명이다.
                </li>
                <li>
                  Clash는 2026년 4월 패치 노트 기준 Quick Play에서 제외된
                  상태라 별도 추적이 필요하다.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section" id="sources">
          <div className="section-heading">
            <p className="section-tag">공식 출처</p>
            <h2>
              이 페이지의 주장들은 전부 공식 오버워치/블리자드 소스에서
              끌어왔다.
            </h2>
          </div>
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
        </section>
      </main>

      <footer className="site-footer">
        <p>마지막 정리 기준: 2026년 4월 23일</p>
        <p>콘텐츠 기준선: 공식 소스 8종은 출처 섹션과 CONTENT_SOURCES.md에 명시</p>
      </footer>
    </div>
  )
}

export default App
