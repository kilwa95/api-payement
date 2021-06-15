import React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px'
	}
}))(Badge);

const CartShopping = (props) => {
	return (
		<IconButton aria-label="cart">
			<StyledBadge badgeContent={4} color="secondary">
				<ShoppingCartIcon />
			</StyledBadge>
		</IconButton>
	);
};

export default CartShopping;
