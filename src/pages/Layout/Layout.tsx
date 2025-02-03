/** este layout se va a repetir en todas las paginas y sera el contenedor principal de la aplicacion */

import { Header } from "@/components/specific/Header";
import { Footer } from "@/components/specific/Footer";


import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[var(--color-fondo)] min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
export default Layout;
