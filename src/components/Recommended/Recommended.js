import Button from "../Button";
import "./Recommended.css"

function Recommended({handleClick}) {
    return (
        <div>
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
                <Button onClickHandler={handleClick} value="" title="All Products" name="recommended" className="recommended-selected"/>
                <Button onClickHandler={handleClick} value="Nike" title="Nike" name="recommended"/>
                <Button onClickHandler={handleClick} value="Adidas" title="Adidas" name="recommended"/>
                <Button onClickHandler={handleClick} value="Puma" title="Puma" name="recommended"/>
                <Button onClickHandler={handleClick} value="Vans" title="Vans" name="recommended"/>
            </div>
        </div>
    );
}

export default Recommended;