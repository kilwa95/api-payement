import './Button.css';
const Button = (props) => {
	return (
		<div onClick={props.onClick} className="button">
			{props.title}
		</div>
	);
};

export default Button;
