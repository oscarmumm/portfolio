import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AppLayout = () => {
    return (
        <div className="bg-white text-slate-950 dark:bg-slate-800 dark:text-slate-100">
            <Header />
            <div className="mt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
