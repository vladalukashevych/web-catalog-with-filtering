import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({handleChange}) {
    return (<>
        <section className="sidebar">
            <a href="/">
                <div className="logo-container">
                    <h1>🥾</h1>
                </div>
            </a>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>);
}

export default Sidebar;