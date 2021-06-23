import React, { Suspense } from 'react';
import { CContainer, CFade } from '@coreui/react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes/routes';

import './Body.css';

const Body = (props) => {
	return (
		<div className="body">
			<CContainer>
				<Suspense>
					<Switch>
						{routes.map((route, index) => {
							return (
								route.component && (
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={(props) => (
											<CFade>
												<route.component {...props} />
											</CFade>
										)}
									/>
								)
							);
						})}
						<Redirect from="/admin" to="/admin/merchants" />
					</Switch>
				</Suspense>
			</CContainer>
		</div>
	);
};

export default Body;
