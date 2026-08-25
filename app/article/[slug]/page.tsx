import Link from "next/link";
import { notFound } from "next/navigation";
import data from "../../data.json";
import type { SiteData } from "../../types";
import { existsSync } from "fs";
import { join } from "path";
import { basePath } from "../../basepath";

const siteData = data as SiteData;

export function generateStaticParams() {
  return Object.keys(siteData.articles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const article = siteData.articles[slug];
    if (!article) return { title: "Not Found" };
    return { title: `David Spedding - ${article.title}` };
  });
}

function findArticleContext(slug: string) {
  for (const section of siteData.sections) {
    for (const show of section.shows) {
      for (const art of show.articles) {
        if (art.slug === slug) {
          return { show: show.title, publication: art.publicationName, date: art.date, subject: art.subject };
        }
      }
    }
  }
  return null;
}

function hasThumb(name: string): boolean {
  return existsSync(join(process.cwd(), "public", "images", "articles", `${name}_thumb.jpg`));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = siteData.articles[slug];
  if (!article) notFound();

  const context = findArticleContext(slug);
  const showThumb = article.image && hasThumb(article.image);

  return (
    <table cellPadding={0} cellSpacing={0} style={{ width: "100%", height: "100%" }}>
      <tbody>
        <tr>
          <td style={{ width: "100%", height: "100%", textAlign: "center", verticalAlign: "middle" }}>
            <table cellPadding={0} cellSpacing={0} style={{ width: 600, margin: "0 auto" }}>
              <tbody>
                {/* Header */}
                <tr>
                  <td className="black-bar-v" style={{ height: 75, verticalAlign: "middle" }}></td>
                  <td style={{ width: 10 }}></td>
                  <td style={{ width: 69, height: 75, verticalAlign: "middle" }}>
                    <img src={`${basePath}/images/dd2-75.jpg`} alt="David Spedding" width={69} height={75} />
                  </td>
                  <td style={{ width: 10 }}></td>
                  <td style={{ width: 510, height: 75, textAlign: "left", verticalAlign: "bottom" }} className="page-title">
                    <a id="top"></a>{article.title}
                  </td>
                </tr>

                <tr>
                  <td className="black-bar-v" style={{ height: 10 }}></td>
                </tr>
                <tr>
                  <td colSpan={5} className="black-bar-h"></td>
                </tr>

                {/* Content area */}
                <tr>
                  <td colSpan={3} style={{ textAlign: "center", verticalAlign: "top" }}>
                    {showThumb && (
                      <div style={{ paddingTop: 10 }} className="thumb-caption">
                        <img
                          src={`${basePath}/images/articles/${article.image}_thumb.jpg`}
                          alt={article.title}
                          width={120}
                          height={160}
                          style={{ border: 0 }}
                        />
                        <br />
                        full size image
                      </div>
                    )}
                  </td>
                  <td className="vert-separator"></td>
                  <td style={{ textAlign: "left", verticalAlign: "top" }}>
                    <p style={{ textAlign: "right" }} className="nav-links">
                      [<Link href="/portfolio"><b>BACK</b></Link>]
                      {" "}
                      [<Link href="/portfolio"><b>MENU</b></Link>]
                    </p>
                    <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
                  </td>
                </tr>

                {/* Footer */}
                <tr><td colSpan={3}></td><td className="vert-separator"></td></tr>
                <tr>
                  <td colSpan={5} className="black-bar-h"></td>
                </tr>
                <tr><td colSpan={5} style={{ height: 10 }}></td></tr>
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", verticalAlign: "top", height: 20, whiteSpace: "nowrap" }} className="nav-links">
                    &copy; 2003 David Spedding
                    <span style={{ display: "inline-block", width: 75 }}></span>
                    {" "}[<a href="#top"><b>TOP</b></a>]
                    {" "}[<Link href="/portfolio"><b>BACK</b></Link>]
                    {" "}[<Link href="/portfolio"><b>MENU</b></Link>]
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
