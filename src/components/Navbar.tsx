function Navbar() {
    return (
        <div className="nav-col w-full flex flex-col">
            <div className="top-row flex flex-row items-center justify-between gap-2 p-3">
                <div className="arrow-btns flex flex-row items-center gap-2">
                    <button className="">left</button>
                    <button className="">right</button>
                </div>
                <div className="profile-explore-btns flex flex-row items-center gap-2">
                    <button className="bordered-button">Explore Premium</button>
                    <a href="">Install App</a>
                    <p>pfp</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 ps-4">
                <button className="bordered-button">All</button>
                <button className="bordered-button">Music</button>
                <button className="bordered-button">Podcasts</button>
            </div>
        </div>
    )
}

export default Navbar;