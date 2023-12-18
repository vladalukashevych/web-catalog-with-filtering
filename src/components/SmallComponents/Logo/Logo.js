import "./Logo.css";

function Logo({withName}) {
    let nameComponent = "";
    if(withName) {
        nameComponent = `Mr. Sneaker`;
    }

    return (
        <a href="/">
            <div className="logo-container">
                <span>🥾</span>
            </div>
            <span className="logo-name">{nameComponent}</span>
        </a>
    );
}

export default Logo;