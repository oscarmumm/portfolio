import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const AppLayout = () => {
    return (
        <div>
            <Header />
            <div className="mt-12">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
