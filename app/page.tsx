import Link from "next/link";
import Image from "next/image";
import { ContactActions } from "@/components/layout/footer";
import { AboutText, Education, Timeline, Portrait } from "@/components/editorial";
import { ProjectSlider } from "@/components/project-slider";
import { ReviewWall } from "@/components/review-wall";


export default function Home() {
  return <main id="main">
    <section className="wrap cover">
      <div><p className="kicker"><i className="dot"/> 김동영 · AI 개발자 / 강사 / 대표</p>
        <h1 className="sequence refined"><span>Research</span><span>Build</span><span>Service</span><span>Education</span></h1>
        <p className="cover-deck">기술을 연구해 실제 서비스로 구현하고,<br/>그 경험을 다시 교육으로 연결합니다.</p>
        <ContactActions/>
      </div>
      <div className="cover-aside">
        <Image className="workspace-art" src="/images/illustrations/workspace.webp"
          width={1280} height={720} priority sizes="(max-width: 680px) 90vw, (max-width: 1400px) 39vw, 520px"
          alt="따뜻한 작업 공간에서 노트북과 함께하는 김동영의 픽셀 캐릭터"/>
        <div className="recent-work"><span>최근 현장 프로젝트</span>
          <Link href="/work/flower-uploader">OCR 배송사진 등록 자동화 ↗</Link>
          <Link href="/work/fatima-pharmacy">약제부 Excel 재고조사의 웹 전환 ↗</Link>
        </div>
      </div>
    </section>
    <section id="work" className="wrap section selected">
      <div className="section-heading"><div><span className="kicker">Projects / 2014–2026</span><h2>Selected work<span>.</span></h2></div><p>로봇 연구에서 현장 업무자동화까지.<br/>설계하고 운영하며 검증한 여섯 가지 작업입니다.</p></div>
      <ProjectSlider/>
    </section>
    <Education/>
    <section className="method section"><div className="wrap"><span className="kicker">How I work</span><h2>I redesign the workflow<span>.</span></h2><p className="section-lead">실제 업무가 안전하게 돌아가는 구조를 다시 설계합니다.</p>
      <ol className="steps">{[["Understand","사용자를 만나 일이 멈추는 순간과 예외를 찾습니다."],["Structure","입력 데이터와 판단 기준, 사람이 확인할 조건을 정합니다."],["Build","웹·자동화·AI를 현장의 도구와 연결합니다."],["Validate","운영 기록으로 오류를 재현하고 같은 조건에서 다시 검증합니다."]].map(([a,b],i)=><li key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></li>)}</ol></div>
    </section>
    <section id="about" className="wrap section split"><div><span className="kicker">About / 김동영</span><h2>연구실에서<br/>운영 현장으로.</h2><Portrait/><Link href="/about" className="text-link">프로필 보기 →</Link></div><AboutText/></section>
    <section className="wrap section split"><div><span className="kicker">Skills</span><h2>기술과 도구</h2></div><dl className="skill-list">
      {[["AI / Agent","ChatGPT · Claude · Gemini · Grounding · Agent · RAG 구조"],["AX / Automation","OCR · OpenCV · Azure AI Vision · Playwright · Fuzzy Matching · PySide6"],["Data","Python · pandas · NumPy · SQLite · 데이터 파이프라인 · 특성 설계"],["Robotics","ROS · SLAM · 센서 융합 · DJI Drone SDK · BLE · C/C++"],["Product / Web","웹서비스 · 내부 업무 앱 · 업무 디지털화 · 반응형 UX"]].map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}
    </dl></section>
    <Timeline/>
    <section id="reviews" className="section"><div className="wrap"><h2>Reviews</h2></div><ReviewWall/></section>
  </main>;
}
