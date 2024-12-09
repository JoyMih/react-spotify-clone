function MoreMusicOptions() {
    return (
        <div className="hidden md:flex more-media-commands flex flex-row items-center justify-center object-scale-down">
            <button className="file-play-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-file-play"></i></button>
            <button className="mic-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-mic"></i></button>
            <button className="queue-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-view-list"></i></button>
            <button className="speaker-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-speaker"></i></button>
            <button className="volume-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-volume-up"></i></button>
            <button className="screen-cast-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-cast"></i></button>
            <button className="screen-size-btn borderless-btn right-bar-icons"><i className="text-[0.8rem] bi bi-arrows-angle-expand"></i></button>
        </div>
    )
}

export default MoreMusicOptions;