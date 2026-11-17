import Link from "next/link";
import { notFound } from "next/navigation";
import { StudyArt } from "@/components/study-art";
import { studies } from "@/lib/data/work";

type Props = { params: {slug: string} };
export const dynamicParams = false;
export function generateStaticParams() { return studies.map(({slug})=>({slug})); }
export function generateMetadata({params}: Props) {
  const study = studies.find(s=>s.slug===params.slug);
  return { title: study?.title + " | 김동영", description: study?.summary };
}

export default function Project({params}: Props) {
  const index = studies.findIndex(s=>s.slug===params.slug);
  if(index<0) notFound();
  const study = studies[index];
  const next = studies[(index+1)%studies.length];
  return <main id="main" className="wrap detail">
    <Link href="/#work" className="text-link">← Selected work</Link>
    <header className="detail-heading"><p className="kicker">0{index+1} / {study.discipline}</p><h1>{study.title}</h1><p>{study.period}</p></header>
    <div className="split"><div><p className="detail-intro">{study.summary}</p>
    {study.url && <a className="text-link" href={study.url} target="_blank" rel="noreferrer">서비스 열기 ↗</a>}
    </div><StudyArt study={study}/></div>
    {study.metrics && <dl className="facts">{study.metrics.map(([n,label])=><div key={label}><dt>{label}</dt><dd>{n}</dd></div>)}</dl>}
    <h2 className="subhead">업무 흐름</h2><ol className="flow">{study.flow.map(s=><li key={s}>{s}</li>)}</ol>
    <div className="chapters">{study.chapters.map(([t,b])=><section key={t}><h2>{t}</h2><p>{b}</p></section>)}</div>
    <Link className="text-link" href={"/work/"+next.slug}>다음 사례 · {next.title} →</Link>
  </main>;
}
