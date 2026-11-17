import Link from "next/link";
import { ReviewWall } from "@/components/review-wall";

export const metadata = { title: "실강 후기 | 김동영" };

export default function ReviewsPage() {
  return <main id="main" className="review-page">
    <div className="wrap"><p className="kicker">Teaching / Reviews</p><h1>실강 후기<span>.</span></h1>
      <nav className="review-nav" aria-label="강의"><Link href="/#teaching">강의 소개</Link><Link href="/reviews" aria-current="page">실강 후기</Link></nav>
    </div>
    <ReviewWall />
  </main>;
}
