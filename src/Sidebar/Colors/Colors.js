import "./Colors.css"
import Input from "../../components/Input";

function Colors({handleChange}) {
    return (
        <div>
            <h2 className="sidebar-title color-title">Colors</h2>
            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="color" />
                <span className="checkmark"></span>All
            </label>

            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="color"
                color="black"
            />
            <Input
                handleChange={handleChange}
                value="blue"
                title="Blue"
                name="color"
                color="#87d7ff"
            />
            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="color"
                color="#f09284"
            />
            <Input
                handleChange={handleChange}
                value="green"
                title="Green"
                name="color"
                color="#73dea9"
            />
            <label className="sidebar-label-container">
                <input
                    type="radio"
                    onChange={handleChange}
                    value="white"
                    name="color"
                />
                <span
                    className="checkmark checkmark-light"
                    style={{ backgroundColor: "white"}}
                ></span>
                White
            </label>
        </div>
    );
}

export default Colors;