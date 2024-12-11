import albumCover from "../assets/bluepikmin-1.jpg";
function MusicCollectionRow() {
    return (
        <div className="flex flex-row gap-2 w-full">
            <div className="column-divider">
                <h2 className="category-label pb-4">
                    <p> Insert Props String Here </p>
                </h2>
                <div className="music-row flex flex-row ps-3 gap-x-5">
                    <div className="music-col flex flex-col items-start">
                        <img src={ albumCover } alt="" className="row-album-format"/>
                        <p> collection title </p>
                        <p> collection description </p>
                    </div>
                    <div className="music-col flex flex-col items-start">
                        <img src={ albumCover } alt="" className="row-album-format"/>
                        <p> collection title </p>
                        <p> collection description </p>
                    </div>
                    <div className="music-col flex flex-col items-start">
                        <img src={ albumCover } alt="" className="row-album-format"/>
                        <p> collection title </p>
                        <p> collection description </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicCollectionRow;