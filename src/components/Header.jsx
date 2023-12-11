import {AiFillBell, AiOutlineSearch, AiFillYoutube} from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <header className="flex justify-between items-center p-4 bg-[#0F0F0F] text-white">
    <Link to={'/'} className="flex items-center gap-3 text-3xl">
        <AiFillYoutube className="text-red-500 text-5xl"/>
        <h1>Youtube</h1>
    </Link>
    
    <form className="flex items-center bg-white rounded">
        <input className="rounded px-4 py-1 text-black outline-none" placeholder="ara.." type="text" />
        <button className="mr-2 text-black outline-none"><AiOutlineSearch/></button>
    </form>

    <AiFillBell className="text-2xl"/>
   </header>
  )
}

export default Header;
