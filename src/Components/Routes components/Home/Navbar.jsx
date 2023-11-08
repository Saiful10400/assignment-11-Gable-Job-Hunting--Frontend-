import { Link, NavLink } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import {  useContext, useState } from "react";
import logo from "../../../../public/img/logo.png"
import { parentProvider } from "../../Context Api/DataProvider";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [scroll,setScroll]=useState(false)

    
 
    document.addEventListener("scroll",()=>{
       
        if(window.scrollY <50){
            setScroll(false)
        }
        else if(window.scrollY>50){
            setScroll(true)
        }
    })
 

 

  let li = (
    <>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/All_Jobs"}>
        All Jobs
      </NavLink>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/Applied_Jobs"}>
        Applied Jobs
      </NavLink>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/Add_A_Job"}>
        Add a Job
      </NavLink>
      <NavLink className={"monsera"} onClick={() => setMenu(false)} to={"/My_Jobs"}>
        My Jobs
      </NavLink>
      <NavLink className={"/Blog"} onClick={() => setMenu(false)} to={"/Blog"}>
        Blogs
      </NavLink>
    </>
  );
  const{user,signout}=useContext(parentProvider)
  const[show,setShow]=useState(false)
  window.onclick=()=>{
    setShow(false)
  }

  const buttonHandle=(event)=>{
    setShow(!show)
    event.stopPropagation()
  }
  // logout.
  const logoutHandle=(e)=>{
    e.stopPropagation()
    signout()
  }
  return (
    <>
      <div className="sticky z-30 top-0">
        {/* sm screen slider handle */}
        <div className={`flex justify-between md:hidden text-2xl transition-all duration-300 ${scroll?"bg-white py-2   shadow-lg":"bg-[#D0FED5] py-2"} font-bold `}>
          <button className="text-4xl" onClick={() => setMenu(!menu)}>
            {!menu ? <AiOutlineMenu></AiOutlineMenu> : <RxCross1></RxCross1>}
          </button>
          <h1>
            <Link to={"/"}>Goto site</Link>
          </h1>
        </div>

        {/* start from md screen. */}
        <div className={`${scroll?"bg-white py-4 shadow-lg":"bg-[#D0FED5] py-5"} hidden lg:block transition-all duration-300  text-base font-medium border-b border-[#C1F5C6] text-[#333333]`}>
          <div className="flex justify-between items-center w-[1400px] mx-auto">
            <div><img className="w-16 h-12 object-contain" src={logo} alt="" /></div>
            <ul className=" text-base font-medium hidden md:flex justify-center items-center gap-6">
              {li}
            </ul>
            <div>

            <Link to={"/Login"} className={`btn bg-gradient-to-r from-[#38A745] from-0%  to-[#4CCE5B] to-60% text-base font-medium w-28 h-12 text-white ${user? "hidden" : ""}`}>Login</Link>
            <div className={`${!user? "hidden" : ""} relative`}> 


            <div className={`bg-red-500 w-36 h-20 rounded-lg items-center absolute top-[110%] -left-[80%]  justify-center ${show? "flex" : "hidden"} `}>
              <button onClick={logoutHandle} className="btn btn-sm btn-warning">Logout</button>
              </div>

              <button onClick={buttonHandle}><img className="w-14 h-14 rounded-full object-contain" src={user?.photoURL}  /></button>
                
            </div>
             
              
             
              </div>
          </div>
        </div>
      </div>

      {/* handle sliding in sm screen. */}
      <div
        className={`${
          menu ? "right-[0%]" : "right-full"
        } transition-all duration-500 flex top-[53px] z-30 absolute`}
      >
        <div className={`bg-red-400 w-[50vw] h-[94vh] `}>
          <ul className="flex flex-col text-center font-bold gap-5 mt-3">
            {li}
          </ul>
        </div>
        <div
          onClick={() => setMenu(false)}
          className="w-[50vw] h-[94vh]   "
        ></div>
      </div>
    </>
  );
};

export default Navbar;
