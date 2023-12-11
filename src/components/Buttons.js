function Button({onClickHandler, value, title, name}) {
    return (
        <button onClick={onClickHandler} value={value} name={name} className="btns">
          {title}
        </button>
    );
}

export default Button;
