import React, {  useContext } from 'react';
import { CDataTable, CCard, CCardBody } from '@coreui/react';
import { TransactionContext } from "../contexts/TransactionContext";


const TransactionAdminPage = () => {
    const {transactionsMerchant } = useContext(TransactionContext);

    return (
        <CCard>
			<CCardBody>
				<CDataTable
					items={transactionsMerchant}
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
export default TransactionAdminPage;
