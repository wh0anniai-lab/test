import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/layout/footer";
import { WorkMotion } from "@/components/work-motion";
import { CONTACT } from "@/lib/data/site";
import lecturePhoto from "@/public/images/lecture.jpg";

const services = [
  { title: "돌보다", category: "Public data", image: "dolboda", url: "https://www.dolboda.kr/", body: "수만 건의 공공데이터를 정제해 시설별 돌봄 여건을 비교할 수 있도록 기획하고 개발했습니다." },
  { title: "인플루잇", category: "Web service", image: "influit", url: "https://www.influit.kr/", body: "브랜드와 인플루언서를 연결하는 서비스를 기획하고, 사용자가 이용할 수 있는 웹으로 구현했습니다." },
  { title: "4season · stars", category: "Domain engine", image: "stars", url: "https://4season-web1.vercel.app/stars", body: "연도별 실제 절기 시각으로 경계를 계산합니다. 출생 시각 미상도 처리하고 판정 근거를 함께 제공합니다." },
];

export default function Home() {
  return (
    <main id="main">
      <section className="wrap hero">
        <div className="intro">
          <p className="kicker"><i className="dot"/> Developer · Educator · Founder</p>
          <h1>김동영<span>.</span></h1>
          <p className="name-en" lang="en">Kim Dong Young</p>
          <p className="lead">AI로 서비스를 만들고, 직접 운영하며,<br/>그 경험을 수업에서 나눕니다.</p>
          <ContactActions />
        </div>
        <WorkMotion />
      </section>
      <section id="work" className="wrap section">
        <span className="kicker">Selected development / 2026</span>
        <h2>직접 만든 서비스</h2>
        <div className="projects">
          {services.map(s => <a className="project" href={s.url} key={s.title} target="_blank" rel="noreferrer">
            <div className="screenshot"><Image src={`/images/dy-${s.image}.jpg`} width={1280} height={800} sizes="(max-width: 720px) 92vw, 32vw" alt={`${s.title} 서비스 첫 화면`}/></div>
            <span className="kicker">{s.category} · 웹서비스</span><h3>{s.title}<span>↗</span></h3><p>{s.body}</p>
          </a>)}
        </div>
        <details className="research"><summary><span className="kicker">AI 연구 프로토타입</span><strong>Nanogen AI Agent</strong><span>검증 과정 보기</span></summary>
          <p>논문·특허에서 추출한 값에 원문 구절을 연결했습니다. 대응하는 근거를 찾을 수 없으면 사실로 저장하지 않습니다. 출처, 중복, 매핑, 실패 처리 등을 134개 오프라인 테스트로 검증했습니다.</p>
        </details>
      </section>
      <section id="teaching" className="teaching section">
        <div className="wrap"><span className="kicker">Teaching</span><h2>지금 가르치는 두 현장</h2>
          <div className="teaching-layout"><div className="courses">
            <article><span className="kicker">학교 수업 · 진행 중</span><h3>이솔초등학교 AI·SW 수업</h3><p>2026년 9월부터 초등학생들과 엔트리로 게임을 만들고, 좌표와 알고리즘을 익히고, AI 윤리를 토론합니다.</p></article>
            <article><span className="kicker">온라인 수업 · 진행 중</span><h3>성인을 위한 온라인 AI 강의</h3><p>하고 싶은 일을 말로 정의하고, 생성형 AI가 만든 결과를 확인하고 고칩니다. 업무자동화와 웹 제작을 실습으로 연결합니다.</p></article>
            <div className="teaching-links"><Link href="/reviews">실강 후기 12편 →</Link><a href={CONTACT.kakaoOpenChat}>강의 문의 ↗</a></div>
          </div><figure className="lecture-photo"><Image src={lecturePhoto} alt="강의실에서 수강생에게 설명하는 김동영" sizes="(max-width: 720px) 92vw, 46vw"/><figcaption>대학 강의 현장 · 2026년 국립경상대학교 AI·Python 과정 진행</figcaption></figure></div>
        </div>
      </section>
      <section id="business" className="wrap section"><span className="kicker">Business &amp; operation</span><h2>서비스를 운영하는 대표</h2>
        <div className="ventures"><article><span className="kicker">2018 — 현재</span><h3>맘잇 <em>MomIt</em></h3><strong>대표 · CEO &amp; CTO</strong><p>플랫폼 기획부터 개발과 운영까지 맡고 있습니다. 대학협력단·지자체·외부 협력자와 일하며 사용자 요구와 일정, 자원을 함께 조율합니다.</p></article>
        <article><span className="kicker">2020 — 2022</span><h3>가티 <em>Gati</em></h3><strong>공동대표 · CTO</strong><p>게이밍 교육 플랫폼을 사업화하며 모바일·웹서비스 개발을 이끌었습니다. 공동대표로서 팀과 제품의 기술적 우선순위를 정했습니다.</p></article></div>
        <a className="plain" href={CONTACT.kakaoOpenChat}>사업·개발 협업 문의 ↗</a>
        <details className="research"><summary><span className="kicker">Robotics</span><strong>연구·개발의 출발점</strong><span>경력 보기</span></summary><p>대학 연구실에서 무인경비로봇을 개발하고, KIST(2016–2017)에서 모듈형 그리퍼·Micro Push·구형 로봇을 연구했습니다. OZO(2022)에서는 DJI Drone SDK와 SLAM을 활용해 자율비행 시스템을 개발했습니다.</p></details>
      </section>
    </main>
  );
}
