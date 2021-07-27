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
					hover
					sorter
					pagination
					itemsPerPage={20}
					itemsPerPageSelect
					footer
					tableFilter
					columnFilter
				
				/>
			</CCardBody>
		</CCard>
    )
}
export default TransactionPage;
