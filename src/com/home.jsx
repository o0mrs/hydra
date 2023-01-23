/* 
Fonts Name (same as the className)
Poppins
roboto

 */
import './css/App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProgressiveImage from "react-progressive-image-loading";
import NavBar from './parts/navbar';
import Foot from './parts/footbar';
const Home = ()=>{
let navigate = useNavigate();
let tab = 0
if(tab == 0){
    return(
      
<div className='bg-[#302C42] '>
<NavBar />
<div className='lg:mt-3 '>
<div class="lg:flex sm:grid  lg:pl-10">
  <div class="lg:w-1/2 lg:pr-4 lg:mt-[13vh] px-5">
  <div class="lg:w-1/2 lg:pl-4 mt-7 sm:flex   w-full lg:hidden">
  <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./mian.png"
    render={(src, style) => <img src={src} style={style} className='rounded-3xl mb-10 rounded-bl-[14rem] rounded-tr-[6rem] rounded-tl-[6rem] rounded-br-[6rem] ' />}
/>
    </div>
    <div class="Montserrat sm:text-4xl lg:text-5xl text-white sm:leading-[4rem] lg:leading-[4rem]"><span class="text-transparent bg-clip-text bg-gradient-to-b from-[#C0B7E8] to-[#8176AF]">Dive</span> Into The Depths <br class="sm:hidden lg:block"/> Of <span class="text-transparent bg-clip-text bg-gradient-to-b from-[#C0B7E8] to-[#8176AF]">Virtual Reality</span></div>
    <div class="Montserrat sm:text-md lg:text-base sm:hidden lg:block text-[#dadada] mt-4 Quicksand max-w-[34rem] lg:leading-[2rem] sm:leading-[1.8rem]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae </div>
  <div className='sm:grid lg:block'>
    <button class="bg-gradient-to-r from-[#756aa1] to-[#afa5dc] text-[0.8rem] Montserrat sm:px-8 lg:px-14 sm:py-4 lg:py-5 text-[#343045] rounded-full mt-7">BUILD YOUR WORLD</button>
    </div>
    </div>
  <div class="lg:w-1/2 lg:pl-4 mt-7 sm:flex   w-full lg:hidden">
 
    </div>
    <div class="lg:w-1/2 lg:pl-4 mt-[6vh] sm:hidden lg:flex justify-center">

<img src={'./mian.png'}  className='rounded-bl-[14rem] rounded-tr-[6rem] rounded-tl-[6rem] rounded-br-[6rem]   h-[60vh]  ' />
    </div>
</div>
<div className='grid place-items-center Montserrat'>
<div className='text-white sm:grid mt-16 lg:grid lg:grid-cols-3 place-items-center sm:px-5 bg-gradient-to-r rounded-full from-[#211E2E] via-[#2f2a47] to-[#211E2E] w-[80vw] h-52'>
<div className='text-xl flex sm:text-center lg:text-left'>
  <div>
  <i class="fa-solid fa-location-dot text-6xl mr-5"></i>
  </div>
  <div className='grid'>
  <div>
Pay Us a Visit
</div>
  <div className='mt-2 text-sm'>
  Somewhere in jordan
  </div>
  </div>

</div>
<div className='sm:hidden lg:flex'>
<div>
  <i class="fa-solid fa-envelope text-6xl mr-5"></i>
  </div>
  <div className='grid'>
  <div>
  Send Us a Message
</div>
  <div className='mt-2 text-sm'>
  contact@skyex.me
  </div>
  </div>

</div>
<div className='sm:hidden lg:flex'>
<div>
  <i class="fa-solid fa-phone-volume text-6xl mr-5"></i>
  </div>

  <div className='grid'>
  <div>
  Give us a call
</div>
  <div className='mt-2 text-sm'>
  (110) 1111-1010
  </div>
  </div>

</div>

</div>
</div>

<div class="lg:flex sm:grid mt-32">

  <div class="lg:w-1/2 flex place-items-center justify-center "> 
  <div>
    
  <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./one.svg"
    render={(src, style) => <img src={src} style={style} className='rounded-5xl rounded-br-[13rem] sm:px-8 lg:px-0 rounded-tl-[13rem] rounded-bl-[5rem] rounded-tr-[5rem] ' />}
/>
  </div>

</div>
  <div class="lg:w-1/2 lg:pl-20 sm:px-5 gird place-items-center h-full text-left">
    <div className='text-[#FFF] Montserrat lg:text-5xl sm:mt-12 sm:leading-[2rem] sm:text-2xl sm:text-center lg:text-left lg:leading-[4rem]'>ABOUT<br className='sm:hidden lg:hidden' /> HYDRA VR</div>
    <div className='text-[#dadada]  lg:w-[90%] lg:text-2xl lg:mt-12 sm:mt-5 sm:text-xl sm:px-2 '>
    The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now !
    <div className='sm:grid lg:block'>
    <button class="bg-gradient-to-r from-[#756aa1] to-[#afa5dc] text-[0.8rem] Montserrat sm:px-8 lg:px-14 sm:py-4 lg:py-2 text-[#343045] rounded-full mt-10">LET"S GET IN TOUCH</button>
    </div>
    </div>
    </div>
</div>
<div class="lg:flex sm:grid sm:mt-6 marker:lg:mt-32">

  <div class="lg:w-1/2 sm:px-6 lg:pl-10 sm:order-1 flex justify-center lg:order-1"> 
  <div className='text-white text-left Montserrat lg:text-5xl sm:mt-12 sm:leading-[2.5rem] sm:text-center lg:text-left sm:text-2xl lg:leading-[5rem] text'>WHY BUILD<br />WHY HYDRA?<i class="fa-solid sm:hidden lg:inline fa-arrow-right ml-5"></i></div>
 
</div>
  <div class="lg:w-1/2 lg:pl-20 sm:order-2 lg:order-2 flex justify-center lg:pt-16 Montserrat text-white sm:px-5 text-left">
    <div class="max-w-[90%] sm:hidden lg:block">
    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
    </div>


    </div>
    
</div>
<div className="lg:flex sm:grid place-items-center justify-around mt-12 Montserrat">
<div className=" pb-12 px-8 lg:w-96 sm:w-[80vw] bg-gradient-to-r  from-[#211E2E] via-[#2f2a47] to-[#211E2E]  rounded-2xl">
<div className="flex justify-center mt-9">
<ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./a.svg"
    render={(src, style) => <img src={src} style={style} className='rounded-full border-[.3rem] border-[#0E0E0E] w-[12rem] h-[12rem]' />}
/>
</div>
<div className="text-white text-center text-lg lg:text-3xl sm:mt-4 lg:mt-7">
  <div className=" w-auto">
  SIMUlATION
  </div>
  
</div>
<div className="text-white text-center  mt-6 text-lg">
  <div className=" text- text-left w-auto">
  Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
  </div>
  
</div>
<div className="flex justify-center">
<button class="bg-gradient-to-r from-[#756aa1] to-[#afa5dc] lg:text-lg text-[0.8rem] Montserrat sm:px-8 lg:px-20 sm:py-4 lg:py-4 text-[#343045] rounded-full mt-10">TRY IT NOW</button>

</div>
</div>
<div className=" sm:mt-9 lg:mt-0 pb-12 px-8 lg:w-96 sm:w-[80vw] bg-gradient-to-r  from-[#211E2E] via-[#2f2a47] to-[#211E2E]  rounded-2xl">
<div className="flex justify-center mt-9">
<ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./a.svg"
    render={(src, style) => <img src={src} style={style} className='rounded-full border-[.3rem] border-[#0E0E0E] w-[12rem] h-[12rem]' />}
/>
</div>
<div className="text-white text-center text-lg lg:text-3xl sm:mt-4 lg:mt-7">
  <div className=" w-auto">
  SIMUlATION
  </div>
  
</div>
<div className="text-white text-center  mt-6 text-lg">
  <div className=" text- text-left w-auto">
  Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
  </div>
  
</div>
<div className="flex justify-center">
<button class="bg-gradient-to-r from-[#756aa1] to-[#afa5dc] lg:text-lg text-[0.8rem] Montserrat sm:px-8 lg:px-20 sm:py-4 lg:py-4 text-[#343045] rounded-full mt-10">TRY IT NOW</button>

</div>
</div>
<div className=" sm:mt-9 lg:mt-0 pb-12 px-8 lg:w-96 sm:w-[80vw] bg-gradient-to-r  from-[#211E2E] via-[#2f2a47] to-[#211E2E]  rounded-2xl">
<div className="flex justify-center mt-9">
<ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./a.svg"
    render={(src, style) => <img src={src} style={style} className='rounded-full border-[.3rem] border-[#0E0E0E] w-[12rem] h-[12rem]' />}
/>
</div>
<div className="text-white text-center text-lg lg:text-3xl sm:mt-4 lg:mt-7">
  <div className=" w-auto">
  SIMUlATION
  </div>
  
</div>
<div className="text-white text-center  mt-6 text-lg">
  <div className=" text- text-left w-auto">
  Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.
  </div>
  
</div>
<div className="flex justify-center">
<button class="bg-gradient-to-r from-[#756aa1] to-[#afa5dc] lg:text-lg text-[0.8rem] Montserrat sm:px-8 lg:px-20 sm:py-4 lg:py-4 text-[#343045] rounded-full mt-10">TRY IT NOW</button>

</div>
</div>

</div>
<div className="text-white mt-2">
i'll finish this later plz remind me if u see this
</div>

</div>
<Foot />
</div>
            )
}else{
    return(
        <div>

      </div>
            )
}



}
export default Home;