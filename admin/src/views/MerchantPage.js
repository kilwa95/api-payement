import React, { useEffect, useState } from 'react';

import merchantsHttp from '../services/merchantsHttp';
import { CDataTable, CCard, CCardBody } from '@coreui/react';
import Switch from '../UI/switch/Switch';

const MerchantPage = (props) => {
	const [ merchants, setMerchants ] = useState([]);

	const fields = [
		{
			key: 'activate_company',
			label: '',
			sorter: false,
			filter: false
		},
		{ key: 'companyName' },
		{ key: 'email' },
		{ key: 'phone' },
		{ key: 'valid' },
		{ key: 'city' },
		{ key: 'postalCode' },
		{ key: 'street' }
	];

	useEffect(() => {
		async function fetchData() {
			const merchants = await merchantsHttp.fetchMerchants();
			setMerchants(merchants.data.data.merchants);
		}
		fetchData();
	}, []);

	return (
		<CCard>
			<CCardBody>
				<CDataTable
					items={merchants}
					fields={fields}
					hover
					sorter
					pagination
					itemsPerPage={20}
					itemsPerPageSelect
					footer
					tableFilter
					columnFilter
					scopedSlots={{
						activate_company: (item) => {
							return <Switch />;
						},
						city: (item) => {
							return <td className="py-2">{item.address.city}</td>;
						},
						postalCode: (item) => {
							return <td className="py-2">{item.address.postalCode}</td>;
						},
						street: (item) => {
							return <td className="py-2">{item.address.street}</td>;
						}
					}}
				/>
			</CCardBody>
		</CCard>
	);
};

export default MerchantPage;
