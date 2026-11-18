import Link from "next/link";
import { AboutText, Portrait } from "@/components/editorial";
export const metadata = {title: "소개 | 김동영"};
export default function About(){
  return <main id="main" className="wrap detail">
    <span className="kicker">About</span><div className="split"><div><h1>김동영</h1>
    <p className="detail-intro">I connect research, systems, operations, and education.</p><p>연구에서 시작한 기술을 세상에 구현하고, 그 경험을 다시 교육으로 연결합니다.</p></div><Portrait/></div><AboutText/>
    <h2 className="subhead">교육과 자격</h2><p>서초 AI 칼리지 with KAIST와 NIA 디지털튜터 양성과정을 이수하고 글로벌 AI 협회 AI 강사 자격을 취득했습니다. 경기도 디지털 강사 양성과정은 이수 중입니다.</p>
    <div className="profile-links"><Link className="text-link" href="/#timeline">경력 타임라인 →</Link><Link className="text-link" href="/#teaching">강의 현장 →</Link></div>
  </main>;
}
