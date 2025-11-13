import { Link } from "react-router-dom"

const NavBar = () =>
{
    return(
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">FeedBack</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar