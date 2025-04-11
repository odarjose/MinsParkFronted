/** este layout se va a repetir en todas las paginas y sera el contenedor principal de la aplicacion */

import {Header} from "@/components/common/Header";
import {Footer} from "@/components/common/Footer";
import {Cloud, Stars, Sun, Moon} from "lucide-react";

import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <Cloud className="text-white/50 w-20 h-20 absolute animate-float top-20 left-[10%]"/>
                <Cloud className="text-white/50 w-16 h-16 absolute animate-float-delayed top-40 right-[20%]"/>
                <Stars className="text-yellow-200 w-8 h-8 absolute animate-twinkle top-[15%] left-[30%]"/>
                <Stars className="text-yellow-200 w-6 h-6 absolute animate-twinkle-delayed top-[25%] right-[35%]"/>
                <Sun className="text-yellow-300 w-24 h-24 absolute animate-spin-slow top-10 right-10"/>
                <Moon className="text-gray-200 w-16 h-16 absolute animate-bounce-slow bottom-20 left-20"/>
            </div>
            <Header/>
            <div className="flex-grow">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};
export default Layout;
