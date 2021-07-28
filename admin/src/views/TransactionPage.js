import React, {  useContext , useState } from 'react';
import { CDataTable, CCard, CCardBody , CCollapse  } from '@coreui/react';
import { TransactionContext } from "../contexts/TransactionContext";


const TransactionPage = () => {
    const {transactions , fields } = useContext(TransactionContext);
	const [details, setDetails] = useState([])

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
						opertations: (item) => {
							return(
								<CCollapse show={true}>

								</CCollapse>
							)
						}
					}}
				
				/>
			</CCardBody>
		</CCard>
    )
}
export default TransactionPage;
