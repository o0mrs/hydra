import {React} from 'react';
const Foot = ()=>{
    return(
        <footer className="footer text-[#FFF] bg-[#302C42] pt-32 p-10 mt-32 text-base">
  <div>
<div className="text-[#FFF] flex text-xl mb-2">
<div className="Quicksand text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#C0B7E8] to-[#8176AF] flex mt-5"><img src='./logo.svg' class="mr-2 w-10 h-10 -ml-2 mt-2"/><div class="mt-2 text-3xl ml-1">HYDRA</div>
    </div>
</div>
    <p>Task deadlines and scheduling <br/>applications with various benefits and<br/> advantages</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    )
}
export default Foot