import { loginEndpoint } from "../spotify";

function LoginPage() {
    return(
        <div className="login flex flex-col w-full h-full justify-center items-center gap-2">
            <i className="text-3xl bi bi-spotify"></i>
            <button><a href={loginEndpoint}>LOGIN WITH SPOTIFY</a></button>
        </div>
    )
}

export default LoginPage;