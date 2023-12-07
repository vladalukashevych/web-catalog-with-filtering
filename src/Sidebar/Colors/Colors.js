import "./Colors.css"

function Colors() {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>
        <label className="sidebar-label-container color-title">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>White
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Blue
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Red
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test2"/>
          <span className="checkmark"></span>Green
        </label>
    </div>
  );
}

export default Colors;