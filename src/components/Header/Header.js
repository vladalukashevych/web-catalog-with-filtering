import "../../pages/style.css";
import Logo from "../SmallComponents/Logo/Logo.js";

function Header() {
    return (
        <div className="header">
            <Logo withName={true}/>
            <div className="header-btns">
                <a className="btn-main" href="\products">Show Sneakers</a>
                <a className="btn-main" href="\contact">Contact me</a>
            </div>
        </div>
    );
}

export default Header;