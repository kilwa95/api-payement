import React from 'react';
import { CSwitch } from '@coreui/react';

import merchantsHttp from '../../services/merchantsHttp';

const Switch = ({ item, merchants, setMerchants }) => {
	const SwitchToggle = async (id) => {
		let merchant;
		if (item && item.valid) {
			merchant = await merchantsHttp.updateMerchants(id, { valid: false });
			setMerchants(
				merchants.map((m) => (m.id !== merchant.data.data.merchant.id ? m : merchant.data.data.merchant))
			);
		} else {
			merchant = await merchantsHttp.updateMerchants(id, { valid: true });

			setMerchants(
				merchants.map((m) => (m.id !== merchant.data.data.merchant.id ? m : merchant.data.data.merchant))
			);
		}
	};
	return (
		<td className="py-2">
			<CSwitch
				color={'success'}
				variant={'opposite'}
				shape={'pill'}
				labelOn={'on'}
				labelOff={'off'}
				value={'danger'}
				checked={item && item.valid ? true : false}
				onClick={(e) => SwitchToggle(item.id)}
			/>
		</td>
	);
};

export default Switch;
