import React, {  useContext } from 'react';
import { CDataTable, CCard, CCardBody } from '@coreui/react';
import Switch from '../UI/switch/Switch';
import { MerchantContext } from "../contexts/MerchantContext";


const MerchantPage = () => {
	const { merchants, fields } = useContext(MerchantContext);
	
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
							return <Switch item={item} />;
						},
					}}
				/>
			</CCardBody>
		</CCard>
	);
};

export default MerchantPage;
