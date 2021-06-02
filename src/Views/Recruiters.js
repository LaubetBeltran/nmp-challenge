import React, { useEffect, useState } from 'react'
import ShortHeader from '../Components/ShortHeader';
import SmallFooter from '../Components/SmallFooter';
import TableRecluter from '../Components/TableRecluter';
import FilterVacants from '../Components/FilterVacants';
import FilterStatus from '../Components/FilterStatus';

import openModal from '../Components/ModalFunction';
import ModalPreSingup from '../Components/ModalPreSignup';

import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import '../Styles/RecruiterView.css'


const db = firebase.firestore();

const Recruiters = ({userName}) => {
	const [user, setUser] = useState({});
	const [recruiter, setRecruiter] = useState({})
	const [value, setValue] = useState();
	const [postulants, setPostulants] = useState([]);
	const [allData, setAllData] = useState([]);
	


	const datas = () => {
		db.collection('candidates').orderBy('status').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach(async (doc) => {
				docs.push({ ...doc.data() });
			})
			setAllData(docs);
			setPostulants(docs);
		})
	}

	useEffect(() => {
		datas();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])



	useEffect(() => {
		const user = firebase.auth().currentUser;
		if (user != null) {
			console.log(user.uid);

			db.collection("users").where("UID", "==", user.uid).get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						setUser(doc.data())
						db.collection("recruiters").where("id", "==", doc.data().recruiterID).get()
							.then((querySnapshot) => {
								querySnapshot.forEach((doc) => {
									setRecruiter(doc.data())
								})
							})
					});
				})
				.catch(function (error) {
					console.log("Error getting documents: ", error);
				});
		}
	}, [])


	const registerCandidateBtn = () => {
		openModal(ModalPreSingup);
	}

	return (
		<div className='profile-container'>
			<ShortHeader />
			<div className='displayDataCandidates'>
				{userName &&
					<p>
						¡Hola, {userName}!
					</p>
				}
				{/* <div className="mainContainer"> */}
				<div className="buttonsRecruiters">
					<div className="selectsRecluters">
						<FilterStatus postulants={postulants} setPostulants={setPostulants} allData={allData} />
						<FilterVacants postulants={postulants} setPostulants={setPostulants} allData={allData} />

					</div>
					<input type='button'
						id=''
						className='btn-formNewCandidate'
						value='REGISTRAR NUEVO CANDIDATO'
						onClick={registerCandidateBtn}
					/>
				</div>
				<div className="tableContainer">
					<TableRecluter postulants={postulants} />
				</div>
			</div>
			<SmallFooter />
		</div>



	)
}

export default Recruiters;