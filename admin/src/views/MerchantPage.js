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
