import Link from "next/link";
import { basePath } from "./basepath";

export default function Home() {
  return (
    <table cellPadding={0} cellSpacing={0} style={{ width: "100%", height: "100vh" }}>
      <tbody>
        <tr>
          <td style={{ width: "100%", height: "100%", textAlign: "center", verticalAlign: "middle" }}>
            <table cellPadding={0} cellSpacing={0} style={{ width: 600, margin: "0 auto" }}>
              <tbody>
                <tr>
                  <td className="black-bar-v" style={{ height: 150, verticalAlign: "middle" }}></td>
                  <td style={{ width: 10 }}></td>
                  <td style={{ width: 137, height: 150, verticalAlign: "middle" }}>
                    <img src={`${basePath}/images/dd2-150.jpg`} alt="David Spedding" width={137} height={150} />
                  </td>
                  <td style={{ width: 10 }}></td>
                  <td style={{ width: 442, height: 150, textAlign: "left", verticalAlign: "bottom" }} className="page-title">
                    David Spedding
                  </td>
                </tr>

                <tr>
                  <td className="black-bar-v" style={{ height: 10 }}></td>
                </tr>
                <tr>
                  <td colSpan={5} className="black-bar-h"></td>
                </tr>

                <tr>
                  <td colSpan={4} className="small-text" style={{ textAlign: "left", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                    &copy; 2003 David Spedding
                  </td>
                  <td style={{ textAlign: "right", verticalAlign: "middle", whiteSpace: "nowrap" }} className="nav-links">
                    Rest in peace, our son, brother, uncle, friend and colleague{" "}
                    <b>[<Link href="/portfolio">ENTER</Link>]</b>
                  </td>
                </tr>

                {/* Context */}
                <tr><td colSpan={5} style={{ height: 30 }}></td></tr>
                <tr>
                  <td colSpan={5} style={{ textAlign: "left", verticalAlign: "top" }} className="context-text">
                    <p>
                      This is a preserved version of David Spedding&#39;s journalism portfolio website,
                      originally at <b>www.spedders.com</b>.
                    </p>
                    <p>
                      David was a freelance journalist who wrote for publications
                      including Arena, Heat, Attitude, Radio Times, and the Sunday
                      Times. His work included Q&amp;A interviews
                      and features covering shows such as Six Feet Under, The Sopranos,
                      The West Wing, Bob &amp; Rose, Will &amp; Grace, Sex and the City,
                      Smallville, Charmed, and ER, as well as interviews with figures
                      like Stephen Fry, James Gandolfini, Jennifer Aniston, and Russell
                      T Davies.
                    </p>
                    <p>
                      The original site was built in PHP by Stuart Ford (Rhydio Ltd) in
                      December 2001, with updates through April 2003. This rebuild attempts to 
                      faithfully preserves all 49 articles, images, and the original
                      visual design. This rebuild has been created by Alex Spedding - 
                      David's nephew - using the original files from Stuart Ford. 
                    </p>
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
