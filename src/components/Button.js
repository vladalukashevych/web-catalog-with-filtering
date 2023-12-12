function Button({onClickHandler, value, title, name, className}) {
    return (
        <button onClick={onClickHandler} value={value} name={name} className={className + " btns"}>
          {title}
        </button>
    );
}

export default Button;
