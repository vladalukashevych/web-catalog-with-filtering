import "./Category.css"

function Category() {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>

            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>All
                </label>
            </div>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>Sneakers
                </label>
            </div>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>Flats
                </label>
            </div>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>Sandals
                </label>
            </div>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test"/>
                    <span className="checkmark"></span>Heels
                </label>
            </div>
        </div>);
}

export default Category;
