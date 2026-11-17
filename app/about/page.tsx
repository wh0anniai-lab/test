import Link from "next/link";
import { AboutText, Portrait } from "@/components/editorial";
export const metadata = {title: "소개 | 김동영"};
export default function About(){
  return <main id="main" className="wrap detail">
    <span className="kicker">About</span><div className="split"><div><h1>김동영</h1>
    <p className="detail-intro">I connect research, systems, operations, and education.</p><p>로봇 R&D에서 출발해 창업과 드론 AI 개발을 거쳤습니다. 최근에는 사진 등록 자동화와 약제부 재고조사 웹앱을 만들며 현장의 업무 규칙을 소프트웨어로 옮겼습니다.</p></div><Portrait/></div><AboutText/>
    <h2 className="subhead">교육과 자격</h2><p>서초 AI 칼리지 with KAIST와 NIA 디지털튜터 양성과정을 이수하고 글로벌 AI 협회 AI 강사 자격을 취득했습니다. 경기도 디지털 강사 양성과정은 이수 중입니다.</p>
    <div className="profile-links"><Link className="text-link" href="/#timeline">경력 타임라인 →</Link><Link className="text-link" href="/#teaching">강의 현장 →</Link><a className="text-link" href="https://www.influit.kr/">기획·개발한 인플루잇 ↗</a></div>
  </main>;
}
