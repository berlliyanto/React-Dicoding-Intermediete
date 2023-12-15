import { Link } from "react-router-dom"
import Divider from "../Elements/Divider"

const Card = ({id, title, body, createdAt}) => {
    return (
        <div className="border border-slate-500 p-4 rounded-md shadow-xl w-full md:w-80">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-slate-400 text-sm mb-2">{createdAt}</p>
            <div className="h-44 overflow-auto border-slate-200 border box-border p-0.5 rounded-sm">
                <p>{body}</p>
            </div>
            <Divider />
            <div className="flex justify-end">
                <Link to={`/detail/${id}`} className="underline underline-offset-2 hover:text-blue-400 duration-300">Detail</Link>
            </div>
        </div>
    )
}

export default Card