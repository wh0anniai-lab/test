export type CaseStudy = {
  slug: string;
  title: string;
  discipline: string;
  period: string;
  summary: string;
  flow: string[];
  chapters: [string, string][];
  metrics?: [string, string][];
  image?: string;
  url?: string;
};

export const studies: CaseStudy[] = [
  {
    slug: "flower-uploader", title: "FlowerUploader", discipline: "Computer vision / AX",
    period: "2026.10.04 — 10.23 · Windows · V1.03",
    summary: "리본 문구를 읽고 주문과 대조해 배송사진을 등록합니다. 맞는 사진이 아직 도착하지 않은 주문은 보류합니다.",
    flow: ["배송사진", "리본 검출", "OCR", "전체 후보 비교", "확정·보류", "사이트 등록", "결과 재확인", "Excel 보고"],
    metrics: [["5곳", "주문 사이트"], ["약 80건", "하루 최대 주문"], ["약 6,800쌍", "재계산한 사진·주문 후보"], ["3 → 0건", "동일 데이터 재검증 시 오등록"], ["287개", "프로그램·라이선스 서버 자동 테스트"]],
    chapters: [
      ["업무에서 출발한 매칭 규칙", "한 폴더에 여러 업체의 화환 사진이 섞여 들어왔습니다. 하루치 사진과 주문을 한꺼번에 비교하고, 서로의 최우선 후보이며 다른 후보와 충분한 차이가 날 때만 등록하도록 업무 규칙을 설계했습니다."],
      ["전송보다 중요한 등록 확인", "불확실한 사진은 사람이 확인합니다. 사이트에서 전송한 뒤 배송처리 화면을 다시 열어 사진이 한 장 증가했을 때만 성공으로 기록합니다. 결과가 불분명하면 자동 재전송을 멈춥니다."],
      ["현장 검증과 역할", "기획, 요구사항 정의, 업무 규칙 설계와 현장 검증을 맡고 Claude Code와 협업해 구현했습니다. 실제 운영 7회분의 판단 291건을 재현해 원인을 좁혔고, 같은 과거 데이터에서 잘못 등록되는 사진이 3건에서 0건으로 줄었습니다."],
    ],
  },
  {
    slug: "fatima-pharmacy", title: "창원파티마병원 약제부", discipline: "Internal web app / Workflow digitization",
    period: "2026 · 10월 조사 운영 화면 기준",
    summary: "월간 재고조사를 모바일·PC 공동 입력으로 전환했습니다. 두 사람이 독립적으로 실사하고 차이가 난 품목을 다시 확인합니다.",
    flow: ["조사 생성", "선반·목록 입력", "독립 실사", "차이 확인", "변경 이력", "기존 Excel 양식"],
    chapters: [
      ["현장에 맞춘 세 가지 입력 화면", "목록, 실제 선반 배치를 닮은 격자, 넓은 표 중 업무에 맞는 화면을 사용합니다. 입력 즉시 저장하고 다른 사용자의 변경을 동기화하며, 이미 입력된 값을 바꿀 때는 수정 충돌을 확인합니다."],
      ["숫자가 달랐을 때의 절차", "약장과 주사 카테고리에서는 두 실사자가 서로의 값을 보지 않고 입력합니다. 값이 다른 품목만 추려 재검수하고, 제출 후 값이 바뀌면 재제출이 필요한 상태로 표시합니다."],
      ["시작과 끝은 익숙한 Excel로", "업로드할 파일의 변경값·경고·오류를 미리 확인한 뒤 반영합니다. 변경·제출 이력을 남기고, 마감 결과는 병원에서 쓰던 취합 양식으로 내보냅니다."],
    ],
  },
  {
    slug: "nanogen", title: "Nanogen AI Agent", discipline: "Grounded AI / Research intelligence", period: "2026 · 연구용 프로토타입",
    summary: "논문·특허에서 추출한 수치와 원문 구절을 함께 저장합니다. 근거를 찾지 못한 값은 사실로 등록하는 단계에서 멈춥니다.",
    flow: ["검색", "추출", "원문 연결", "검증", "저장", "재사용"],
    chapters: [["한 값에서 원문까지", "추출값이 어느 구절에서 왔는지 추적할 수 있도록 원문 범위를 연결합니다. 사실, 해석, 가설, 미확인 정보를 구분합니다."], ["검증 단위", "오프라인 테스트 134개로 출처·인용·추출·분류·중복·매핑·실패 처리 등을 점검했습니다. 확보한 자료를 재사용합니다."]],
  },
  {
    slug: "dolboda", title: "돌보다", discipline: "Data pipeline / Web service", period: "2026 · 기획 총괄 및 전체 개발",
    image: "/images/dy-dolboda.jpg", url: "https://www.dolboda.kr/",
    summary: "수만 건의 시설 데이터를 돌봄 여건을 비교할 수 있는 지표로 바꿨습니다.",
    flow: ["공공데이터 수집", "정제", "정규화", "특성 추출", "지표 산출", "시설 비교"],
    chapters: [["비교할 수 있는 단위", "정원·현원과 인력·근속 관련 원자료를 시설 간 비교에 쓸 수 있는 지표로 재구성했습니다."], ["갱신을 고려한 운영", "원자료 수집부터 서비스 반영까지 자동 갱신 흐름을 만들고, 갱신 실패 시 기존 데이터로 서비스가 이어지도록 고려했습니다."]],
  },
  {
    slug: "four-season", title: "4season · stars", discipline: "Domain calculation / Boundary logic", period: "2026 · 웹서비스",
    image: "/images/dy-stars.jpg", url: "https://4season-web1.vercel.app/stars",
    summary: "같은 날짜 안에서도 결과가 달라지는 경계를 연도별 실제 절기 시각으로 계산합니다.",
    flow: ["시각 입력", "절기 계산", "구간 구조화", "경계 판정", "근거 출력"],
    chapters: [["경계를 지나는 시각", "생년월일과 시각을 해당 연도의 절기 시각과 비교해 구간을 판정하고, 다음 구간까지 남은 시간을 계산합니다."], ["알 수 없는 입력", "출생 시각 미상을 입력 상태로 다루고, 장기 주기를 실제 연월 구간으로 나눕니다. 두 대상의 비교와 판정 근거를 결과에 담았습니다."]],
  },
  {
    slug: "robotics", title: "Robotics & Autonomous Systems", discipline: "Robotics / Foundation", period: "2014–2017 · 2022",
    summary: "센서로 읽은 위치와 실제 움직임을 대조하며 제어를 개선했습니다. 연구실 이동 로봇에서 드론 자율비행까지 이어진 작업입니다.",
    flow: ["센싱", "위치 추정", "이동", "측정", "개선"],
    chapters: [["대학 연구실 · 2014–2015", "무인경비로봇에서 ROS·SLAM·Depth Camera를 사용해 장애물을 감지하고 모바일과 로봇을 연결했습니다."], ["KIST · 2016–2017", "Modular Gripper에서 센서로 파지 상태를 확인하고, Micro Push에서 모바일과 소형 로봇을 BLE로 연결했습니다. Spherical Robot에서는 전방향 이동과 SLAM을 실험했습니다."], ["OZO · 2022", "DJI Drone SDK와 SLAM을 활용한 자율비행 시스템을 개발했습니다. 추정 위치와 실제 동작이 어긋나는 구간을 찾아 수정했습니다."]],
  },
];
