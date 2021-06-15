import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const UserAccount = (props) => {
	let { type } = props;
	return (
		<div className="d-flex">
			<AccountCircleSharpIcon />
			<div>{type}</div>
		</div>
	);
};

export default UserAccount;
