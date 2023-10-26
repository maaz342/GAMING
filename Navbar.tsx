"use client"
import React,{useState} from 'react'
import { usePathname } from "next/navigation"


import {Link} from 'react-scroll/modules'
import { useTheme } from 'next-themes'
import {RiMoonFill,RiSunLine} from 'react-icons/ri'
import { IoMdMenu,IoMdClose } from 'react-icons/io'
interface Navitem{
    page:string
    lbel:string
}
const navitems: Array<Navitem> = [
{
    lbel:"home",
    page:"home",
},
{
    lbel:"about",
    page:"about",
},
{
    lbel:"Projects",
    page:"Projects",
},
]




const Navbar = () => {
    const { systemTheme, theme , setTheme }= useTheme()
    const currentheme = theme==="system"?systemTheme:theme
    const [navbar,setNavbar]= useState(false)

  return (
    <header className='w-full mx-auto px-4 shadow  fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
        <div className='justify-between md:items-center md:flex'>
         <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>

          
            <div className='md:py-5 md:block'>
                   <h2 className='text-2xl font-bold'>MAAZ KAMRAN</h2>
            </div>
          <div className='md:hidden'>
            <button onClick={()=>setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={30}/>:<IoMdMenu size={30}/>}
            </button>
            </div>
            </div>
            </div>
            
            


            <div>
            <div
            className={`flex-1 justify-self-center pb-3 space-x-12 mt-8 md:block md:pb-0 md:mt-0 md:space-x-12 dark:text-white ${
              navbar ? "block" : "hidden"
            }`}
            >
            <div className='items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0 font-bold '>
                {navitems.map((item,id)=>{
                    return(
                        <Link
                        key={id}
                      

                        to={item.page}
                       
                        className={
                          "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 "
                        }
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                        >
                        <div className='className=px-4 py-2 border border-neutral-900 hover:bg-neutral-500 dark:bg-neutral-900'>
                       {item.lbel}
  
                       </div>
                      </Link>
                    )

                })}
                {currentheme ==="dark" ?(
                    <button onClick={()=>setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl">
                        <RiSunLine size={25} color="black"/>
                    </button>
                ):(
                    <button onClick={()=>setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl">
                        <RiMoonFill size={25}/>
                        </button>
                )}
                </div> 
        </div>
        </div>
        </div>

    </header>

)}

export default Navbar
