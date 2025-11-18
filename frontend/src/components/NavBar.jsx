import { Link } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const NavBar = () =>{
    const {token} = useUserStore

    return(
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">FeedBack</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                    {!token ? (
                        <li>
                            <Link to={"/sigin"}>Войти</Link>
                        </li>
                    ) : (<li>                          
                            <Link to={"/logout"}>Выйти</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default NavBar