"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const modules_1 = require("react-scroll/modules");
const next_themes_1 = require("next-themes");
const ri_1 = require("react-icons/ri");
const io_1 = require("react-icons/io");
const navitems = [
    {
        lbel: "home",
        page: "home",
    },
    {
        lbel: "about",
        page: "about",
    },
    {
        lbel: "Projects",
        page: "Projects",
    },
];
const Navbar = () => {
    const { systemTheme, theme, setTheme } = (0, next_themes_1.useTheme)();
    const currentheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavbar] = (0, react_1.useState)(false);
    return (<header className='w-full mx-auto px-4 shadow  fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600'>
        <div className='justify-between md:items-center md:flex'>
         <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>

          
            <div className='md:py-5 md:block'>
                   <h2 className='text-2xl font-bold'>MAAZ KAMRAN</h2>
            </div>
          <div className='md:hidden'>
            <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <io_1.IoMdClose size={30}/> : <io_1.IoMdMenu size={30}/>}
            </button>
            </div>
            </div>
            </div>
            
            


            <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 dark:text-white ${navbar ? "block" : "hidden"}`}>
            <div className=' items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold '>
                {navitems.map((item, id) => {
            return (<modules_1.Link key={id} to={item.page} className={"block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 "} activeClass="active" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setNavbar(!navbar)}>
                       {item.lbel}
  
                        
                      </modules_1.Link>);
        })}
                {currentheme === "dark" ? (<button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl">
                        <ri_1.RiSunLine size={25} color="black"/>
                    </button>) : (<button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl">
                        <ri_1.RiMoonFill size={25}/>
                        </button>)}
                </div> 
        </div>
        </div>
        </div>

    </header>);
};
exports.default = Navbar;
