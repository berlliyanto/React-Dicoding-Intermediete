import { Plus } from "@phosphor-icons/react";
import FloatingActionButton from "../components/Elements/FloatingActionButton";
import HomeLayout from "../components/Layouts/HomeLayout";
import MainLayout from "../components/Layouts/MainLayout";

const HomePage = () => {
    return (
        <MainLayout title="Catatan Saya">
            <HomeLayout />
            <FloatingActionButton onClick={()=>{}} icon={<Plus className="text-white text-2xl"/>} />
        </MainLayout>
    )
}

export default HomePage;