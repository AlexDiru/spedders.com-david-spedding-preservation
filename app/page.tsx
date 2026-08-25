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
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
