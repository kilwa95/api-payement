import React from 'react';
import { CSwitch } from '@coreui/react';

const Switch = (props) => {
	return (
		<td className="py-2">
			<CSwitch
				color={'success'}
				variant={'opposite'}
				shape={'pill'}
				labelOn={'on'}
				labelOff={'off'}
				value={'danger'}
				checked
			/>
		</td>
	);
};

export default Switch;
