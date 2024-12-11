import MusicCollectionRow from "./MusicCollectionRow";


function MainHomeDisplay() {
    return(
        <div className="display w-[100%] lg:max-w-[71%] flex flex-col gap-y-3 overflow:auto">
            < MusicCollectionRow />
            < MusicCollectionRow />
        </div>
    )
}

export default MainHomeDisplay;