import React, {  useContext , useState } from 'react';
import { CDataTable, CCard, CCardBody,CCollapse , CButton } from '@coreui/react';
import { TransactionContext } from "../contexts/TransactionContext";


const TransactionAdminPage = () => {
    const {transactionsMerchant } = useContext(TransactionContext);
	const [details, setDetails] = useState([])

	const toggleDetails = (index) => {
		const position = details.indexOf(index)
		let newDetails = details.slice()
		if (position !== -1) {
		  newDetails.splice(position, 1)
		} else {
		  newDetails = [...details, index]
		}
		setDetails(newDetails)
	  }

    return (
        <CCard>
			<CCardBody>
				<CDataTable
					items={transactionsMerchant}
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
						show_details:
						(item, index)=>{
						  return (
							<td className="py-2">
							  <CButton
								color="primary"
								variant="outline"
								shape="square"
								size="sm"
								onClick={()=>{toggleDetails(index)}}
							  >
								{details.includes(index) ? 'Hide' : 'Show'}
							  </CButton>
							</td>
							)
						},
						details:
						(item, index)=>{
							return (
							<CCollapse show={details.includes(index)}>
							<CCardBody>
							
							</CCardBody>
							</CCollapse>
						)
						}
							}}
				
				/>
			</CCardBody>
		</CCard>
    )
}
export default TransactionAdminPage;
