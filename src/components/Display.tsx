import { Routes, Route } from "react-router-dom"
import MainHomeDisplay from "./MainHomeDisplay";

function Display() {
    return (
        <div className="display w-[100%] lg:max-w-[71%] flex flex-col gap-y-3 overflow:auto">
            <Routes>
                < Route path="/" element={< MainHomeDisplay />} />
            </Routes>
        </div>
    )
}

export default Display;