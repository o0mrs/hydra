
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(1);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
    return(
      <>
      <div className="navbar sm:hidden lg:flex pt-2 bg-[#302C42] lg:px-20 md:px-16 sm:px-4  text-[#292F36]">
  <div className="navbar-start  h-12">
    {/* logo */}
    <div className="Quicksand text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#C0B7E8] to-[#8176AF] flex mt-5"><img src='./logo.svg' class="mr-2 w-10 h-10 -ml-2 mt-2"/><div class="mt-2 text-3xl ml-1">HYDRA</div>
    </div>
  </div>
  <div className="navbar-center mt-6 Montserrat">
  <a className="btn btn-ghost text-white b normal-case text-base">HOME</a>
  <a className="btn btn-ghost text-white b normal-case text-base">SERVICES</a>
  <a className="btn btn-ghost text-white b normal-case text-base">TECHNOLOGIES</a>
  <a className="btn btn-ghost text-white b normal-case text-base">HOW TO</a>
  </div>
  <div className="navbar-end  h-12  pt-[1.3rem] text-2xl">
  <div>
  <button className=" Montserrat border-2  text-white  text-[0.8rem] px-6 py-2 relative rounded-[4rem]">
<div>CONTACT US</div>
  </button>
</div>
<div>
  <button className="text-[#343045] Montserrat  ml-10  bg-gradient-to-r from-[#756aa1] to-[#afa5dc] text-[0.8rem] px-6 py-2 relative rounded-[4rem]">
<div>JOIN HYDRA</div>
  </button>
</div>
  </div>
</div>





{/* mobile */}
<div className="lg:hidden top-0 ">
<div class="navbar bg-[#302C42]">
  <div class="flex-1">
    <a class="btn btn-ghost mt-2 normal-case text-xl text-[#C0B7E8]"><img src='./logo.svg' class="mr-2 text-[#C0B7E8] w-12 h-12 -ml-2"/><div class="-mt-0.5 ml-1 text-transparent bg-clip-text bg-gradient-to-b from-[#C0B7E8] to-[#8176AF]">HYDRA</div></a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end ">

      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          {/* <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span> */}
          {/* <div class="card-actions"> */}
            {/* <button class="btn btn-primary btn-block">View cart</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end ">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
        <i class="fa-solid fa-bars text-transparent bg-clip-text bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] text-xl mt-1"></i>          
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


</div>
      </>
    

    )
}
export default NavBar;