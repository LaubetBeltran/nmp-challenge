import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from './Views/Login'
import UserProfile from './Views/UserProfile'
import Welcome from './Views/Welcome'
import firebase from './Firebase/firebase'
import { ToastProvider } from 'react-toast-notifications'
import SignUp from './Views/SingUp';
import Recruiters from './Views/Recruiters';
import MockView from './Views/MockView';

function App() {

	const [isLogin, setIsLogin] = useState(false)
	const [buttonViews, setButtonViews] = useState('/recruiters');

	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				setIsLogin(true);
				console.log('user')
			} else {
				setIsLogin(false);
				console.log('no user')
			}
		});
	});

	return (
		<ToastProvider>
			<div>
				<BrowserRouter>
					<Switch>
						{isLogin === true ?
							<Fragment>
								<Route exact path="/" render={() =>
									<Welcome
										isLogin={isLogin}
									/>}
								/>
								<Route exact path="/profile" component={UserProfile} />
								<Route exact path="/signup" component={SignUp} />
								<Route exact path="/recruiters" component={Recruiters} buttonViews={buttonViews} setButtonViews={setButtonViews}/>
								<Route exact path="/mock" component={MockView} />
							</Fragment>
							:
							<Fragment>
								<Route exact path="/" component={Login} />
							</Fragment>
						}
					</Switch>
				</BrowserRouter>
			</div>
		</ToastProvider>
	);
}

export default App;
