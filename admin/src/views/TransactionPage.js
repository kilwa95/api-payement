import React, {  useContext } from 'react';
import { CDataTable, CCard, CCardBody } from '@coreui/react';
import { TransactionContext } from "../contexts/TransactionContext";


const TransactionPage = () => {
    const {transactions , fields } = useContext(TransactionContext);

    return (
        <CCard>
			<CCardBody>
				<CDataTable
					items={transactions}
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
						userFirstName: (item) => {
							return <td className="text-center py-2">{item.user.firstName}</td>;
						},
						userLastName: (item) => {
							return <td className="text-center py-2">{item.user.lastName}</td>;
						},
						deliveryStreet: (item) => {
							return <td className="text-center py-2">{item.delivery.street}</td>;
						},
						deliveryCity: (item) => {
							return <td className="text-center py-2">{item.delivery.city}</td>;
						},
						deliveryPostalCode: (item) => {
							return <td className="text-center py-2">{item.delivery.postalCode}</td>;
						},
						produitsInCart: (item) => {
							return <td className="text-center py-2">{item.products.length}</td>;
						},
					}}
				/>
			</CCardBody>
		</CCard>
    )
}
export default TransactionPage;
