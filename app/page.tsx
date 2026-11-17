import Link from "next/link";
import { ContactActions } from "@/components/layout/footer";
import { AboutText, Education, Portrait, Timeline } from "@/components/editorial";
import { StudyArt } from "@/components/study-art";
import { studies } from "@/lib/data/work";

export default function Home() {
  return <main id="main">
    <section className="wrap cover">
      <div><p className="kicker"><i className="dot"/> 김동영 · AI 개발자 / 강사 / 대표</p>
        <h1 className="sequence">Research<br/><i>→</i> Build<br/><i>→</i> Service<br/><i>→</i> Education</h1>
        <p className="cover-deck">기술을 연구해 실제 서비스로 구현하고,<br/>그 경험을 다시 교육으로 연결합니다.</p>
        <ContactActions/>
      </div>
      <div className="cover-aside"><Portrait/>
        <div className="recent-work"><span>최근 현장 프로젝트</span>
          <Link href="/work/flower-uploader">OCR 배송사진 등록 자동화 ↗</Link>
          <Link href="/work/fatima-pharmacy">약제부 Excel 재고조사의 웹 전환 ↗</Link>
        </div>
      </div>
    </section>
    <section id="work" className="wrap section selected">
      <div className="section-heading"><div><span className="kicker">Projects / 2014–2026</span><h2>Selected work<span>.</span></h2></div><p>로봇 연구에서 현장 업무자동화까지.<br/>설계하고 운영하며 검증한 여섯 가지 작업입니다.</p></div>
      <div className="case-grid">{studies.map((s,index)=><article key={s.slug} className={`work-card work-${index+1}`}>
        <div className="work-copy"><p className="kicker"><b>{String(index+1).padStart(2,"0")}</b> {s.discipline}</p><h3><Link href={"/work/"+s.slug}>{s.title}</Link></h3>
          <p>{s.summary}</p>{index===0 && <p className="case-stat"><strong>3 → 0건</strong> 동일 과거 데이터 재검증 시 오등록</p>}
          <Link className="text-link" href={"/work/"+s.slug} aria-label={s.title+" 사례 읽기"}>사례 읽기 →</Link></div>
        <Link className="art-link" href={"/work/"+s.slug}><StudyArt study={s}/></Link>
      </article>)}</div>
    </section>
    <section className="method section"><div className="wrap"><span className="kicker">How I work</span><h2>I redesign the workflow<span>.</span></h2><p className="section-lead">실제 업무가 안전하게 돌아가는 구조를 다시 설계합니다.</p>
      <ol className="steps">{[["Understand","사용자를 만나 일이 멈추는 순간과 예외를 찾습니다."],["Structure","입력 데이터와 판단 기준, 사람이 확인할 조건을 정합니다."],["Build","웹·자동화·AI를 현장의 도구와 연결합니다."],["Validate","운영 기록으로 오류를 재현하고 같은 조건에서 다시 검증합니다."]].map(([a,b],i)=><li key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></li>)}</ol></div>
    </section>
    <section id="about" className="wrap section split"><div><span className="kicker">About / 김동영</span><h2>연구실에서<br/>운영 현장으로.</h2><Link href="/about" className="text-link">프로필 보기 →</Link></div><AboutText/></section>
    <Timeline/><Education/>
    <section className="wrap section split"><div><span className="kicker">Skills</span><h2>기술과 도구</h2></div><dl className="skill-list">
      {[["AI / Agent","ChatGPT · Claude · Gemini · Grounding · Agent · RAG 구조"],["AX / Automation","OCR · OpenCV · Azure AI Vision · Playwright · Fuzzy Matching · PySide6"],["Data","Python · pandas · NumPy · SQLite · 데이터 파이프라인 · 특성 설계"],["Robotics","ROS · SLAM · 센서 융합 · DJI Drone SDK · BLE · C/C++"],["Product / Web","웹서비스 · 내부 업무 앱 · 업무 디지털화 · 반응형 UX"]].map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}
    </dl></section>
  </main>;
}
