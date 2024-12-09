import albumCover from "../assets/bluepikmin-1.jpg"

function MediaPlayer() {

    return (
        <div className="media-bar w-full h-[20vh] fixed bottom-0 ">
            <div className="current-album-info flex flex-row min-w-[28vh]">
                <img src={albumCover} alt="" className="album-cover-art flex pe-3 object-contain" />
                <div className="flex flex-col">
                    <p>Song Title</p>
                    <p>Album Title</p>
                </div>
            </div>
            <div className="play-controller flex flex-col justify-around items-center">
                <div className="playback-buttons flex flex-row object-scale-down">
                    <button className="shuffle-button borderless-btn"><i className="text-[0.85rem] bi bi-shuffle"></i></button>
                    <button className="previous-button borderless-btn"><i className="text-[1.2rem] bi bi-skip-start-fill"></i></button>
                    <button className="play-button borderless-btn"><i className="text-[1.2rem] bi bi-play-fill"></i></button>
                    <button className="skip-button borderless-btn"><i className="text-[1.2rem] bi bi-skip-end-fill"></i></button>
                    <button className="replay-button borderless-btn"><i className="text-[0.85rem] bi bi-repeat"></i></button>
                </div>
                <div className="progress-bar">
                    <p>song progress bar</p>
                </div>
            </div>
            <div className="more-media-commands flex flex-row items-center justify-center object-scale-down">
                <button className="file-play-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-file-play"></i></button>
                <button className="mic-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-mic"></i></button>
                <button className="queue-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-view-list"></i></button>
                <button className="speaker-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-speaker"></i></button>
                <button className="volume-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-volume-up"></i></button>
                <button className="screen-cast-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-cast"></i></button>
                <button className="screen-size-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-arrows-angle-expand"></i></button>
            </div>
        </div>
    )
}

export default MediaPlayer;