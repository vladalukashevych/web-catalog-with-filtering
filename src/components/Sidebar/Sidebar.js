import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Logo from "../Logo/Logo";

function Sidebar({handleChange}) {
    return (<>
        <section className="sidebar">
            <Logo />
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>);
}

export default Sidebar;