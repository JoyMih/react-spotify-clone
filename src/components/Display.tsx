import MainHomeDisplay from "./MainHomeDisplay";

// what even is this
function Display() {
    return (
        <div className="display w-[100%] lg:max-w-[71%] flex flex-col gap-y-3 overflow:auto">
            < MainHomeDisplay />
        </div>
    )
}

export default Display;