import Link from "next/link";
import { FaBlog, FaBuffer, FaMendeley } from "react-icons/fa6";
export default function DashboardMaster(props) {
  return (
    <main>
      <section className="relative ">
        <div className=" flex gap-[30px]">
          <div className="w-[300px] h-screen">
            <div className="px-4 py-5 border-r border-gray-300 h-screen">
              <div className="logo">
                <img src="/images/logo.svg" alt="" />
              </div>
              <br />
              <br />
              <nav>
                <ul>
                  <li>
                    <Link className="navLink" href="/dashboard">
                      <FaBuffer /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" href="/dashboard/service">
                      <FaMendeley /> Service
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" href="/dashboard/blog">
                      <FaBlog /> Blog
                    </Link>
                  </li>
                </ul>
                <Link className="navLink" href="/">
                  <button
                    
                    type="submit"
                    className="w-full py-3 mt-[40px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                  >
                    Log out
                  </button>
                    </Link>
                
              </nav>
            </div>
          </div>
          <div className="w-full">{props.children}</div>
        </div>
      </section>
    </main>
  );
}
