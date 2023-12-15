import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import PageNotFound from "../pages/404Page";
import ArsipPage from "../pages/ArsipPage";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/detail/:id" element={ <DetailPage /> } />
            <Route path="/arsip" element={ <ArsipPage /> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    )
}

export default RoutesApp;