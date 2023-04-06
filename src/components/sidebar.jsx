import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import home from '../assets/home.png'
import community from '../assets/community.png'
import report from '../assets/reports.svg'
import dashboard from '../assets/dashboard.svg'
import portfolio from '../assets/portfolio.svg'
import setting from '../assets/setting.svg'
import logout from '../assets/logout.svg'

export const Sidebar = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    const handleHover1 = () => {
      setIsHovered1(true);
    };
  
    const handleMouseLeave1 = () => {
      setIsHovered1(false);
    };
    const handleHover2 = () => {
      setIsHovered2(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsHovered2(false);
    };
    const handleHover3 = () => {
      setIsHovered3(true);
    };
  
    const handleMouseLeave3 = () => {
      setIsHovered3(false);
    };
    const handleHover4 = () => {
      setIsHovered4(true);
    };
  
    const handleMouseLeave4 = () => {
      setIsHovered4(false);
    };
    const handleHover5 = () => {
      setIsHovered5(true);
    };
  
    const handleMouseLeave5 = () => {
      setIsHovered5(false);
    };
    const handleHover6 = () => {
      setIsHovered6(true);
    };
  
    const handleMouseLeave6 = () => {
      setIsHovered6(false);
    };

  return (
    <div className='h-screen hidden lg:inline top-0 left-0 fixed w-[6vw]'>
        <div className="flex flex-col items-center justify-between px-4 pt-6 pb-8">
            <div className="flex flex-col items-center gap-6">
                <img className='w-[80%] 2xl:w-full' src={logo} alt='' />
                <div className="flex flex-col items-center gap-4">
                    <div className="relative flex items-center justify-center cursor-pointer ">
                        <img onMouseEnter={handleHover1} onMouseLeave={handleMouseLeave1} className='inline w-[80%] 2xl:w-full' src={dashboard} alt="" />
                        <div className= {`${isHovered1 ? 'inline' : 'hidden'}`}>
                            <button style={{'boxShadow': '0px 0px 1px #FFFFFF, 0px 15px 35px -5px rgba(17, 24, 38, 0.35), 0px 5px 15px -3px rgba(0, 0, 0, 0.2)'}} type='button' className="absolute bg-[#13161E] text-sm tracking-[0.02em] -top-1 text-white rounded-lg px-3 left-14">Dashboard</button>
                        </div>
                    </div>
                    <div className=" relative cursor-pointer flex justify-center items-center bg-[#F3F9FE] rounded p-1 ">
                        <img className='inline w-[80%] 2xl:w-full' src={home} alt="" />               
                    </div>
                    <div className="relative flex items-center justify-center p-1 cursor-pointer ">
                        <img onMouseEnter={handleHover2} onMouseLeave={handleMouseLeave2} className='inline w-[80%] 2xl:w-full' src={portfolio} alt="" />
                        <div className= {`${isHovered2 ? 'inline' : 'hidden'}`}>
                            <button style={{'boxShadow': '0px 0px 1px #FFFFFF, 0px 15px 35px -5px rgba(17, 24, 38, 0.35), 0px 5px 15px -3px rgba(0, 0, 0, 0.2)'}} type='button' className="absolute bg-[#13161E] text-sm tracking-[0.02em] -top-1 text-white rounded-lg px-3 left-14">Portfolio</button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center p-1 cursor-pointer ">
                        <img onMouseEnter={handleHover3} onMouseLeave={handleMouseLeave3} className='inline w-[80%] 2xl:w-full' src={community} alt="" />
                        <div className= {`${isHovered3 ? 'inline' : 'hidden'}`}>
                            <button style={{'boxShadow': '0px 0px 1px #FFFFFF, 0px 15px 35px -5px rgba(17, 24, 38, 0.35), 0px 5px 15px -3px rgba(0, 0, 0, 0.2)'}} type='button' className="absolute bg-[#13161E] text-sm tracking-[0.02em] -top-1 text-white rounded-lg px-3 left-14">Community</button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center p-1 cursor-pointer ">
                        <img onMouseEnter={handleHover4} onMouseLeave={handleMouseLeave4} className='inline w-[80%] 2xl:w-full' src={report} alt="" />
                        <div className= {`${isHovered4 ? 'inline' : 'hidden'}`}>
                            <button style={{'boxShadow': '0px 0px 1px #FFFFFF, 0px 15px 35px -5px rgba(17, 24, 38, 0.35), 0px 5px 15px -3px rgba(0, 0, 0, 0.2)'}} type='button' className="absolute bg-[#13161E] text-sm tracking-[0.02em] -top-1 text-white rounded-lg px-3 left-14">Reports</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="absolute flex flex-col items-center gap-4 bottom-8">
                <div className="relative flex items-center justify-center p-1 cursor-pointer ">
                    <img onMouseEnter={handleHover5} onMouseLeave={handleMouseLeave5} className='inline w-[80%] 2xl:w-full' src={setting} alt="" />
                    <div className= {`${isHovered5 ? 'inline' : 'hidden'}`}>
                        <button style={{'boxShadow': '0px 0px 1px #FFFFFF, 0px 15px 35px -5px rgba(17, 24, 38, 0.35), 0px 5px 15px -3px rgba(0, 0, 0, 0.2)'}} type='button' className="absolute bg-[#13161E] text-sm tracking-[0.02em] -top-1 text-white rounded-lg px-3 left-14">Settings</button>
                    </div>
                </div>
                <div className="relative flex items-center justify-center p-1 cursor-pointer ">
                    <img onMouseEnter={handleHover6} onMouseLeave={handleMouseLeave6} className='inline w-[80%] 2xl:w-full' src={logout} alt="" />
                    <div className= {`${isHovered6 ? 'inline' : 'hidden'}`}>
                        <button style={{'boxShadow': '0px 0px 1px #FFFFFF, 0px 15px 35px -5px rgba(17, 24, 38, 0.35), 0px 5px 15px -3px rgba(0, 0, 0, 0.2)'}} type='button' className="absolute bg-[#13161E] text-sm tracking-[0.02em] -top-1 text-white rounded-lg px-3 left-14">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}