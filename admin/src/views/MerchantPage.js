import React, { useEffect, useState } from 'react';

import merchantsHttp from '../services/merchantsHttp';

const MerchantPage = (props) => {
	const [ merchants, setMerchants ] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const merchants = await merchantsHttp.fetchMerchants();
			setMerchants(merchants.data.data.merchants);
		}
		fetchData();
	}, []);

	return <div>hello world</div>;
};

export default MerchantPage;
