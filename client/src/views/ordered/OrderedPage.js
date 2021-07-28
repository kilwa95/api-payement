import React, {  useState  , useContext} from 'react';
import MenuMerchant from '../../UI/menu/MenuMerchant';
import { Redirect } from "react-router-dom";
import { CredentialContext } from "../../contexts/CredentialContext";
import { ListContext } from "../../contexts/ListContext";
import { CDataTable ,CContainer, CCard, CCardBody , CButton} from '@coreui/react'


const OrderedPage = () => {
	const { token} = useContext(CredentialContext);
	const { ordereds ,fields , reimburse } = useContext(ListContext);
	const [ modal, setModal ] = useState(false);

	return (
		<React.Fragment>
		{ token ? 
		<>
			<MenuMerchant setModal={setModal} />
			<CContainer style={{marginTop: '24px'}}>
				<CCard>
					<CCardBody>
					<CDataTable 
					items={ordereds}
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
					rembourser: (item) => {
							return (
							<CButton onClick={() => reimburse(item.id)} color="info">{item.status === 'reimbursed' ? 'déja reimbursed ': 'reimburse'}</CButton>
							);
					},
					}}
					/>
					</CCardBody>
				</CCard>
			
			</CContainer>
		</>
		: <Redirect to="/" />  }
		</React.Fragment>

	);
};
export default OrderedPage;
