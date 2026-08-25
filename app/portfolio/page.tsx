import Link from "next/link";
import data from "../data.json";
import type { SiteData } from "../types";
import { basePath } from "../basepath";

const siteData = data as SiteData;

export const metadata = {
  title: "David Spedding - Portfolio",
};

function ShowTable({ show }: { show: { title: string; articles: { subject: string; publicationName: string; date: string; slug: string }[] } }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <table className="show-tab" style={{ width: "40%" }} cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left", padding: "1px 3px" }}>
              <b>{show.title}</b>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="show-table" style={{ width: "100%" }} cellPadding={0} cellSpacing={0}>
        <tbody>
          {show.articles.map((article, i) => (
            <tr key={i}>
              <td style={{ textAlign: "left", width: "60%", padding: "1px 3px" }}>
                <Link href={`/article/${article.slug}`}>
                  <b>{article.subject}</b>
                </Link>
              </td>
              <td style={{ textAlign: "left", width: "20%", padding: "1px 3px" }}>
                {article.date}
              </td>
              <td style={{ textAlign: "left", width: "20%", padding: "1px 3px" }}>
                {article.publicationName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Portfolio() {
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
                    <a id="top"></a>Online Portfolio
                  </td>
                </tr>

                {/* Spacer + line */}
                <tr>
                  <td className="black-bar-v" style={{ height: 10 }}></td>
                </tr>
                <tr>
                  <td colSpan={5} className="black-bar-h"></td>
                </tr>

                {/* Nav + vertical bar column */}
                <tr>
                  <td colSpan={3}></td>
                  <td className="vert-separator"></td>
                  <td style={{ textAlign: "left", verticalAlign: "top" }}>
                    <p style={{ textAlign: "right" }} className="nav-links">
                      [<Link href="/"><b>BACK</b></Link>]
                      {" "}
                      [<Link href="/portfolio"><b>MENU</b></Link>]
                    </p>

                    {/* Sections */}
                    {siteData.sections.map((section) => (
                      <div key={section.id}>
                        <table cellPadding={2} cellSpacing={0} style={{ width: "100%", marginBottom: 10 }}>
                          <tbody>
                            <tr>
                              <td className="section-header" style={{ textAlign: "left", whiteSpace: "nowrap", width: "100%" }}>
                                <a id={section.id}></a>{section.title}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {section.shows.map((show) => (
                          <ShowTable key={show.confId} show={show} />
                        ))}
                      </div>
                    ))}
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
                    {" "}[<Link href="/"><b>BACK</b></Link>]
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
