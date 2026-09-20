import { BrowserRouter, Routes, Route } from "react-router";
import { AppLayout } from "../layout/AppLayout";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
