import Link from "next/link";
import Image from "next/image";
import lecture from "@/public/images/lecture.jpg";

export function Portrait() {
  return <figure className="portrait">
    <div className="portrait-field character-field"><Image src="/images/illustrations/character.webp" width={1280} height={1280} alt="주황색 스웨터와 안경을 쓴 김동영의 픽셀 캐릭터" sizes="(max-width: 680px) 76vw, 31vw"/>
      <span className="portrait-tag">Research → Education</span></div>
    <figcaption><strong>김동영</strong> Developer · Founder · Educator</figcaption>
  </figure>;
}

export function AboutText() {
  return <div className="bio-rows">
    {[
      ["Research", "KIST에서 센서와 제어를 연구하고 OZO에서 드론의 추정 위치를 실제 움직임과 비교했습니다."],
      ["Build", "웹서비스와 내부 업무시스템을 설계합니다. 데이터가 들어오는 순간부터 사람이 결과를 확인할 때까지 연결합니다."],
      ["Operate", "맘잇 대표·CTO로 기획·개발·운영을 맡고 있습니다. 가티 공동대표·CTO로 게이밍 교육 플랫폼을 사업화했습니다."],
      ["Teach", "개발 중 만난 문제를 수업의 소재로 옮깁니다. 학습자가 직접 실행하고 고친 결과를 자기 말로 설명하도록 돕습니다."],
    ].map(([title,body])=><div key={title}><h3>{title}</h3><p>{body}</p></div>)}
  </div>;
}

export function Timeline() {
  return <section id="timeline" className="wrap section split"><div><span className="kicker">Career timeline</span><h2>걸어온 길</h2></div>
    <ol className="chronology">{[
      ["2026", "웹서비스 · 데이터 · AX", "돌보다·인플루잇·4season, Nanogen 실증, 약제부 웹앱과 FlowerUploader"],
      ["2026.09–", "이솔초등학교", "AI·SW 실습 수업 진행 중"],
      ["2026.04–06", "국립경상대학교", "AI·Python 기초 강의"],
      ["2022", "OZO", "드론 제어 앱과 SLAM 기반 자율비행 시스템 개발"],
      ["2020", "가티 공동대표 · CTO", "2022년까지 게이밍 교육 플랫폼 개발·사업화"],
      ["2018", "맘잇 설립", "대표 · CEO & CTO / 플랫폼 기획과 운영"],
      ["2016", "한국과학기술연구원(KIST)", "2017년까지 그리퍼·Micro Push·구형 로봇 연구"],
      ["2014", "대학 연구실", "ROS와 센서 융합을 활용한 무인경비로봇 개발"],
    ].map(([year,title,body])=><li key={title}><time>{year}</time><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
  </section>;
}

export function Education() {
  return <section id="teaching" className="section edu"><div className="wrap"><span className="kicker">Education</span><h2>Build it. Test it.<br/><em>Explain it.</em></h2>
    <div className="split"><div className="teaching-artwork"><Image className="classroom-art" src="/images/illustrations/teaching.webp" width={1280} height={960} sizes="(max-width: 680px) 90vw, 44vw" alt="학습자와 함께 코드와 로봇을 살펴보는 AI 실습 수업 일러스트"/>
    <details className="classroom-record"><summary>실제 대학 강의 현장 보기</summary><figure className="education-photo"><Image src={lecture} sizes="(max-width: 680px) 90vw, 44vw" alt="대학 강의실에서 수강생에게 설명하는 김동영"/></figure></details></div>
    <div className="lessons"><h3>현재 진행하는 수업</h3><p><strong>이솔초등학교 AI·SW</strong>　엔트리로 게임을 만들며 좌표와 알고리즘을 익히고, AI 윤리를 토론합니다.</p><p><strong>성인 온라인 AI 강의</strong>　자연어로 요구사항을 쓰고, 생성된 결과를 점검하고 고치는 실습을 진행합니다.</p>
    <h3>대학 강의</h3><p>국립경상대학교 AI·Python 기초 과정에서 변수와 반복문부터 pandas 데이터 처리와 시각화까지 다뤘습니다. (2026년 4–6월)</p>
    <h3>교육과정 설계</h3><p>기업·성인 대상 생성형 AI, 바이브 코딩, 업무자동화와 연구소 대상 논문·특허 근거 추적 실습을 설계합니다.</p></div></div></div>
  </section>;
}
