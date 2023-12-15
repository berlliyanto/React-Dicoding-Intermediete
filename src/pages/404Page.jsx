import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <main className="h-screen w-full flex justify-center items-center flex-col gap-4">
        <h1 className="text-xl font-bold">Page Not Found (404)</h1>
        <Link to={"/"} className="text-lg font-semibold underline underline-offset-2">Kembali ke Home</Link>
        </main>
        )
}

export default PageNotFound;