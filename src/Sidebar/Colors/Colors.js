import "./Colors.css"
import Input from "../../components/Input";

function Colors() {
    return (
        <div>
            <h2 className="sidebar-title color-title">Colors</h2>
            <div>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
            </div>
        </div>
    );
}

export default Colors;