import Navbar from "../components/Navbar";
import Link from "next/link";

function CompanyLayout({ children }) {
  return (
    <section className=" flex justify-center items-center  py-24">
      <div className=" container flex">
        <div className=" overflow-y-auto border-r border-gray-200 py-6 pr-12">
          <nav className="flex flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-4">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className=" grow ml-12 p-6 bg-gray-50">{children}</main>
      </div>
    </section>
  );
}
export default CompanyLayout;
