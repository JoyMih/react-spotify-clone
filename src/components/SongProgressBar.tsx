function SongProgressBar() {
    return (
        <div className="flex flex-row gap-x-2 justify-between items-center">
            <p>0:00</p>
            <div className="w-[30vw] h-[0.22rem] rounded bg-white progress-bar">
            </div>
            <p>3:21</p>
        </div>
    )
}

export default SongProgressBar;