import MiniCard from "./MiniCard";
import miniCardData from "../Data/MiniCardData"

function Sidebar() {
    const uniqueMiniCards = miniCardData.map((info) => {
        return (
            < MiniCard
                key={ info.id }
                {...info}
            />
        )
    });

    return (
        <div className="sidebar h-full gap-2.5 p-2">
            <div className="add-content-bar">
                <button className="home borderless-btn"><i className="text-2xl pe-2 bi bi-house-heart"></i> Home </button>
                <button className="search borderless-btn"><i className="text-2xl pe-2 bi bi-search-heart"></i> Search </button>
            </div>
            <div className="add-content-bar gap-2.5">
                <div className="flex flex-row justify-between items-center">
                    <button className="library borderless-btn w-max">
                        <i className="text-2xl pe-2 bi bi-files-alt"></i> Your Library
                    </button>
                    <div className="flex items-center p-2">
                        <i className="text-2xl pe-1 bi bi-arrow-right"></i>
                        <i className="text-3xl pe-1 bi bi-plus"></i>
                    </div>
                </div>
                { uniqueMiniCards }
            </div>
        </div>
    )
}

export default Sidebar;