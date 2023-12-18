import {FiHeart} from "react-icons/fi"
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"
import "./Navigation.css"

const Navigation = ({handleInputChange, query}) => {
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter shoes name..."
                />
            </div>
        </nav>
    );
}

export default Navigation;
