import { Link } from "react-router-dom";

export default function InfoSections(){
  return(
        <nav className="sticky top-0 bg-gray-950 ">
          <ul className="flex-wrap sm:pb-1 border-b-2 flex justify-around align-top">
            <li className="px-2">
              <Link to='business/'>Business</Link>
            </li>
            <li className="px-2">
              <Link to='/entertainment'>Entertainment</Link>
            </li>
            <li className="px-2">
              <Link to='/general'>General</Link>
            </li>
            <li className="px-2">
              <Link to='/health'>Health</Link>
            </li>
            <li className="px-2">
              <Link to='/science'>Science</Link>
            </li>
            <li className="px-2">
              <Link to='/sports'>Sports</Link>
            </li>
            <li className="px-2">
              <Link to='/technology'>Technology</Link>
            </li>
          </ul>
        </nav>
  )
}
