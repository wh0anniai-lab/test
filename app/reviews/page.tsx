import Link from "next/link";
import { ReviewWall } from "@/components/review-wall";

export const metadata = { title: "Reviews | 김동영" };

export default function ReviewsPage() {
  return <main id="main" className="review-page">
    <div className="wrap"><p className="kicker">Teaching / Reviews</p><h1>Reviews<span>.</span></h1>
      <nav className="review-nav" aria-label="강의"><Link href="/#teaching">Education</Link><Link href="/reviews" aria-current="page">Reviews</Link></nav>
    </div>
    <ReviewWall />
  </main>;
}
