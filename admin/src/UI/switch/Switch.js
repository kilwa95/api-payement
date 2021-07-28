import React , {useContext} from 'react';
import { CSwitch } from '@coreui/react';
import { MerchantContext } from "../../contexts/MerchantContext";

const Switch = ({ item }) => {
	const { switchToggle } = useContext(MerchantContext);

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
				onClick={(e) => switchToggle(item)}
			/>
		</td>
	);
};

export default Switch;
