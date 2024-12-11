const authEndpoint = "https://accounts.spotify.com/authorize";
const clientID = import.meta.env.CLIENT_ID;
const redirectUri = "https://localhost:5173/";
const scopes = [
    "user-library-read",
    "user-top-read",
    "playlist-read-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
];

export const loginEndpoint = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=
${scopes.join("20%")}&response_type=token&show_dialog=true`;