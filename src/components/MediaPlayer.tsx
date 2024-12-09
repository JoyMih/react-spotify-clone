// import { useEffect, useState } from 'react';
import albumCover from "../assets/bluepikmin-1.jpg";
import MoreMusicOptions from "./MoreMusicOptions";
import SongProgressBar from "./SongProgressBar";
// import MiniHamburgerMenu from './MiniHamburgerMenu';

function MediaPlayer() {
    // const [smallScreen, setSmallScreen] = useState(false);
    // useEffect(() => {
    //     const resizeHandler = () => {
    //         setSmallScreen(window.innerWidth <= 768);
    //     };
    //     resizeHandler();
    //     window.addEventListener('resize', resizeHandler);
    //     return () => {
    //         window.removeEventListener('resize', resizeHandler);
    //     }
    // }, []);

    return (
        <div className="md:justify-around media-bar w-full h-[20vh] fixed bottom-0">
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
                < SongProgressBar />
            </div>
            < MoreMusicOptions />
            {/* {smallScreen ? < MiniHamburgerMenu/> : < MoreMusicOptions /> } */}
        </div>
    )
}

export default MediaPlayer;