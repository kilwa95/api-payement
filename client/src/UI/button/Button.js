import './Button.css';
const Button = (props) => {
	return (
		<div onClick={props.onClick} className="add-cart">
			{props.title}
		</div>
	);
};

export default Button;
